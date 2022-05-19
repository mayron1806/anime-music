const ConvertToTime = (n : number) : string =>{
    const minutes = Math.floor(n / 60);
    const seconds = Math.floor(n % 60);
    return `${("00" + minutes).slice(-2)}:${("00" + seconds).slice(-2)}`
}

export const Time = {
    ConvertToTime
}
