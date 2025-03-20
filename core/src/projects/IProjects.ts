import Technology from "../technology/ITechnology"
import { Nivel } from "./Nivel"
import { Type } from "./Type"

export default interface Projects {
	id: number
	nome: string
	descricao: string
	imagens: string[]
	nivel: Nivel
	tipo: Type
	destaque: boolean
	repositorio: string
	tecnologias: Technology[]
}
