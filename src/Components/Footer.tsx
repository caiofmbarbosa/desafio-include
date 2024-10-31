import styled from "styled-components";
import themes from "../Themes/Themes";

import EMAIL from "../assets/gmail.png"
import WPP from "../assets/whatsapp.png"
import INSTA from "../assets/instagram.png"
import GIT from "../assets/github.png"
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
    position: relative;
    left: 0;
    width: 100%;
    height: auto;
    background: ${themes.colors.cinzaFantasma};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    box-shadow: ${themes.colors.laranjaAbobora} 0px 7px 29px 0px;

    img.icon-click,
    img.icon {
        width: 24px;
        height: 24px;
        transition: transform .3s ease;

        &:hover {
            transform: scale(1.1);

        }

    }

    img.icon-click {
        &:hover {
            cursor: pointer;

        }

    }

`;

const StyledSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    cursor: default;

`;

const StyledEmailDiv = styled.div`
    border-right: 1px solid ${themes.colors.pretoProfundo};
    padding-right: 2rem;

`;

const StyledSocialMedia = styled.div`
    padding-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

`;

function Footer() {
    return (
        <StyledFooter>
            <StyledEmailDiv>
                <StyledSpan>
                    <img className="icon" src={EMAIL} alt="Logo do Email" />{' '}
                    Email:
                </StyledSpan>
                <span>caiofelipebarbosa92@gmail.com</span>
            </StyledEmailDiv>

            <StyledSocialMedia>
                <Link to="https://wa.link/gkv8l1" target="_blank">
                    <img className="icon-click" src={WPP} alt="Logo do WhatsApp" />
                </Link>
                <Link to="https://instagram.com/caiofmbarbosa" target="_blank">
                    <img className="icon-click" src={INSTA} alt="Logo do Instagram" />
                </Link>
                <Link to="https://github.com/caiofmbarbosa" target="_blank">
                    <img className="icon-click" src={GIT} alt="Logo do GitHub" />
                </Link>
            </StyledSocialMedia>
        </StyledFooter>
    )
}

export default Footer;