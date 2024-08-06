import { consulta  } from "../database/conexao.js";

class SelecaoRepository {
    //CRUD
    findAll() {
        const sql = "SELECT * FROM wrestlers;"
        return consulta(sql,'Não foi possivel localizar')
    }

    findById(id) {
        const sql ="SELECT * FROM wrestlers WHERE id=?;"
        return consulta(sql,id,'Não foi possivel localizar')
    }
}

export default new SelecaoRepository()