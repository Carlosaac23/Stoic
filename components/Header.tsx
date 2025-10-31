import Link from 'next/link';

export default function Header() {
  return (
    <header className='mx-10 mt-4 flex items-center justify-between px-6 py-4'>
      <h1 className='text-xl font-bold'>Stoic</h1>

      <nav className='flex gap-3 text-sm'>
        <Link
          className='hover:underline hover:underline-offset-2'
          href='/about'
        >
          About
        </Link>
      </nav>
    </header>
  );
}
