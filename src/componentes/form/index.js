import Button from '../botao'
import TextField from '../campo_texto'
import SuspendedList from '../lista_suspensa'
import './Form.css'
const Form = ()=>{
    const times = [
        "Programação",
        "Front-end",
        "Data Science",
        "DevOps",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"]

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log("Foi submetido");
    }

    return(
        <section className="form">
            <form onSubmit ={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField obrigatorio = {true} label ="Nome" placeholder ="Digite o seu nome" />
                <TextField obrigatorio = {true} label ="Cargo" placeholder ="Digite o seu cargo"/>
                <TextField label ="Imagem" placeholder ="Digite o seu endereço da imagem"/>
                <SuspendedList obrigatorio = {true} label = "Time" itens = {times}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}
export default Form