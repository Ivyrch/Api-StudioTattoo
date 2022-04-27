import { Router } from 'express'; 
import AtendimentosController from '../controllers/AtendimentosControllers.js';

const router = Router()

router
.get('/atendimentos', AtendimentosController.getAtendimentos)
.get('/atendimentosPorId/:id', AtendimentosController.getAtendimentosById)
.post('/atendimentos', AtendimentosController.postAtendimentos)
.put('/atendimentos/:id', AtendimentosController.updateAtendimentos)
.delete('/atendimentos/:id', AtendimentosController.deleteAtendimentos)

export default router