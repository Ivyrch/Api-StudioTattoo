import { Router } from 'express'; 
import TatuadoresController from '../controllers/TatuadoresControllers.js';

const router = Router()

router
.get('/tatuadores', TatuadoresController.getTatuadores)
.get('/tatuadores/busca', TatuadoresController.getPorEstilo)
.post('/tatuadores', TatuadoresController.postTatuadores)
.put('/tatuadores/:id', TatuadoresController.updateTatuadores)
.delete('/tatuadores/:id', TatuadoresController.deleteTatuadores)

export default router
