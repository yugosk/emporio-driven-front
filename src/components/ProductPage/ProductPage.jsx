import {Container, Imagem, Product, Button, Related, Details, Buy, Info, Buy2, RelatedProduct, Image,ButtonRelated, EachProduct} from "./ProductPage.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function ProductPage(){

 


    return(
        <Container>
            <h1> 
                <Link to={`/`} style={{ textDecoration: 'none' }}>Início/ </Link>
                <Link to={`/`} style={{ textDecoration: 'none' }}>Vinhos/ </Link>
                Vinho Amitie Colheita Terroir Shiraz 750ml
            </h1>
          <Product>
              <Imagem>
                  Oi
              </Imagem>
              <Info>
                <Details>
                <h2>Vinho Amitie Colheita Terroir Shiraz 750ml</h2>
                <h3>R$115,50</h3>
                </Details>
                <Buy>
                    <h4>6 em estoque</h4>
                    <Buy2>
                    <input placeholder="0" type="number"/>
                    <Button>Comprar</Button>
                    </Buy2>
                  </Buy>
              </Info>
             </Product>  
          <Related>
              <h3>Produtos Relacionados</h3>
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