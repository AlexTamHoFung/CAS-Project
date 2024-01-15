import { RegisterFormValues } from "../features/Register/Register";

const { REACT_APP_API_BASE } = process.env;

export const loginApi = async (email: string, password: string) => {
  const res = await fetch(`${REACT_APP_API_BASE}/customers/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: password }),
  });
  const result = await res.json();
  return result as { data: string };
};

export const shopLoginApi = async (username: string, password: string) => {
  const res = await fetch(`${REACT_APP_API_BASE}/stores/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const result = await res.json();
  return result as { data: string };
};

export const registerApi = async (data: RegisterFormValues) => {
  const resp = await fetch(`${REACT_APP_API_BASE}/customers/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await resp.json();
  return result as { token: string };
};