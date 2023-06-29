import { validUser } from "../__mocks__/login";

export async function loginValidation(email, password) {
  const { email: validEmail, password: validPassword, token } = validUser;
  const isValid = validEmail === email && validPassword === password;
  if (isValid) await localStorage.setItem("token", token);
  return isValid;
}
