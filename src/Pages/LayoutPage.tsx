import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/Footer";
import themes from "../Themes/Themes";
import Header from "../Components/Header";

import TEIA from "../assets/teia.png";
import HALOWEEN from "../assets/haloween.png";

const StyledLayout = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        'header'
        'main'
        'footer'
    ;

`;

const StyledHeader = styled.header`
    grid-area: header;

    background: url(${TEIA});
    background-repeat: repeat-x;
    background-size: cover;
    
`;

const StyledPostsMain = styled.main`
    grid-area: main;

    padding: 1rem;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    gap: 3rem;

`;

const StyledAboutMain = styled.main`
    grid-area: main;

    width: 100%;
    padding: 5rem 1rem;
    flex: 1;

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

const StyledFooter = styled.footer`
    grid-area: footer;

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

function LayoutPage() {
    const { pathname } = useLocation();

    return (
        <StyledLayout>
            <StyledHeader>
                <Header />
            </StyledHeader>

            {/* Inserta dinamicamente o main */}
            { pathname === '/' &&
                <StyledAboutMain>
                    <Outlet />
                </StyledAboutMain>
            }

            { pathname === '/posts' &&
                <StyledPostsMain>
                    <Outlet />
                </StyledPostsMain>
            }

            <StyledFooter>
                <Footer />
            </StyledFooter>
        </StyledLayout>
    )
}

export default LayoutPage;