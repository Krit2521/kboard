export interface ICard {
    content_url: string;
}

export interface IUser {
    Login: string;
    AvatarUrl: string;
}

export interface IIssue {
    Title: string;
    Assignee: IUser;
    Labels: ILabel[];
}

export interface IColumn {
    name: string;
    background: string;
    color: string;
    issues: IIssue[];
    apiUrl: string;
}

export interface ILabel {
    Name: string;
    Color: string;
}

export class Column implements IColumn {
    public name: string;
    public color: string;
    public background: string;
    public issues: IIssue[];
    public apiUrl: string;
}

export interface IData {
    columns: IColumn[];
}
