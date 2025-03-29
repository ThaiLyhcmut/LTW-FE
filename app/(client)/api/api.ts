export const HTTP_URL = "http://localhost:8000"

export const saveToken = (token: string, country_code: string) => {
  localStorage.setItem("access_token", token);
  localStorage.setItem("country", country_code)
};

export const getToken = (): string | null => {
  return localStorage?.getItem("access_token") || null;
};

export const getCountry = (): string | null => {
  return localStorage?.getItem("country") || null
}

export const deleteToken = () => {
  return localStorage.removeItem("access_token")
}

export const response = async (url: string, data: RequestInit) => {
  const response = await fetch(url, data);
  if (!response.ok) {
    return undefined;
  }
  const result = await response.json();
  return result;
};

export const request = (method: string, isToken: boolean, body: object | null) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (isToken) {
    const token = getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return {
    method: method,
    headers: headers,
    body: body ? JSON.stringify(body) : null,
  };
};

export const requestFormData = (isToken: boolean, body: FormData) => {
  const headers: Record<string, string> = {};

  if (isToken) {
    const token = getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return {
    method: "POST",
    headers,
    body,
  };
};