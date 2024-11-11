export interface IResult {
    gender: IGender;
    name: IName;
    picture: IPicture;
    nat: string;
    email: string;
}

export enum IGender {
    Female = 'female',
    Male = 'male'
}

export interface IName {
    title: string;
    first: string;
    last: string;
}

export interface IPicture {
    large: string;
    medium: string;
    thumbnail: string;
}
