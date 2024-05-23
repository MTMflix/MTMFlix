import * as dotenv from 'dotenv';
dotenv.config();

export const API_KEY = process.env.RAPIDAPI_KEY;
export const RAPID_HOST = process.env.RAPIDAPI_HOST