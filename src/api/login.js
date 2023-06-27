import { validUser } from "../__mocks__/login";

export function loginValidation(email, password) {
  const { email: validEmail, password: validPassword, token } = validUser;
  const isValid = validEmail === email && validPassword === password;
  if (isValid) localStorage.setItem("token", token);
  return isValid;
}
