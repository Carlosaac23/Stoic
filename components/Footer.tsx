async function getCurrentYear() {
  'use cache';
  return new Date().getFullYear();
}

export default async function Footer() {
  return (
    <footer className='text-gray mb-2 p-2 text-center text-sm'>
      <p>Stoic &copy; {await getCurrentYear()} All rights reserved.</p>
    </footer>
  );
}
