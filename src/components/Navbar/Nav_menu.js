import styled from "styled-components";
export const Container = styled.div`
  position: fixed;
  position: relative;
  top: 80px;
  background-color: #282f29;
  width: 100%;
  height: 25px;
  padding: 10px 50px 20px 20px;
  z-index: 2;
`;
export const Icon = styled.div`
  height: 25px;
  width: 30px;
`;
export const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Cat = styled.div`
  color: #ffffff;
`;
export const Content = styled.div`
  position: absolute;
  left: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;
