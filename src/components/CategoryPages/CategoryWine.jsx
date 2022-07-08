import winePhoto from "../../assets/wine-barrels.jpeg";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useState, useEffect } from "react";
import { HomeBanner, HomeImage, StyledWrapper, StyledProduct, ProductWrapper, HomeContainer } from '../Home/Home.js';
  
export default function Wine() {
    const [wineList, setWineList] = useState([]);
    async function getWineProducts() {
        const response = await axios.get("http://emporio-driven.herokuapp.com/vinho");
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
                <img src={product.image} />
                <p>{product.name}</p>
                <em>R$ {product.price.toFixed(2)}</em>
              </StyledProduct>
            );
          })}
        </ProductWrapper>
      );
    } else {
      return <Oval color="#ff8b1e" height={80} width={80} />;
    }
  }
