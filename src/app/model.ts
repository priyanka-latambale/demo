import {IPosts} from './posts';
export interface IModel {
    name: {
        firstname: string,
        lastname: string
    };
     email: string;
     password: string;
     language: string;
     post: IPosts[];
// tslint:disable-next-line:eofline
}

