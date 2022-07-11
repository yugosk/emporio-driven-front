import beerPhoto from "../../assets/beer-mugs.jpeg"
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useState, useEffect } from "react";
import { HomeBanner, HomeImage, StyledWrapper, StyledProduct, ProductWrapper, HomeContainer } from '../Home/Home.js';
import { Link } from "react-router-dom";
  
export default function Beer() {
    const [beerList, setBeerList] = useState([]);
    async function getBeerProducts() {
        const response = await axios.get("https://emporio-driven.herokuapp.com/cerveja");
        setBeerList(response.data);
    }

    useEffect(() => getBeerProducts(), []);

    return (
        <HomeContainer>
            <StyledWrapper>
                <HomeImage src={beerPhoto} alt="Diversas canecas de cerveja" />
                <HomeBanner>
                    <p>
                        Confira nossa seleção de cervejas, <br /> frete grátis em pedidos acima de R$ 300,00!
                    </p>
                </HomeBanner>
            </StyledWrapper>
                <ProductList list={beerList} />
        </HomeContainer>
    );
}

function ProductList({ list }) {
    if (list.length > 0) {
      return (
        <ProductWrapper>
          {list.map((product, index) => {
            return (
              <StyledProduct key={index}>
                <Link to={`/${product.category}/${product._id}`} style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", width: "100%", height: "100%", textDecoration: "none"}}>
                  <img src={product.image} />
                  <p>{product.name}</p>
                  <em>R$ {product.price.toFixed(2)}</em>
                </Link>
              </StyledProduct>
            );
          })}
        </ProductWrapper>
      );
    } else {
      return <Oval color="#ff8b1e" height={80} width={80} />;
    }
  }
