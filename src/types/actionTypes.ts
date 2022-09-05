export interface actionPage {
    type: string;
    page: number;
}

export interface actionSort {
    type: string;
    sort: string;
}

export interface actionYear {
    type: string;
    year: number;
}

export interface actionGenre {
    type: string;
    id: number;
}

export interface actionModal {
    type: string;
    isActive: boolean;
}

export interface actionLogin {
    type: string;
    isLogin: boolean;
}