import mongoose from "mongoose";

const tatuadoresSchema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String, require: true },
    sobrenome: { type: String, require: true },
    email: { type: String, require: true },
    senha: { type: String, require: true },
    estilo_tattoo: { type: String, require: true },
    link_portifolio_pessoal: { type: String, require: true },
    redes_sociais: { type: String, require: true },
    
})

const tatuadores = mongoose.model("tatuadores", tatuadoresSchema)

export default tatuadores 