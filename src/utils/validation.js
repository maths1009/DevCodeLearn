export function validEmail(email) {
  return /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/.test(email);
}
