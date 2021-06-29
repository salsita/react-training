export interface User{
    id: number;
    userName: string;
    eyeColor?: string;
    height?: number;
}



//export type AddUser = (firstName: string, lastName: string, id: number) => void
export type AddUser = (username: string) => void
export type EditUser = (username: string, eyeColor: string, height: number) => void
export type SortAsc = () => void
export type SortLength = () => void
