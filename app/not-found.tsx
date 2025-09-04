import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className='min-h-screen font-serif'>
      <Header />
      <div className='flex min-h-[40rem] items-center justify-center'>
        <div className='flex flex-col items-center gap-2'>
          <h2>Not Found</h2>
          <p className='text-balance'>Could not find requested resource</p>
          <Link href='/'>
            <Button
              variant='outline'
              className='bg-primary hover:bg-primary/90 text-primary-foreground'
            >
              Go back home
            </Button>
          </Link>
        </div>
        <div className='fixed right-0 bottom-0 left-0'>
          <Footer />
        </div>
      </div>
    </section>
  );
}
