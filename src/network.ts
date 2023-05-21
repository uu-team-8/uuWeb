import { emergencyLogout } from "./auth";

export const API_PORT = 3000;
export const API_URL = `http://localhost:${API_PORT}`;

export const GENERAL_ERROR_MESSAGE = "Nastala neočekávaná chyba. Zkuste to prosím znovu.";

export async function SendData(path: string, data: any, authToken?: string, method = "POST"): Promise<Response> {
    const headers: any = {
        "Content-Type": "application/json",
    }

    if (authToken) {
        headers["Authorization"] = `token ${authToken}`;
    }


    const req = await fetch(API_URL + path, {
        method,
        body: JSON.stringify(data),
        headers,
    });

    if (req.status >= 200 && req.status <= 300) {
        return req;
    }

    throw req;
}

export async function GetData<T>(path: string, authToken?: string): Promise<T> {
    const headers: any = {}

    if (authToken) {
        headers["Authorization"] = `token ${authToken}`;
    }

    const req = await fetch(API_URL + path, { headers });


    if (req.status == 403) {
        emergencyLogout();
    }

    if (req.status != 200) {
        throw req.status;
    }

    return await req.json();
}

export async function Fetcher(url: string, token: string) {
    const req = await fetch(`${API_URL}${url}`, {
        method: "GET",
        headers: { Authorization: `token ${token}` },
    });

    if (req.status == 403) {
        emergencyLogout();
    }

    if (req.status != 200) {
        throw req.status;
    }

    return await req.json();
}