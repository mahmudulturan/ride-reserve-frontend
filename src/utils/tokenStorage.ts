export const storeToken = (token: string): void => {
    if (typeof window !== undefined) {
        localStorage.setItem("token", token);
    }
};

export const getStoredToken = (): string | null => {
    if (typeof window !== undefined) {
        return localStorage.getItem("token");
    }
    return null;
}

export const clearToken = (): void => {
    if (typeof window !== undefined) {
        localStorage.removeItem("token");
    }
}