import { Router } from 'express'
import SelecaoController from '../src/app/controllers/SelecaoController.js'

const router = Router()
router.get('/wrestlers', SelecaoController.index)
router.get('/wrestlers/:id', SelecaoController.show)
router.get('/', (req,res) => {
    return res.json("hello world");
});
export default router
