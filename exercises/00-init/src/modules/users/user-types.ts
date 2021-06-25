export interface User{
    username: string;
}


//export type AddUser = (firstName: string, lastName: string, id: number) => void
export type AddUser = (username: string) => void
export type SortAsc = () => void
export type SortLength = () => void
