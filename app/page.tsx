import Header from '@/components/Header';

export default function Home() {
  return (
    <main className='mx-10 my-8'>
      <Header />

      <section className='mt-6 rounded-md border border-neutral-300 p-4 shadow-sm'>
        <blockquote cite='https://www.goodreads.com/quotes/139512-the-happiness-of-your-life-depends-upon-the-quality-of'>
          <p className='text-sm italic'>
            &quot; The happiness of your life depends upon the quality of your
            thoughts. &quot;
          </p>
          <p className='text-sm'>
            - <strong>Marcus Aurelius</strong>, <cite>Meditations</cite>
          </p>
        </blockquote>
      </section>
    </main>
  );
}
