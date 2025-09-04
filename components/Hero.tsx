import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function Hero() {
  return (
    <section className='relative border-b border-stone-200 py-20 dark:border-stone-700'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/temple.webp'
          alt='Templo griego antiguo con columnas dóricas'
          fill
          sizes='(max-width: 768px)'
          className='object-cover object-center brightness-[0.85] dark:brightness-[0.6]'
          priority
        />
      </div>
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <Card className='bg-background/90 mx-auto max-w-2xl border-stone-200 backdrop-blur-sm dark:border-stone-700'>
          <CardContent className='p-10'>
            <h1 className='mb-6 text-4xl font-medium tracking-wide md:text-5xl'>
              LA VIRTUD ES EL ÚNICO BIEN
            </h1>
            <p className='text-muted-foreground mb-8 text-xl'>
              "No son las cosas las que perturban a los hombres, sino las
              opiniones que tienen sobre ellas."
            </p>
            <p className='text-muted-foreground italic'>— Epicteto</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
