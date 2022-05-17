import { injectable, inject } from 'tsyringe';
import { IContactDTO } from '@dtos/user/contact.dto';
import { ContactRepository } from '@respositories/implementations/contact.implementation';

@injectable()
class CreateMessageService {
	constructor(
        @inject('ContactRepository')
        private readonly contactRepository: ContactRepository
	){}

	async execute(data: IContactDTO){
		return await this.contactRepository.create(data);
	}
}

export { CreateMessageService };