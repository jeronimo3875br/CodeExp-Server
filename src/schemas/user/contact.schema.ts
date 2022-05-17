import { Joi } from 'celebrate';

const registerMessage = Joi.object().keys({
	name: Joi.string().required(),
	email: Joi.string().required(),
	message: Joi.string().required()
});

export { registerMessage };