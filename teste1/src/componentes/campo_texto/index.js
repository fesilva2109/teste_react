import { useState } from "react"
import "./TextField.css"
const TextField = (props) => {

    const [valor, setValor] = useState('')
    const aoDigitado = (evento)=>{
        valor = (evento.target.value)
        console.log(valor)
    }
    return (
        <div className="textField">
            <label>{props.label}</label>
            <input value = {valor} onClick={aoDigitado} required = {props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField