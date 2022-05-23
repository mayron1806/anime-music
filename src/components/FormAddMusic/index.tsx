import { FormEvent, useRef, useState } from "react"
import Music from "../../services/Music";
import { Upload } from "../Upload";

import { FileFormats } from "../../FileFormats";

import { MusicFiles } from "../../types/Music";

import * as C from "./formAddMusic.styles";
import { Result } from "../../types/Result";
import { status } from "../../enums/status";
import { StatusMessage } from "../StatusMessage";
import { Input } from "../Input";

type props = {isActive:boolean}

export const FormAddMusic = ({ isActive }: props) => {
    const [musicName, setMusicName] = useState<string>("");
    const [uploadingMusic, setUploadingMusic] = useState<boolean>(false);
    const [resetForm, setResetForm] = useState<boolean>(false);
    const [statusMessage, setStatusMessage] = useState<Result>({status: status.DEFAULT, message:""});

    const [musicFiles] = useState<MusicFiles>({} as MusicFiles);
    const setImageFile = (file : File | undefined) => musicFiles.imageFile = file;
    const setAudioFile = (file : File | undefined)  => musicFiles.audioFile = file;

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
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
    return( 
        <C.Form
            isActive={isActive} 
            isUploading={uploadingMusic} 
            onSubmit={e => submitForm(e)}
        >
            <C.Title>Adicionar Música</C.Title>

            <Input reset={resetForm} setName={setMusicName}/>
            <C.FileContainer>
                <Upload 
                    maxSize={0.2} 
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
            
            <StatusMessage statusMessage={statusMessage} />
        </C.Form>
    )
}