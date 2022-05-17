import { IContactDTO } from '@dtos/user/contact.dto';

interface IContactRepository {
    create(data: IContactDTO): Promise<IContactDTO>;
    findByName(name: string): Promise<IContactDTO[] | void>;
    findByEmail(email: string): Promise<IContactDTO[] | void>;
}

export { IContactRepository };