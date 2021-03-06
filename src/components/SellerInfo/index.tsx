import React from "react";

import { Container, Title, LocationCard, LocationIcon, ReputationCard, ReputationThermometer, ReputationRow, SupportIcon, ClockIcon, More } from './styles';

const SellerInfo: React.FC = () => {
    return (
        <Container>
            <Title>Informações sobre o vendedor</Title>

            <LocationCard>
            <LocationIcon />
                <div>
                    <p>Localização</p>
                    <strong>Rio de Janeiro, Niterói</strong>
                </div>
            </LocationCard>
            

            <ReputationCard>
                <ReputationThermometer>
                    <li />
                    <li />
                    <li />
                    <li />
                    <li className="active" />
                </ReputationThermometer>
                <ReputationRow>
                    <div>
                        <strong>541</strong>
                        <span>vendas nos útimos 60 dias</span>
                    </div>

                    <div>
                        <strong><SupportIcon /></strong>
                        <span>Presta um bom atendimento</span>
                    </div>

                    <div>
                        <strong><ClockIcon /></strong>
                        <span>Entrega os produtos dentro do prazo</span>
                    </div>
                </ReputationRow>
            </ReputationCard>
            <More>Ver mais dados do vendedor</More>
        </Container>
    );
};

export default SellerInfo;