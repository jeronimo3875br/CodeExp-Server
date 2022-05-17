import { container } from 'tsyringe';
import { IContactRepository } from '@respositories/contact.repository';
import { ContactController } from '@controllers/user/contact.controller';
import { ContactRepository } from '@respositories/implementations/contact.implementation';
import { CreateMessageService } from '@services/user/contact/createContactMessage.service';

container.registerSingleton<IContactRepository>('ContactRepository', ContactRepository);
container.registerSingleton<CreateMessageService>('CreateMessageService', CreateMessageService);

const contactController = container.resolve<ContactController>(ContactController);

export { contactController };