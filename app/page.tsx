import Header from '@/components/Header';
import Quote from '@/components/Quote';
import getRandomQuote from '@/lib/quotes';

export default async function Home() {
  const quote = await getRandomQuote();

  return (
    <main className='mx-10 my-8'>
      <Header />
      {quote ? <Quote quote={quote} /> : ''}
    </main>
  );
}
