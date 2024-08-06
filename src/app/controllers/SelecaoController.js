import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {
    async index (req,res) {
        const row = await SelecaoRepository.findAll()
        res.json(row)
    }

    async show(req,res) {
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        res.json(row)
    }
}

export default new SelecaoController 