import type { Quote } from '@/lib/quotes';

export default async function Quote({ quote }: { quote: Quote }) {
  const { author, quote: quoteText } = quote;

  return (
    <section className='mt-6 rounded-md border border-neutral-300 p-4 shadow-sm'>
      <blockquote cite='https://www.goodreads.com/quotes/139512-the-happiness-of-your-life-depends-upon-the-quality-of'>
        <p className='text-sm italic'>&quot; {quoteText} &quot;</p>
        <p className='text-sm'>
          - <strong>{author}</strong>
        </p>
      </blockquote>
    </section>
  );
}
