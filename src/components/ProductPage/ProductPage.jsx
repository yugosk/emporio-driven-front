import {Container, Imagem, Product, Button, Related, Details, Buy, Info, Buy2, RelatedProduct, Image,ButtonRelated, EachProduct} from "./ProductPage.js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CartContext from "../../contexts/CartContext.js";

export default function ProductPage(){
    const { product } = useParams()
    const [productRender, setProductRender] = useState([]);
    const [categoryRender, setcategoryRender] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [enableBuy, setEnableBuy] = useState(true);
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();

    async function getProducts() {
       try {
        const response = await axios.get(`https://emporio-driven.herokuapp.com/produto/${product}`);
        setProductRender(response.data.product);
        setcategoryRender(response.data.suggestions);
        } catch (error) {
         return error
       }
      }
     useEffect(() => getProducts(), [product]);

   function comprar(quantity){
    if (enableBuy) {
      if (quantity > productRender.inventory) {
        alert("Selecione um número menor que o estoque");
      } else if (quantity < 1) {
        alert("O número escolhido deve ser maior que 0");
      } else {
        setCart([...cart, {
          name: productRender.name,
          image: productRender.image,
          price: productRender.price,
          quantity: quantity
        }]);
        setEnableBuy(false);
        setTimeout(() => {
          alert("Item adicionado ao carrinho com sucesso!");
          navigate("/carrinho");
        }, 3000);
      }
    }
   }

        return(
        <Container>
            <h1> 
                <Link to={`/`} style={{ textDecoration: 'none' }}>Início/ </Link>
                <Link to={`/${productRender.category}`} style={{ textDecoration: 'none' }}>{productRender.category}/ </Link>
                {productRender.name}
            </h1>
          <Product>
              <Imagem>
              <img src={productRender.image} alt="imagem do produto" />
              </Imagem>
              <Info>
                <Details>
                <h2>{productRender.name}</h2>
                <h3>R${productRender.price}</h3>
                </Details>
                <Buy>
                    <h4>{productRender.inventory} em estoque</h4>
                    <Buy2>
                     <input type="number" placeholder="0" min="1" onChange={e => setQuantity(e.target.value)}  value={quantity}/>
                    <Button onClick={() => comprar(quantity)}>Comprar</Button>
                    </Buy2>
                  </Buy>
              </Info>
             </Product>  
        </Container>
    )
}
