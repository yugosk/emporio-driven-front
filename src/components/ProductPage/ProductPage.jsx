import {Container, Imagem, Product, Button, Related, Details, Buy, Info, Buy2, RelatedProduct, Image,ButtonRelated, EachProduct} from "./ProductPage.js";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
export default function ProductPage(){
    const {product, category} = useParams()
    const [productRender, setProductRender] = useState([]);
    const [categoryRender, setcategoryRender] = useState([]);
    const [quantity, setQuantity] = useState([])
    async function getProducts() {
       try {
        const response = await axios.get(`http://emporio-driven.herokuapp.com/${category}?/${product}`, {category, product});
        setProductRender(response.data);
        } catch (error) {
         return error
       }
       console.log(productRender.name)
      }
     useEffect(() => getProducts(), [product]);
     async function getCategory() {
      try {
        const categoria = await axios.get(`http://emporio-driven.herokuapp.com/${category}`)
       setcategoryRender(categoria.data)
      } catch (error) {
        return error
       }
    }
    useEffect(() => getCategory(), [{category, product}]);

    function Comprar(){
      if (quantity < 0){
        alert("Digite um número maior que 1")
      }

    }

        return(
        <Container>
            <h1> 
                <Link to={`/`} style={{ textDecoration: 'none' }}>Início/ </Link>
                <Link to={`/`} style={{ textDecoration: 'none' }}>{category}/ </Link>
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
                     <input type="number" placeholder="0" min="0" onChange={e => setQuantity(e.target.value)}  value={quantity}/>
                    <Button onClick={Comprar}>Comprar</Button>
                    </Buy2>
                  </Buy>
              </Info>
             </Product>  
          <Related>
              <h3>Produtos Relacionados</h3>
             
              <RelatedProduct>
              <ProductList list={categoryRender} />
                
              </RelatedProduct>
          </Related>
        </Container>
    )
}
function ProductList({ list, index }) {
  if (list.length > 0) {
    return (
      <>
        {list.map((product) => {
          return (
            <>
              <EachProduct key ={index}>
              <Image>
                  <img src={product.image} alt="Girl in a jacket" />
              </Image>
              <h4>{product.name}</h4>
              <h5>R${product.price}</h5>
              <ButtonRelated>Comprar</ButtonRelated>
            </EachProduct>

         
            </>
         );
        })}
      </>
    );
  } else {
    return <Oval color="#ff8b1e" height={80} width={80} />;
  }
}