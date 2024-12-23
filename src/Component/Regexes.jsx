export const fullNRegex = new RegExp("^[a-zA-Z]+\\s[a-zA-Z]+\\s[a-zA-Z]+$"); 
export const userNRegex = new RegExp("^[a-zA-Z0-9._@]{2,15}$"); 
export const mobileNRegex = new RegExp("^[6-9][0-9]{9}$"); 
export const emailRegex = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+.[a-z]{2,3}$"); 
// export const passRegex = new RegExp("^[a-zA-Z0-9!@#?$%^&*_-\s]{8,}$"); 
export const passRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$"); 