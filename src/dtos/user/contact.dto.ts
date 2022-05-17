import { IDefaultDTO } from '@dtos/default.dto';

interface IContactDTO extends IDefaultDTO {
    name: string;
    email: string;
    message: string;
}

export { IContactDTO };