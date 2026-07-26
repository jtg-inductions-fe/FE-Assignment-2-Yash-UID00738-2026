import { UserRole } from './enums.model';

export interface User {
    id: number;
    email: string;
    name: string;
    password: string;
    role: UserRole;
    dp: string;
}
