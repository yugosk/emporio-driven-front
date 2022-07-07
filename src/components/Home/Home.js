import styled from "styled-components";

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

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 85%;
`;

const StyledProduct = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  background-color: #f5f5f0;
  border: 1px solid #e4dada;
  border-radius: 5px;
  padding: 15px;
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
  filter: grayscale(10%);
  object-fit: cover;
  display: flex;
  height: 500px;
  object-position: 50% 30%;
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
  padding: 15px 0 15px 0;

  p {
    font-family: "Rubik", sans-serif;
    font-size: 50px;
    line-heigth: 52px;
    color: #ffffff;
    font-weigth: 400;
  }
`;

export {
  HomeBanner,
  HomeImage,
  StyledWrapper,
  StyledProduct,
  ProductWrapper,
  HomeContainer,
};
