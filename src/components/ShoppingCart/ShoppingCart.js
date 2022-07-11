import styled from "styled-components";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  background-color: #b23428;
  margin-top: 25px;
  border-radius: 5px;
  padding: 15px 0 15px 0;

  &:hover {
    background-color: #7f241c;
    cursor: pointer;
  }
`;

const PurchaseWrapper = styled.div`
  display: flex;
  width: 90%;
  margin-top: 50px;
  flex-direction: row;
  justify-content: flex-end;
`;

const PurchaseContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #f8f8f8;
  border-radius: 5px;
  border: 1px solid #787878;
  padding: 25px;
  box-sizing: border-box;

  p {
    color: #333e48;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const PurchaseSections = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #787878;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  border-radius: 5px;
`;

const SubSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  p {
    color: #333e48;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 20px;
    line-height: 20px;
  }
  em {
    color: #b23428;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 20px;
    line-height: 20px;
  }
`;

const CartTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 90%;
  text-align: flex-start;
  margin-top: 15px;
  margin-bottom: 25px;

  h1 {
    color: #333e48;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 32px;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;

  p {
    color: #333e48;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  border-bottom: 1px solid #d9d9d9;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;

  &:last-child {
    border: none;
  }
`;

const Dividers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 65%;
    height: 65%;
  }

  em {
    font-size: 18px;
    font-weight: 300;
    font-family: "Rubik", sans-serif;
  }

  p {
    font-size: 20px;
    font-weight: 400;
  }

  &:first-child {
    width: 8%;
  }

  &:nth-child(2) {
    width: 16%;
  }

  &:nth-child(3) {
    width: 33%;
  }

  &:nth-child(4) {
    width: 13%;
  }

  &:nth-child(5) {
    width: 17%;
  }

  &:nth-child(6) {
    width: 13%;
  }
`;

export {
  Button,
  PurchaseContent,
  PurchaseWrapper,
  PurchaseSections,
  SubSection,
  CartTitle,
  CartWrapper,
  Row,
  Dividers,
};
