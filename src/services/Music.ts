import { storage, firestore } from "./firebase";  
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as getID } from 'uuid';

import { collection, addDoc, getDocs } from "firebase/firestore";

// types
import { Music } from "../types/Music";
import { Playlist } from "../types/Playlist";

const IMAGE_FORMATS = ["image/jpg", "image/jpeg", "image/jfif", "image/pjp", "image/pjpeg", "image/png", "image/svg"];
const AUDIO_FORMATS = ["audio/mp3", "audio/wav", "audio/ogg", "audio/mpeg"];

const getAllMusics = async () => {
    const musicsRef = collection(firestore, "musics");
    const playlist : Playlist = [];
    const res = await getDocs(musicsRef);
    res.forEach(item => {
        playlist.push(item.data() as Music);
    })
    return playlist;
}

const sendMusic = async (audio: File, image: File, name?: string) => {
    // verifica se os formatos enviados sao validos
    if((!IMAGE_FORMATS.includes(image.type))){
        return new Error("Formato de imagem incompativel");
    }
    if(!AUDIO_FORMATS.includes(audio.type)){
        return new Error("Formato de audio incompativel");
    }
    // cria as variaveis para o firestore
    let musicName = "";
    let musicImageURL = "";
    let musicAudioURL = "";
    // cria um id para aleatorio para os arquivos
    const id = getID();

    // se o parametro nome for passado ele sera o nome da musica
    if(typeof(name) === "string" && name !== "") musicName = name;
    // senão o nome da musica sera o nome do arquivo de audio (com a extensão excluida)
    else musicName = audio.name.slice(0, audio.name.length - 4);

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
    addDoc(dbRef, music)
    .then(res => {
        return res;
    })
}

export default {
    getAllMusics,
    sendMusic
}