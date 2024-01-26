import { Router } from 'express';
import { fetchData, storeData } from '../controllers/IESGateway';

const router = Router();

router.post('/', storeData);
router.get('/', fetchData);

export default router;
