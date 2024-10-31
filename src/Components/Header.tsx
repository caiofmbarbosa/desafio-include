import styled from "styled-components";
import themes from "../Themes/Themes";
import { Link, useLocation } from "react-router-dom";

import TEIA from "../assets/teia.png";

const StyledHeader = styled.header`
    background: url(${TEIA});
    background-repeat: repeat-x;
    background-size: cover;
    
`;

const StyledNav = styled.nav`
    background: ${themes.colors.cinzaFantasma};
    padding: 1rem;
    color: #FFF;
    border-radius: 0 0 1rem 1rem;
    width: 40%;
    margin: 0 auto;
    box-shadow: ${themes.colors.laranjaAbobora} 0px 0px 29px 0px;

    @media (max-width: ${themes.breakpoint.mobile}) {
        width: 80%;

    }

`;

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    gap: 3rem;

`;

const StyledLi = styled.li<{ $selected: boolean }>`
    transition: transform .3s ease;
    border-bottom: ${(props) => 
        props.$selected ? `2px solid ${themes.colors.laranjaAbobora}` : "none"};
    padding-bottom: 0.5rem;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        font-weight: 700;

    }

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

`;

function Header() {
    const { pathname } = useLocation();

    return (
        <StyledHeader>
            <StyledNav>
                <StyledUl>
                    <StyledLi $selected={pathname === "/"} >
                        <StyledLink to="/">Sobre</StyledLink>
                    </StyledLi>
                    <StyledLi $selected={pathname === "/posts"} >
                        <StyledLink to="/posts">Posts</StyledLink>
                    </StyledLi>
                </StyledUl>
            </StyledNav>
        </StyledHeader>
    )   
}

export default Header;
