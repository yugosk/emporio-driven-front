import spiritPhoto from "../assets/sorted-spirit-bottles.jpeg";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useState, useEffect } from "react";
import { HomeBanner, HomeImage, StyledWrapper, StyledProduct, ProductWrapper, HomeContainer } from './Home/Home.js';
  
export default function Spirit() {
    const [spiritList, setSpiritList] = useState([]);
    async function getSpiritProducts() {
        const response = await axios.get("http://emporio-driven.herokuapp.com/destilado");
        setSpiritList(response.data);
    }

    useEffect(() => getSpiritProducts(), []);

    return (
        <HomeContainer>
            <StyledWrapper>
                <HomeImage src={spiritPhoto} alt="Diversas garrafas de destilados" />
                <HomeBanner>
                    <p>
                        Cachaça, whisky, rum ou conhaque? <br /> Na Empório Driven você encontra de tudo!
                    </p>
                </HomeBanner>
            </StyledWrapper>
                <ProductList list={spiritList} />
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
