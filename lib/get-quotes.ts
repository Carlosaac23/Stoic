export interface Quote {
  author: string;
  quote: string;
}

export default async function getRandomQuote() {
  const url = 'https://stoic-api-red.vercel.app/api/quotes/random';
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Error fetching quote: ${res.status} ${res.statusText}`);
    }

    const data: Quote = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}
