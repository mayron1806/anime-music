import { storage, firestore } from "./firebase";  
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as getID } from 'uuid';

import { collection, addDoc, getDocs } from "firebase/firestore";

// types
import { Music } from "../types/Music";
import { Musics } from "../types/Musics";
import { Result } from "../types/Result";
import { status } from "../enums/status";

const getAllMusics = async () => {
    const musicsRef = collection(firestore, "musics");
    const playlist : Musics = [];
    const res = await getDocs(musicsRef);
    res.forEach(item => {
        playlist.push(item.data() as Music);
    })
    return playlist;
}
const sendMusic = async (audio: File | undefined, image: File | undefined,  name: string) : Promise<Result> => {
    if(audio === undefined) {
        return{
            status: status.ERROR,
            message: "Você precisa selecionar um arquivo de aúdio."
        };
    }
    if(image === undefined){ 
        return{
            status: status.ERROR,
            message: "Você precisa selecionar um arquivo de imagem."
        };
    }
    // cria as variaveis para o firestore
    let musicName = "";
    let musicImageURL = "";
    let musicAudioURL = "";

    // se o parametro nome for passado ele sera o nome da musica
    if (name !== "") musicName = name;
    // senão o nome da musica sera o nome do arquivo de audio (com a extensão excluida)
    else musicName = audio.name.slice(0, audio.name.length - 4);

    // cria um id para aleatorio para os arquivos
    const id = getID();
    
    // adiciona a imagem na pasta images do storage
    const imageRef = ref(storage, `images/${id}`);    
    const imageRes = await uploadBytes(imageRef, image);
    musicImageURL = await getDownloadURL(imageRes.ref);

    // adiciona a musica na pasta musics do storage
    const audioRef = ref(storage, `musics/${id}`);
    const audioRes = await uploadBytes(audioRef, audio);
    musicAudioURL = await getDownloadURL(audioRes.ref);
    
    // cria um objeto para ser adicionado no firestore
    const music : Music = {
        musicName: musicName,
        musicImageURL: musicImageURL,
        musicAudioURL: musicAudioURL
    }

    // adiciona o objeto no firestore
    const dbRef = collection(firestore, "musics");
    await addDoc(dbRef, music);
    
    const result: Result = {
        status: status.SUCCESS,
        message: "Musica adicionada com sucesso!!"
    }
    return result;
}

export default {
    getAllMusics,
    sendMusic
}