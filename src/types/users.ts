export interface User {
    id: number;
    firstName: string;
    lastName: string;
    jobTitle: JobTitle;
    age: number;
}

export enum JobTitle {
    motherOfDragons = 'Mother of Dragons',
    noOne = 'No One',
    kingBeyondTheWall = 'King Beyond the Wall',
    peasant = 'Peasant',
    lord = 'Lord',
    kingSlayer = 'Kingslayer',
    bastard = 'Bastard',
    wildling = 'Wildling',
}

export interface BackendUser {
    id: number,
    firstname: string;
    lastname: string;
    jobtitle: string;
    age: number;
}

export const backendUserToUser = (user: BackendUser): User => ({
    id: user.id,
    firstName: user.firstname,
    lastName: user.lastname,
    jobTitle: user.jobtitle as JobTitle,
    age: user.age
})