import axios from 'axios';

import { VITE_MARVEL_BASE_URL, VITE_MARVEL_HASH, VITE_MARVEL_PUBLIC_KEY } from '@/constants';

export const HTTP_MARVERL = axios.create({
  baseURL: VITE_MARVEL_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apikey: VITE_MARVEL_PUBLIC_KEY,
    hash: VITE_MARVEL_HASH,
    ts: '1',
  }
})