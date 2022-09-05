interface UserCompany {
    catchPhrase : string;
}

export interface Task {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}


export interface User {
    id: number;
    name: string;
    company : UserCompany;
}