'use client';

import type { Quote } from '@/lib/get-quotes';
import getRandomQuote from '@/lib/get-quotes';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function QuoteSection() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    async function fetchQuote() {
      const newQuote = await getRandomQuote();
      if (!newQuote) throw new Error('Error fetching quote');
      setQuote(newQuote);
    }

    // Fetch new quote every 25 s
    const INTERVAL = 25000;

    fetchQuote();
    const interval = setInterval(fetchQuote, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  if (!quote)
    return (
      <p className='mt-6 rounded-md border border-neutral-300 p-4 text-sm shadow-sm'>
        Loading quote...
      </p>
    );

  return (
    <section className='max-h-28 overflow-y-auto p-4'>
      <AnimatePresence mode='wait'>
        <motion.blockquote
          key={quote.quote}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.3 }}
        >
          <p className='text-base italic'>&quot; {quote.quote} &quot;</p>
          <p className='text-sm'>
            - <strong>{quote.author}</strong>
          </p>
        </motion.blockquote>
      </AnimatePresence>
    </section>
  );
}
