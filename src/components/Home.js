import styled from "styled-components";
import homePhoto from "../assets/bebidas-home.jpeg";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [productList, setProductList] = useState([]);
  async function getHomeProducts() {
    const response = await axios.get("http://localhost:5000/");
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
      <ProductList list={productList} />
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

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  align-items: center;
  justify-content: flex-start;
  padding-top: 25px;
`;

const StyledProduct = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 85%;
  background-color: #f5f5f0;
  border: 1px solid #e4dada;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 25px;

  img {
    width: 65%;
    margin-bottom: 8px;
  }

  p {
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    color: #605d5d;
    font-weight: 700;
    margin-bottom: 8px;
  }

  em {
    color: #109146;
    font-family: "Rubik", sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const HomeImage = styled.img`
  width: 70%;
  border-radius: 3px;
`;

const HomeBanner = styled.div`
  display: flex;
  width: 90%;
  background-color: #932a24;
  z-index: 1;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: absolute;
  border-radius: 3px;
  padding: 6px 0 6px 0;

  p {
    font-family: "Rubik", sans-serif;
    font-size: 15px;
    color: #ffffff;
    font-weigth: 400;
  }
`;
