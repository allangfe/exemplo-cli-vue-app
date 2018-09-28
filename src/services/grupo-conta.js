import { http } from './config'

export default {
    salvar:(gruposContaNome) => {
        return http.post('grupo-conta/cadastrar-grupo-conta-pendente', gruposContaNome)
    }
}