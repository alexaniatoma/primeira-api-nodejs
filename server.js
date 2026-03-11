require("dotenv").config();
const PORT = process.env.PORT || 3000

const express = require("express");
const app = express();
app.use(express.json())


let cadastros = [];
let proximoId = 1;

//Validações
function emailValido(email) {    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
    return regex.test(email.trim())
}

function telefoneValido(telefone) {
    telefone = telefone.replace(/\D/g, ''); // Remove caracteres não numéricos
    const regex = /^\d{10,11}$/;
    return regex.test(telefone)
}

//Middleware para validações
function validarCadastro(req, res, next) {
    const {nome, email, telefone, mensagem} = req.body;

    if(!nome || nome.length < 3) {
        return res.status(400).json({erro: "O nome é obrigatório e deve conter pelo menos 3 caracteres" })
    }

    if(!email || !emailValido(email)) {
        return res.status(400).json({erro: "O email é obrigatório e deve ser válido"});
    } 
    
    if(!telefone || !telefoneValido(telefone)) {
        return res.status(400).json ({erro: "O telefone deve conter 10 a 11 numeros"})
    }

    if(mensagem && mensagem.length > 500) {
        return res.status(400).json({erro: "A mensagem deve conter no máximo 500 caracteres"})
    } 
       
    next();        
}

//Rotas
app.get("/cadastros", (req, res) => {
    res.status(200).json(cadastros)
})

app.post("/cadastros", validarCadastro, (req, res) => {
    const {nome, email, telefone, mensagem} = req.body;
    const novoCadastro = {
        id: proximoId++,
        nome,
        email,
        telefone,
        mensagem: mensagem || null
    };
    cadastros.push(novoCadastro);
    res.status(201).json({
        mensagem: "Cadastro enviado com sucesso",
        cadastro: novoCadastro
    })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})




