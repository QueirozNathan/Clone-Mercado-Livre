import React from "react";

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

import { Container, Row, Panel, Column, Gallery, Section, Description, OtherOptions } from './styles';
import { HiDotsVertical } from "react-icons/hi";

const Product: React.FC = () => {
    return (
        <Container>
            <Row>
                <a href="#">Compartilhar</a>
                <a href="#">Vender um igual</a>
            </Row>

            <Panel>
                <Column>
                    <Gallery id="test">
                        <img alt="T-Shirt" src={tshirtImage} />

                    </Gallery>

                    <Info />
                </Column>

                <Column>
                    <ProductAction />
                    <SellerInfo />

                    <WarrantySection />
                    <OtherOptions>
                        <Section>
                            <div>
                                <span>
                                    <p className="title">Outras opções de compra</p>
                                    <a href="#">Ver 10 opções a partir de R$2.810</a>

                                </span>
                            </div>
                        </Section>
                    </OtherOptions>
                    <WarrantySection />
                </Column>
            </Panel>
        </Container>
    );
};


const WarrantySection = () => (
    <Section>
        <h4>Garantia</h4>

        <div>
            <span>
                <p className="title">Compra garantida com o Lorem Ipsum</p>
                <p className="description">Receba o produto que você está esperando ou devolvemos seu dinheiro.</p>

            </span>
            <span>
                <p className="title">Garantia do Vendedor</p>
                <p className="description ">Sem garantia.</p>

            </span>
        </div>
        <a href="#">Saiba mais sobre a garantia</a>
    </Section>
)

const Info = () => (
    <Description>
        <h2>Descrição</h2>

        <p>
            Xbox series S, nosso xbox menor e mais elegante de todos os tempos; com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o xbox series s oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital.
            <br />
            <br />
            Itens inclusos: <br />
            - 1x Controle <br />
            - 1x Cabo HDMI <br />
            - 1x Console <br />

            <br />
            Experimente uma velocidade e um desempenho de próxima geração com a arquitetura Xbox Velocity alimentada por um SSD personalizado e um software integrado.
        </p>
    </Description>
);

export default Product;