import { JWT_TOKEN } from "../config/globalVariables"

export const saveTokenStorage = (token) => {
    sessionStorage.setItem(JWT_TOKEN, token.accessToken)
}
export const clearTokenStorage = () => {
    sessionStorage.removeItem(JWT_TOKEN)
}
export const getTokenStorage = () => {
    return sessionStorage.getItem(JWT_TOKEN)
}