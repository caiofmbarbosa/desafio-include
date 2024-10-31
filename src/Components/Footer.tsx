import styled from "styled-components";
import themes from "../Themes/Themes";
import { Link } from "react-router-dom";

// Toast container
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import EMAIL from "../assets/gmail.png"
import WPP from "../assets/whatsapp.png"
import INSTA from "../assets/instagram.png"
import GIT from "../assets/github.png"

const StyledEmailDiv = styled.div`
    border-right: 1px solid ${themes.colors.pretoProfundo};
    padding-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;

    @media (max-width: ${themes.breakpoint.mobile}) {
        span {
            display:none;

        }

    }

`;

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

`;

const StyledSpan = styled.span`
    cursor: default;

`;

const StyledSocialMedia = styled.div`
    padding-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

`;

function Footer() {
    const isMobileOrTablet = () => window.innerWidth <= themes.breakpoint.tabletNum;

    const handleCopyEmail = () => {
        const email = "caiofelipebarbosa92@gmail.com";

        if (isMobileOrTablet()) {
            navigator.clipboard.writeText(email)
                .then(() => {
                    toast.success("Email copiado para o clipboard!");
                })
                .catch((err) => {
                    toast.error("Erro ao copiar email!");
                    console.error("Erro ao copiar email: ", err);
                });
        }
    }

    return (
        <>
            <StyledEmailDiv>
                <StyledWrapper>
                    <img 
                        className="icon"
                        src={EMAIL}
                        alt="Logo do Email"
                        onClick={handleCopyEmail}
                    />
                    <StyledSpan>
                        Email:
                    </StyledSpan>
                </StyledWrapper>
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
        </>
    )
}

export default Footer;