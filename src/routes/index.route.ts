import { Router } from 'express';
import { contactRouter } from '@routes/user/contact.route';

const router = Router();

router.use('/user', contactRouter);

export { router };