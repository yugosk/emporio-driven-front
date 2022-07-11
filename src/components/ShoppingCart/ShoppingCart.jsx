import { Button, PurchaseContent, PurchaseWrapper, PurchaseSections, SubSection, CartTitle, CartWrapper, Row, Dividers } from "./ShoppingCart.js";
import { useState, useContext } from "react";
import { HomeContainer } from "../Home/Home.js";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti"
import { useNavigate } from "react-router-dom";
import CartContext from "../../contexts/CartContext.js";

export default function Cart() {
    const { cart } = useContext(CartContext);
    const [newCart, setCart] = useState([...cart]);
    
    return (
        <HomeContainer>
            <CartTitle>
                <h1>Carrinho</h1>
            </CartTitle>
            <CartDisplay list={cart} setCart={setCart} cart={cart} />
        </HomeContainer>
    );
}

function CartDisplay({ list, setCart, cart }) {
    const navigate = useNavigate();
    function calculateTotal() {
        let sum = 0;
        for (let i=0; i<list.length; i++) {
            const price = list[i].price * list[i].quantity;
            sum += price;
        }
        return sum;
    }

    if (list.length === 0) {
        return (
            <CartWrapper>
                <p>O carrinho se encontra vazio!</p>
                <Link to="/" style={{color: "#add8e6"}}>
                    <p style={{color: "#add8e6"}}>Retornar à página inicial</p>
                </Link>
            </CartWrapper>
        );
    } else {
        return (
            <>
                <CartWrapper>
                    <CartTableTitles />
                    <CartItems list={list} setCart={setCart} cart={cart} />
                </CartWrapper>
                <PurchaseWrapper>
                    <PurchaseContent>
                        <p>Total no carrinho</p>
                        <PurchaseSections>
                            <SubSection><p>Subtotal</p> <p>R$ {calculateTotal().toFixed(2)}</p></SubSection>
                            <SubSection><p>Entrega</p> <p>R$ {(calculateTotal() > 300) ? "0,00" : "25,00"}</p></SubSection>
                            <SubSection><p>Total</p> <em>R$ {(calculateTotal() > 300) ? calculateTotal() : calculateTotal() + 25}</em></SubSection>
                        </PurchaseSections>
                        <Button onClick={() => navigate("/finalizar-compra")}>FINALIZAR COMPRA</Button>
                    </PurchaseContent>
                </PurchaseWrapper>
            </>
        );
    }
}

function CartTableTitles() {
    return (
        <Row>
            <Dividers></Dividers>
            <Dividers></Dividers>
            <Dividers><p>Produto</p></Dividers>
            <Dividers><p>Preço</p></Dividers>
            <Dividers><p>Quantidade</p></Dividers>
            <Dividers><p>Total</p></Dividers>
        </Row>
    );
}

function CartItems({ list, setCart, cart }) {
    function removeFromCart(name) {
        const newArray = cart.filter(item => item.name !== name);
        setCart(newArray);
    }

    return (
        <>
            {list.map((item, index) => {
                return (
                    <Row key={index}>
                        <Dividers onClick={removeFromCart(item.name)}><TiDelete color="#bababa" size={"24px"} /></Dividers>
                        <Dividers><img src={item.image} /></Dividers>
                        <Dividers><em>{item.name}</em></Dividers>
                        <Dividers><em>R${item.price.toFixed(2)}</em></Dividers>
                        <Dividers><em>{item.quantity}</em></Dividers>
                        <Dividers><em>R${(item.price * item.quantity).toFixed(2)}</em></Dividers>
                    </Row>
                );
            })}
        </>
    );
}
