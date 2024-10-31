import PostInterface from "../Interface/PostInterface";

const URL = "http://localhost:3001/posts"; // Em um ambiente de produção real, essa variável seria adquirida através das variáveis de ambiente

async function fetchPosts() {
    const response = await fetch(URL);
    const data = await response.json();
    
    return data;

}

async function savePost(newPost: PostInterface) {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });

        if (response.ok) {
            const data = await response.json();
            return data; // Retorna o post que foi enviado para ser setado no array de posts

        } else {
            console.error("Erro ao salvar o post.");

        }
    } catch (error) {
        console.error("Erro de rede:", error);
        
    }

}


const utils = {
    fetchPosts,
    savePost

};

export default utils;
