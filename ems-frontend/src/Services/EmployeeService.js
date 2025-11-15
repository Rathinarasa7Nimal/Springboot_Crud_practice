import axios from "axios";
import config, { apiPath } from "../config";

// Backend base URL from .env (VITE_API_BASE_URL)
const BASE_URL = config.API_BASE;

// Employee API endpoint
const REST_API_BASE_URL = apiPath('/api/employees');

// *************************************
// Employee Service API Calls
// *************************************

export const listEmployees = () =>
    axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) =>
    axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (employeeId) =>
    axios.get(`${REST_API_BASE_URL}/${employeeId}`);

export const updateEmployee = (employeeId, employee) =>
    axios.put(`${REST_API_BASE_URL}/${employeeId}`, employee);

export const deleteEmployee = (employeeId) =>
    axios.delete(`${REST_API_BASE_URL}/${employeeId}`);
