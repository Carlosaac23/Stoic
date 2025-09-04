import Link from 'next/link';
import { Scroll } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='border-t border-stone-200 py-12 dark:border-stone-700'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-between px-4 md:flex-row'>
          <div className='mb-6 flex items-center gap-2 md:mb-0'>
            <Scroll className='h-5 w-5' />
            <span className='text-lg font-medium tracking-wide'>
              FILOSOFÍA ESTOICA
            </span>
          </div>
          <nav className='mb-6 flex gap-6 md:mb-0'>
            <Link href='/' className='hover:text-primary text-sm tracking-wide'>
              INICIO
            </Link>
            <Link href='#' className='hover:text-primary text-sm tracking-wide'>
              FILOSOFÍA
            </Link>
            <Link href='#' className='hover:text-primary text-sm tracking-wide'>
              PRINCIPIOS
            </Link>
            <Link href='#' className='hover:text-primary text-sm tracking-wide'>
              CONTACTO
            </Link>
          </nav>
          <p className='text-muted-foreground text-sm'>
            © {new Date().getFullYear()} Filosofía Estoica
          </p>
        </div>
      </div>
    </footer>
  );
}
