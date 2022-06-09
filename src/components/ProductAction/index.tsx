import React from "react";

import { Container, Condition, Row, HeartIcon, DispatchTag, PriceCard, PriceRow, InstallmentsInfo, StockStatus, MethodCard, CheckIcon, Actions, Button, Benefits, ShieldIcon} from './styles';

const ProductAction: React.FC = () => {
    return (
        <Container>
            <Condition>Novo | 1687 vendidos</Condition>

            <Row>
                <h1>Console Microsoft Xbox Series S, 512GB, Branco</h1>
                <HeartIcon />
            </Row>

            <DispatchTag>Enviando Normalmente</DispatchTag>

            <PriceCard>
                <PriceRow>
                    <span className="symbol">R$</span>
                    <span className="fraction">2.810</span>
                    <span className="cents">00</span>

                </PriceRow>
                <InstallmentsInfo>em 12x de R$234,17 sem juros</InstallmentsInfo>
            </PriceCard>

            <StockStatus>Estoque Disponível</StockStatus>

            <MethodCard>
                <CheckIcon />

                <div>
                    <span className="title">Frete grátis</span>
                    <span className="details">Benefício Lorem Ipsum</span>   
                     <a href="$" className="more" >Ver mais opções</a>
                </div>
            </MethodCard>

            <Actions>
                <Button solid>Comprar Agora</Button>
                <Button>Adicionar ao carrinho</Button>
            </Actions>
            <Benefits>
                <li>
                    <ShieldIcon />
                    <p>Compra Garantida, receba o produto que está esperando ou devolvemos seu dinheiro.</p>
                </li>
                </Benefits>
        </Container>
    );
};

export default ProductAction;
