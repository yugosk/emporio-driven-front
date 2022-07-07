import { HomeBanner, HomeImage, StyledWrapper, StyledProduct, ProductWrapper, HomeContainer } from './Home';
import homePhoto from "../../assets/bebidas-home.jpeg";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [productList, setProductList] = useState([]);
  async function getHomeProducts() {
    const response = await axios.get("http://http://emporio-driven.herokuapp.com/");
    setProductList(response.data);
  }

  useEffect(() => getHomeProducts(), []);

  return (
    <HomeContainer>
      <StyledWrapper>
        <HomeImage src={homePhoto} alt="Vinhos diversos dispostos" />
        <HomeBanner>
          <p>
            Seja bem vindo(a) à Empório Driven, <br /> frete grátis em pedidos
            acima de R$ 300,00!
          </p>
        </HomeBanner>
      </StyledWrapper>
      <ProductWrapper>
        <ProductList list={productList} />
      </ProductWrapper>
    </HomeContainer>
  );
}

function ProductList({ list }) {
  if (list.length > 0) {
    return (
      <>
        {list.map((product, index) => {
          return (
            <StyledProduct key={index}>
              <img src={product.image} />
              <p>{product.name}</p>
              <em>R$ {product.price.toFixed(2)}</em>
            </StyledProduct>
          );
        })}
      </>
    );
  } else {
    return <Oval color="#ff8b1e" height={80} width={80} />;
  }
}