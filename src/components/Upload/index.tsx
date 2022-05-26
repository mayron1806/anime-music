import { useEffect, useRef, useState, memo } from "react";
import {FileRejection, useDropzone} from "react-dropzone";
import { IoDocumentOutline, IoHandLeftOutline, IoCheckmarkCircleOutline } from "react-icons/io5"
import { setCommentRange } from "typescript";
import * as C from "./upload.styles";

const BYTES_MULTIPLY = 1000000;

type props = {
    setFile: (file: File | undefined) => void,
    accept : {},
    acceptedFilesMessage: string,
    maxSize?: number
}

export const Upload = memo(({setFile, accept, acceptedFilesMessage,maxSize = 0.5}: props)=>{
    const [currentFile, setCurrentFile] = useState<File>();
    const {
        acceptedFiles,
        getRootProps, 
        getInputProps,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: accept,
        maxFiles: 1,
        maxSize: (maxSize * BYTES_MULTIPLY),
        onDropAccepted: (file) => dropAccepted(file),
        onDropRejected: () => dropRejected()
    });
    const dropAccepted = (file : File[])=>{
        setisAcceptFile(true);
        setCurrentFile(file[0]);
    }
    const dropRejected = () => {
        setisAcceptFile(false);
        setCurrentFile(undefined);
    }

    useEffect(()=>{
        setFile(currentFile);
    },[currentFile])

    const [isAcceptFile, setisAcceptFile] = useState<boolean>(false);
    
    const dropZoneContent = () => {
        let message = (<div className="dropZoneContent">
                <IoDocumentOutline size={40}/>
                <C.Message>
                    Arraste aqui o arquivo. <br />
                    {acceptedFilesMessage}
                </C.Message>
            </div>
        );

        if(isDragAccept) {
            message = (
                <div className="dropZoneContent">
                    <IoCheckmarkCircleOutline size={40}/>
                    <C.Message>Solte aqui o arquivo.</C.Message>
                </div>
            );
        }
        if(isDragReject){
            message = (
                <div className="dropZoneContent">
                    <IoHandLeftOutline size={40}/>
                    <C.Message>O arquivo não é suportado.</C.Message>
                </div>
            );
        }
        if(acceptedFiles.length > 0){
            message = (
                <div className="dropZoneContent">
                    <IoCheckmarkCircleOutline size={40}/>
                    <C.Message>{acceptedFiles[0].name}</C.Message>
                </div>
            );
        }
        return message;
    }
    return(
        <C.DropContainer className="upload" {...getRootProps({isDragAccept, isDragReject, isAcceptFile})}>
            <input{...getInputProps()} />
            {dropZoneContent()}
        </C.DropContainer>
    )
})