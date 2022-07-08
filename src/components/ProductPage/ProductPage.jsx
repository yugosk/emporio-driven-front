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
    async function getProducts() {
       try {
        const response = await axios.get(`http://http://emporio-driven.herokuapp.com/${category}/${product}`);
        const categoria = await axios.get(`http://http://emporio-driven.herokuapp.com/${category}`)
        setProductRender(response.data);
        setcategoryRender(categoria.data)
       } catch (error) {
         return error
         
       }
      
    }
     useEffect(() => getProducts(), [category, product]);
     console.log(categoryRender)
    return(
        <Container>
            <h1> 
                <Link to={`/`} style={{ textDecoration: 'none' }}>Início/ </Link>
                <Link to={`/`} style={{ textDecoration: 'none' }}>{productRender.category}/ </Link>
                {productRender.name}
            </h1>
          <Product>
              <Imagem>
                  {productRender.image}
              </Imagem>
              <Info>
                <Details>
                <h2>{productRender.name}</h2>
                <h3>R${productRender.price}</h3>
                </Details>
                <Buy>
                    <h4>{productRender.inventory} em estoque</h4>
                    <Buy2>
                    <input placeholder="0" type="number"/>
                    <Button>Comprar</Button>
                    </Buy2>
                  </Buy>
              </Info>
             </Product>  
          <Related>
              <h3>Produtos Relacionados</h3>
              <ProductList list={categoryRender} />
              <RelatedProduct>
                  <EachProduct>
                  <Image>
                    Oi
                </Image>
                <h4>Vinho Quinta do Crasto Vinha da Ponte 750ml</h4>
                <h5>R$2.375,00</h5>
                <ButtonRelated>Comprar</ButtonRelated>
                  </EachProduct>
                  <EachProduct>
                  <Image>
                    Oi
                </Image>
                <h4>Vinho Quinta do Crasto Vinha da Ponte 750ml</h4>
                <h5>R$2.375,00</h5>
                <ButtonRelated>Comprar</ButtonRelated>
                  </EachProduct>
                  <EachProduct>
                  <Image>
                    Oi
                </Image>
                <h4>Vinho Quinta do Crasto Vinha da Ponte 750ml</h4>
                <h5>R$2.375,00</h5>
                <ButtonRelated>Comprar</ButtonRelated>
                  </EachProduct>
                  <EachProduct>
                  <Image>
                    Oi
                </Image>
                <h4>Vinho Quinta do Crasto Vinha da Ponte 750ml</h4>
                <h5>R$2.375,00</h5>
                <ButtonRelated>Comprar</ButtonRelated>
                  </EachProduct>
              </RelatedProduct>
          </Related>
        </Container>
    )
}

function ProductList({ list }) {
  if (list.length > 0) {
    return (
      <>
        {list.map((product) => {
          return (
            
              <p>{product.name}</p>
             
          );
        })}
      </>
    );
  } else {
    return <Oval color="#ff8b1e" height={80} width={80} />;
  }
}