import styled from "styled-components";
import PostInterface from "../Interface/PostInterface";
import themes from "../Themes/Themes";

const StyledPostWrapper = styled.div`
    background-color: ${themes.colors.roxoEscuro};
    padding: 1rem;
    border-radius: 1rem;
    color: ${themes.colors.cinzaClaro};
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    box-shadow: rgba(255, 85, 0, .2) 0px 8px 24px;
    
    h2 {
        margin-bottom: .5rem;
        font-weight: 700;

    }

`;

const StyledContentSpan = styled.span`
    max-height: 220px;
    overflow-y: auto;

`;

const StyledAuthorContent = styled.span`
    border-top: 1px solid ${themes.colors.vermelhoSangue};
    padding-top: .5rem;
    width: 100%;

`;

function PostCard({post}: {post: PostInterface}) {
    return (
        <StyledPostWrapper>
            <h2>{post.titulo}</h2>
            <StyledContentSpan>{post.conteudo}</StyledContentSpan>
            <StyledAuthorContent>- {post.autor}</StyledAuthorContent>
        </StyledPostWrapper>
    )
}

export default PostCard;
