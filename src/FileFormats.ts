
const imageFormats = {
    'image/png': [".png"],
    "image/gif": [".gif"],
    "image/jpeg": [".jpg", ".jpeg", ".jfif", ".pjpeg", ".pjp"],
    "image/svg+xml": [".svg"],
    "image/webp":[".webp"]
}
const imageFormatsMessage = "(png, gif, pjg, jpeg, jfif, svg)";
const audioFormats = {
    "audio/mpeg": [".mp3"],
    "audio/ogg": [".ogg"],
    "audio/wav": [".wav"]
}
const audioFormatsMessage = "(mp3, ogg, wav)";

export const FileFormats = {
    imageFormats,
    imageFormatsMessage,
    audioFormats,
    audioFormatsMessage
}