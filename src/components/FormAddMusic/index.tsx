import { FormEvent, useState } from "react"
import Music from "../../services/Music";

import * as C from "./formAddMusic.styles";

export const FormAddMusic = () => {
    const [uploadingMusic, setUploadingMusic] = useState<boolean>(false);
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        setUploadingMusic(true);
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        // pega os dados do formulario
        const musicName = formData.get("name");
        const musicImage = formData.get("music-image") as File;
        const music = formData.get("music") as File;    

        // verifica se foram enviados os arquivos
        if(!musicImage || (musicImage && musicImage.size <= 0)) return;
        if(!music || (music && music.size <= 0)) return;

        // envia os dados para o banco de dados
        Music.sendMusic(music, musicImage, musicName?.toString())
        .then(()=>{
            console.log("Sucesso");
        })
        .catch((e)=>{
            console.log(e);
        })
        setUploadingMusic(false);
    }
    return(
        <C.Container>
            <C.Form onSubmit={e => submitForm(e)}>
                <C.Title>Adicionar Música</C.Title>
                <label htmlFor="name">Nome da musica(Opcional):</label>
                <C.Name type="text" name="name"/>
                
                <C.FileRef htmlFor="music-image">Imagem da música</C.FileRef>
                <input type="file" name="music-image" id="music-image"/>

                <C.FileRef htmlFor="music">Escolha a música</C.FileRef>
                <input type="file" name="music" id="music" />

                <C.Submit type="submit" id="fileupload" value="Enviar" />
            </C.Form>
            {
                uploadingMusic && 
                <C.LoadingContainer>
                    <div className="animated"></div>
                </C.LoadingContainer>
            }
            
        </C.Container>
    )
}