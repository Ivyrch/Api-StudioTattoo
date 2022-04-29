import { Router } from 'express'; 
import AtendimentosController from '../controllers/AtendimentosControllers.js';

const router = Router()

router
.get('/atendimentos', AtendimentosController.getAtendimentos)
router.get('/atendimentosPorId/:id', AtendimentosController.getAtendimentosById)
router.post('/atendimentos', AtendimentosController.postAtendimentos)
router.put('/atendimentos/:id', AtendimentosController.updateAtendimentos)
router.delete('/atendimentos/:id', AtendimentosController.deleteAtendimentos)

export default router