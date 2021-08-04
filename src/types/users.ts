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