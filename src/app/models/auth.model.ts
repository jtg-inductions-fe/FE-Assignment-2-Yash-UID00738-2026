export interface User {
    id: number;
    email: string;
    name: string;
    password: string;
    role: 'admin' | 'owner';
    dp: string;
}
