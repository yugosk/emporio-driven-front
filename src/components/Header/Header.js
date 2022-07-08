import styled from "styled-components";
export const Container = styled.div`
  position: fixed;
  background-color: #ffffff;
  top: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 2;

  h1 {
    font-size: 20px;
  }
`;
export const Icon = styled.div`
  background-color: #b23428;
  border-radius: 100%;
  height: 25px;
  width: 25px;
`;
export const Button = styled.div`
  background-color: #b23428;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 80px;
  border-top-right-radius: 40px 30px;
  border-bottom-right-radius: 40px 30px;
`;
export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    border-color: #b23428;
    height: 40px;
    width: 300px;
    border-top-left-radius: 40px 30px;
    border-bottom-left-radius: 40px 30px;
    font-size: 10px;
  }
`;
export const Acount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  h4 {
    margin-left: 10px;
    font-color: black;
    font-size: 15px;
  }
`;
export const Carts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    margin-left: 10px;
    font-color: black;
    font-size: 10px;
  }
`;

export const WhiteFiller = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 5%;
  heigth: 100%;
`;
