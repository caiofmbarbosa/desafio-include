import { useEffect, useState } from "react";
import styled from "styled-components";
import themes from "../Themes/Themes";
import PostCard from "./PostCard";
import utils from "../Utils/utils";
import PostInterface from "../Interface/PostInterface";
import { toast } from "react-toastify";

const StyledNewPostWrapper = styled.div`
    color: white;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    gap: .5rem;
    text-align: center;

`;

const StyledButton = styled.button<{ $secondary?: boolean }>`
    padding: 1rem;
    border-radius: 1.5rem;
    background-color: ${themes.colors.laranjaAbobora};
    border: none;
    transition: all .3s ease;
    color: #fff;
    box-shadow: 0 0 0 3px transparent;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        box-shadow: 0 0 0 3px ${props => props.$secondary ? themes.colors.cinzaFantasma : themes.colors.roxoEscuro};
        font-weight: 700;

    }

`;

const StyledCreatingWrapper = styled.div`
    background-color: ${themes.colors.roxoEscuro};
    border-radius: 1rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-flow: column nowrap;
    gap: 1rem;
    padding: 1rem;
    text-align: start;
    width: 100%;

`;

const StyledInput = styled.input`
    width: 100%;
    padding: .5rem 1rem;
    background: none;
    border-radius: 1rem;
    border: 2px solid ${themes.colors.laranjaAbobora};
    color: #FFF;

    &::placeholder {
        color: rgba(255, 255, 255, .8);

    }
    
    &:focus {
        outline: none;
        border: 2px solid ${themes.colors.verdeVeneno};

        &::placeholder {
            color: ${themes.colors.cinzaClaro};

        }
        
    }
    
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 150px;
    padding: .5rem 1rem;
    background: none;
    border-radius: 1rem;
    border: 2px solid ${themes.colors.laranjaAbobora};
    color: #FFF;
    resize: none;

    &::placeholder {
        color: rgba(255, 255, 255, .8);

    }

    &:focus {
        outline: none;
        border: 2px solid ${themes.colors.verdeVeneno};

        &::placeholder {
            color: ${themes.colors.cinzaClaro};

        }

    }

`;

const StyledLabel = styled.label`
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    justify-content: center;
    gap: .3rem;
    width: 100%;

`;

const StyledButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;

`;

const StyledPostWrapper = styled.section`
    width: 100%;
    display: grid;
    column-gap: 1rem;
    row-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    margin-bottom: 2rem;

    @media (max-width: ${themes.breakpoint.mobile}) {
        grid-template-columns: 1fr;

    }

    @media (min-width: ${themes.breakpoint.mobile}) and (max-width: ${themes.breakpoint.tablet}) {
        grid-template-columns: repeat(2, 1fr);

    }

`;

function Posts() {
    const [ creating, setCreating ] = useState(false);

    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    const [ author, setAuthor ] = useState("");

    const [ posts, setPosts ] = useState<PostInterface[]>([]);

    useEffect(() => {
        utils.fetchPosts()
            .then(data => setPosts(data))
            .catch(error => console.error(error));

    }, []);

    const handleCreatingClick = () => {
        if (creating) {
            // Caso esteja no modo criação e o botão cancelar for pressionado, limpa os inputs e seta o estado inverso
            setTitle("");
            setContent("");
            setAuthor("");

            setCreating(prev => !prev);

            return;

        }

        setCreating(prev => !prev);
        
    };

    const handleInputTitle = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);

    const handleInputContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value);

    const handleInputAuthor = (event: React.ChangeEvent<HTMLInputElement>) => setAuthor(event.target.value);

    const handleSavePost = async () => {
        const newPost: PostInterface = {
            title,
            content,
            author,
            date: new Date().toLocaleDateString('pt-br')

        };

        // Salvar post e atualizar o estado
        try {
            const savedPost = await utils.savePost(newPost);
            if (savedPost) {
                setPosts([...posts, savedPost]); // Adiciona o novo post ao array

                setTitle("");
                setContent("");
                setAuthor("");
                setCreating(false);

                toast.success("Post criado com sucesso!");
                
            }
        } catch (error) {
            console.error("Erro ao salvar post:", error);
            toast.error("Erro ao criar o post, tente novamente!");

        }
    };

    return (
        <>
            <StyledNewPostWrapper>
                <span style={{fontWeight: 700}}>Compartilhe comigo o seu pensamento!</span>
                {!creating && <StyledButton type="button" onClick={handleCreatingClick}>Criar novo post</StyledButton>}

                {creating &&
                    <StyledCreatingWrapper>
                        <StyledLabel htmlFor="title">
                            Título:
                            <StyledInput 
                                id="title"
                                type="text"
                                required
                                maxLength={50}
                                placeholder="Digite o título do post"
                                onChange={handleInputTitle}
                                value={title}
                            />
                        </StyledLabel>

                        <StyledLabel htmlFor="content">
                            Conteúdo:
                            <StyledTextArea 
                                id="content"
                                required
                                maxLength={500}
                                placeholder="Escreva o conteúdo do post"
                                onChange={handleInputContent}
                                value={content}
                            />
                        </StyledLabel>

                        <StyledLabel htmlFor="author">
                            Autor:
                            <StyledInput 
                                id="author"
                                type="text"
                                maxLength={30}
                                placeholder="Digite o nome do autor"
                                onChange={handleInputAuthor}
                                value={author}
                                autoComplete="name"
                                required
                            />
                        </StyledLabel>
                        <StyledButtonWrapper>
                            <StyledButton $secondary type="button" onClick={handleSavePost}>Salvar post</StyledButton>
                            <StyledButton $secondary type="button" onClick={handleCreatingClick}>Cancelar</StyledButton>
                        </StyledButtonWrapper>
                    </StyledCreatingWrapper>
                }
            </StyledNewPostWrapper>

            <StyledPostWrapper>
                {posts.map((post, index) => (
                    <PostCard key={index} post={post} />
                ))}
            </StyledPostWrapper>
        </>
    )
}

export default Posts;
