import { Router } from 'express'
import SelecaoController from '../src/app/controllers/SelecaoController.js'

const router = Router()
router.get('/wrestlers', SelecaoController.index)
router.get('/wrestlers/:id', SelecaoController.show)

export default router
