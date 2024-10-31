import styled from "styled-components";
// import themes from "../Themes/Themes";

import HALOWEEN from "../assets/haloween.png";
import CAIO from "../assets/eu.jpg";
import FRAME from "../assets/frame.png";
import themes from "../Themes/Themes";

const StyledMain = styled.main`
    width: 100%;
    padding: 5rem 1rem;

    position: relative;
    z-index: 1;
    color: white;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(${HALOWEEN});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        opacity: 0.35;
        z-index: -1;

    }
    
`;

const StyledSection = styled.section`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;

`;

const StyledSpan = styled.span`
    width: 50%;
    color: ${themes.colors.cinzaClaro};

    @media (max-width: ${themes.breakpoint.mobile}) {
        width: 90%;

    }

`;

const StyledImageDiv = styled.div`
    width: 240px;
    height: 240px;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 220px;
        height: 220px;
        border-radius: 50%;

    }

    &::before {
        content: "";
        position: absolute;
        top: -30px;
        left: -35px;
        width: 310px;
        height: 310px;
        background: url(${FRAME}) no-repeat center;
        background-size: contain;
        z-index: -1;
    }

`;

const StyledTitle = styled.h2`
    margin-top: 2rem;
    text-align: center;

`;

const StyledQuestionSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    gap: 1rem;

`;

function About() {
    return (
        <StyledMain>
            <StyledSection>
                <StyledImageDiv><img src={CAIO} alt="Foto do Caio Barbosa" /></StyledImageDiv>
                <StyledTitle>Quem sou eu?</StyledTitle>
                <StyledSpan>
                    Sou Caio Felipe de Melo Barbosa, estudante de Engenharia de Telecomunicações e apaixonado por tecnologia e desenvolvimento web. Tenho experiência em ferramentas como React, TypeScript, JavaScript, MySQL e React Native, com foco em criar aplicações modernas e funcionais. Nos momentos de lazer, gosto de tocar sanfona e violão, além de jogar bola e aproveitar atividades que me permitem relaxar.
                </StyledSpan>
            </StyledSection>
            <StyledQuestionSection>
                <StyledTitle>Por que devo entrar na Include?</StyledTitle>
                <StyledSpan>
                    Entrar para a Include é uma oportunidade incrível para expandir meus conhecimentos e crescer pessoal e profissionalmente. Como estudante de Engenharia de Telecomunicações e alguém que é apaixonado por tecnologia e desenvolvimento web, acredito que estar na Include vai me proporcionar um ambiente de aprendizado prático, onde posso aplicar e aprimorar minhas habilidades em React, TypeScript, MySQL, JavaScript, React Native e muito mais.
                </StyledSpan>
                <StyledSpan>
                    Além disso, fazer parte de uma comunidade colaborativa e inovadora como a Include significa estar rodeado de pessoas que compartilham o mesmo interesse por tecnologia e desenvolvimento, o que me inspira e me motiva a buscar sempre melhorar. Quero contribuir com projetos reais, aprender com outros membros e participar ativamente de iniciativas que impactem positivamente a sociedade e me preparem para o mercado de trabalho.                
                </StyledSpan>
            </StyledQuestionSection>
        </StyledMain>
    )
}

export default About;
