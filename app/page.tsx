import Header from '@/components/Header';
import QuoteSection from '@/components/QuoteSection';

export default async function Home() {
  return (
    <main className='mx-10 my-8'>
      <Header />
      <QuoteSection />
    </main>
  );
}
