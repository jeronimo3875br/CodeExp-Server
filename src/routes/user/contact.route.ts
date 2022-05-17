import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { registerMessage } from '@schemas/user/contact.schema';
import { contactController } from '@containers/user/contact.container';


const contactRouter = Router();

contactRouter.post(
	'/contact/create',
	celebrate({
		[Segments.BODY]: registerMessage
	}),
	(request, response) =>
		contactController.create(request, response)
);

export { contactRouter };