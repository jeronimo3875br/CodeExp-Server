import { prisma } from '@database/prisma.database';
import { IContactDTO } from '@dtos/user/contact.dto';
import { IContactRepository } from '@respositories/contact.repository';

class ContactRepository implements IContactRepository {
	async findByName(name: string): Promise<IContactDTO[] | void>  {
		return prisma.contact.findMany({
			where: {
				name
			}
		});
	}

	async findByEmail(email: string): Promise<IContactDTO[] | void> {
		return await prisma.contact.findMany({
			where: {
				email
			}
		});
	}
    
	async create({ email, message, name }: IContactDTO): Promise<IContactDTO> {
		return await prisma.contact.create({
			data: {
				name,
				email,
				message
			}
		});
	}
}

export { ContactRepository };