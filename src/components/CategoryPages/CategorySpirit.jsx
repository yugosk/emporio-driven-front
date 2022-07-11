import spiritPhoto from "../../assets/sorted-spirit-bottles.jpeg";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useState, useEffect } from "react";
import { HomeBanner, HomeImage, StyledWrapper, StyledProduct, ProductWrapper, HomeContainer } from '../Home/Home.js';
import { Link } from "react-router-dom";

  
export default function Spirit() {
    const [spiritList, setSpiritList] = useState([]);
    async function getSpiritProducts() {
        const response = await axios.get("https://emporio-driven.herokuapp.com/destilado");
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
