export interface UserInfo {
    name?: string;
    email: string;
    password: string;
}

export interface UserResponse {
    email: string;
    password: string;
}

export interface UserAuthInfo {
    message: string;
    token: string;
    refreshToken: string;
    userId: string;
    name: string;
    email: string;
}
