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

const StyledAuthorWrapper = styled.div`
    border-top: 1px solid ${themes.colors.vermelhoSangue};
    width: 100%;
    padding: .2rem 0 0 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: .3rem;

`;

const StyledAuthorContent = styled.span`
    padding-top: .5rem;
    width: 100%;
    font-weight: 700;

`;

const StyledDataContent = styled.span`
    font-weight: 700;

`;

function PostCard({post}: {post: PostInterface}) {
    return (
        <StyledPostWrapper>
            <h2>{post.title}</h2>
            <StyledContentSpan>{post.content}</StyledContentSpan>
            <StyledAuthorWrapper>
                <StyledAuthorContent>- {post.author}</StyledAuthorContent>
                <StyledDataContent>{post.date}</StyledDataContent>
            </StyledAuthorWrapper>
        </StyledPostWrapper>
    )
}

export default PostCard;
