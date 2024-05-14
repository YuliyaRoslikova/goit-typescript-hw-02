import axios, { AxiosResponse } from 'axios';
import { Card } from '../components/image-gallery/image-card/ImageCard';

const ACCESS_KEY = 'jPoG1no69fpL0u-3xc-US0GYo3kg6CaMrEf2-CpT1T8';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
});

export async function getImages(page: number, query: string): Promise<Card[]> {
  return instance
    .get(`search/photos?page=${page}&query=${query}`)
    .then((res: AxiosResponse) => res.data.results);
}
