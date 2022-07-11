import winePhoto from "../../assets/wine-barrels.jpeg";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useState, useEffect } from "react";
import { HomeBanner, HomeImage, StyledWrapper, StyledProduct, ProductWrapper, HomeContainer } from '../Home/Home.js';
import { Link } from "react-router-dom";

  
export default function Wine() {
    const [wineList, setWineList] = useState([]);
    async function getWineProducts() {
        const response = await axios.get("https://emporio-driven.herokuapp.com/categoria/vinho");
        setWineList(response.data);
    }

    useEffect(() => getWineProducts(), []);

    return (
        <HomeContainer>
            <StyledWrapper>
                <HomeImage src={winePhoto} alt="Diversos barris de fermentação" />
                <HomeBanner>
                    <p>
                        Confira nossa seleção de vinhos, contamos <br /> com uma variedade nacional e importada!
                    </p>
                </HomeBanner>
            </StyledWrapper>
                <ProductList list={wineList} />
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
