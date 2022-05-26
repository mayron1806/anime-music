import { FormEvent, useCallback, useContext, useEffect, useState, memo } from "react"
import Music from "../../services/Music";
import { Upload } from "../Upload";

import { FileFormats } from "../../FileFormats";

import { MusicFiles } from "../../types/Music";

import * as C from "./formAddMusic.styles";
import { Result } from "../../types/Result";
import { status } from "../../enums/status";
import { Input } from "../Input";
import { AuthContext } from "../../Context/AuthContext";

type props = {isActive: boolean}

export const FormAddMusic = memo(({ isActive }: props) => {
    const [musicName, setMusicName] = useState<string>("");
    const [uploadingMusic, setUploadingMusic] = useState<boolean>(false);
    const [resetForm, setResetForm] = useState<boolean>(false);
    const [statusMessage, setStatusMessage] = useState<Result>({status: status.ERROR, message:""});
    
    const [musicFiles] = useState<MusicFiles>({} as MusicFiles);
    const setImageFile = useCallback((file : File | undefined) => musicFiles.imageFile = file, [musicFiles]);
    const setAudioFile = useCallback((file : File | undefined)  => musicFiles.audioFile = file, [musicFiles]);

    const authContext = useContext(AuthContext);

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        if(authContext.user?.adm){
            const addMusic = async()=>{
                setResetForm(false);
                setUploadingMusic(true);
                const res = await Music.sendMusic(musicFiles.audioFile, musicFiles.imageFile, musicName)
                setStatusMessage(res);
                setUploadingMusic(false);
                // quando true os elemtos do formulario irao resetar
                setResetForm(true);
                setImageFile(undefined);
                setAudioFile(undefined);
            }
            addMusic();
        }
        else{
            setStatusMessage({
                status: status.ERROR,
                message: "Você precisa ter autorização para adicionar uma musica."
            })
        }
       
    }
    return( 
        <C.Form
            isActive={isActive} 
            isUploading={uploadingMusic} 
            onSubmit={e => submitForm(e)}
        >
            <C.Title>Adicionar Música</C.Title>

            <Input 
                inputName="Nome da Música:" 
                reset={resetForm} 
                setValue={setMusicName}
            />
            <C.FileContainer>
                <Upload 
                    maxSize={0.4} 
                    setFile={setImageFile}
                    accept={FileFormats.imageFormats} 
                    acceptedFilesMessage={FileFormats.imageFormatsMessage}
                />
                <Upload 
                    maxSize={2} 
                    setFile={setAudioFile}
                    accept={FileFormats.audioFormats} 
                    acceptedFilesMessage={FileFormats.audioFormatsMessage}
                />
            </C.FileContainer>
            <C.SubmitContainer isUploading={uploadingMusic}>
                <C.Submit 
                    isUploading={uploadingMusic} 
                    className="submit" 
                    type="submit" 
                    id="fileupload" 
                    value="Adicionar" 
                />
                <C.submitAnim />
            </C.SubmitContainer>
            <C.StatusMessage status={statusMessage.status}>
                {statusMessage.message}
            </C.StatusMessage>
        </C.Form>
    )
})