// Centralized API base URL for the frontend
const RAW_BASE = import.meta.env.VITE_API_BASE_URL || "";

export const API_BASE = RAW_BASE.replace(/\/$/, "");

export function apiPath(path = "") {
    if (!path) return API_BASE;
    if (path.startsWith("/")) return API_BASE + path;
    return API_BASE + "/" + path;
}

const config = {
    API_BASE,
    apiPath
};

export default config;
