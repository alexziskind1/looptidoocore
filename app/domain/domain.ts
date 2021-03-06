import * as enums from './static-data';

export interface LoginModel {
    username: string;
    password: string;
}

export interface User {
    id: string;
    fullName: string;
    avatar: string;
}

export interface PtObjectBase {
    id: string;
    title: string;
    dateCreated: Date;
    dateModified: Date;
}

export interface PtItem extends PtObjectBase {
    description?: string;
    type: enums.ItemTypeEnum;
    estimate: number;
    priority: enums.PriorityEnum;
    status: enums.StatusEnum;
    assignee: User;
    tasks: Array<Task>;
    comments: Array<Comment>;
}

export interface Task extends PtObjectBase {
    completed: boolean;
}

export interface Comment extends PtObjectBase {
    //userId: string;
    user: User;
}

export interface NewTask {
    title: string;
    completed: boolean;
}

export interface NewComment {
    title: string;
    userId: string;
}

export interface NewItem {
    title: string;
    description?: string;
    type: enums.ItemTypeEnum;
}