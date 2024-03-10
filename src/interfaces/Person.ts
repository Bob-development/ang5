export interface IPerson {
    email: string;
    password: string;
    name: string;
    friends: IPerson[];
    isAuthorized: boolean;
}