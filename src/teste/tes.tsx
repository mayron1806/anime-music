import { useEffect, memo} from "react"

type props = {
    count : number
}
export const Teste = memo(({count}: props) =>{
    useEffect(()=>{
        console.log("render again")
    })
    return (
        <div>{count}</div>
    )
})