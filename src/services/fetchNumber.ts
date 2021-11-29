import { api } from './api';

interface guessData {
  value: number
}


export async function fetchNumber(): Promise<guessData> {
  const {data} = await api.get('rand?min=1&max=300');
  return {
    value: Number(data.value)
  }
      
  
}