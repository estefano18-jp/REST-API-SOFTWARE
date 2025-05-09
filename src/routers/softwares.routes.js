import {Router} from 'express'
import {createSoftwares, 
  deleteSoftwares, 
  getSoftwareBYid, 
  getSoftwares, 
  updateSoftwares
} from '../controllers/softwares.controller.js'
const router = Router();

// Usar router en lugar de app
router.get('/softwares', getSoftwares)
router.get('/softwares/:id', getSoftwareBYid)

router.post('/softwares', createSoftwares)

router.put('/softwares/:id', updateSoftwares)

router.delete('/softwares/:id', deleteSoftwares)

export default router;
