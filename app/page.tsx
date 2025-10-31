import QuoteSection from '@/components/QuoteSection';

export default function Home() {
  return (
    <>
      <QuoteSection />

      <section className='mt-6'>
        <h2 className='mb-2 tracking-wide'>What is Stoicism?</h2>
        <p className='text-sm leading-6'>
          Stoicism is a Hellenistic philosophy that flourished in ancient Greece
          and Rome. The Stoics believed that the universe operated according to
          reason, i.e. by a God which is immersed in nature itself. Of all the
          schools of ancient philosophy, Stoicism made the greatest claim to
          being utterly systematic.
        </p>
      </section>
    </>
  );
}
