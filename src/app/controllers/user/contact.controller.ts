import { Request, Response } from 'express';
import { AppError } from '@errors/app.error';
import { injectable, inject } from 'tsyringe';
import { IContactDTO  } from '@dtos/user/contact.dto';
import { handleError } from 'src/utils/handleError.util';
import { CreateMessageService } from '@services/user/contact/createContactMessage.service';


@injectable()
class ContactController {
	constructor(
		@inject('CreateMessageService')
		private readonly createMessageService: CreateMessageService
	){}

	async create(request: Request, response: Response): Promise<Response | undefined> {
		const contactData: IContactDTO = request.body;

		try {
			await this.createMessageService.execute(contactData);

			return response.status(201).send({
				status: 'SUCCESS',
				message: 'Message registered successfully!'
			});

		}catch(error){
			handleError(error as AppError, response);
		}
	}
}

export { ContactController };