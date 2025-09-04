import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className='min-h-screen font-serif'>
      <Header />
      <Hero />

      {/* Principles Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='mb-12 text-center text-3xl font-medium tracking-wide'>
            PRINCIPIOS ESTOICOS
          </h2>

          <div className='grid gap-8 md:grid-cols-3'>
            {/* Column 1 */}
            <Card className='overflow-hidden border-stone-200 dark:border-stone-700'>
              <div className='relative h-48'>
                <Image
                  src='/wisdom.webp'
                  alt='Busto de filósofo griego representando la sabiduría'
                  fill
                  sizes='(max-width: 768px)'
                  className='object-cover object-center dark:brightness-[0.8]'
                />
              </div>
              <CardContent className='flex flex-col items-center p-8 text-center'>
                <div className='border-primary mb-6 h-16 w-16 border-t-4'></div>
                <CardTitle className='mb-4 text-xl font-medium tracking-wide'>
                  SABIDURÍA
                </CardTitle>
                <p className='text-muted-foreground'>
                  La sabiduría es el conocimiento de lo que es bueno, malo e
                  indiferente. Es la capacidad de distinguir entre lo que
                  podemos controlar y lo que no.
                </p>
              </CardContent>
            </Card>

            {/* Column 2 */}
            <Card className='overflow-hidden border-stone-200 dark:border-stone-700'>
              <div className='relative h-48'>
                <Image
                  src='/temperance.webp'
                  alt='Estatua griega representando la templanza y moderación'
                  fill
                  sizes='(max-width: 768px)'
                  className='vobject-cover object-center dark:brightness-[0.8]'
                />
              </div>
              <CardContent className='flex flex-col items-center p-8 text-center'>
                <div className='border-primary mb-6 h-16 w-16 border-t-4'></div>
                <CardTitle className='mb-4 text-xl font-medium tracking-wide'>
                  TEMPLANZA
                </CardTitle>
                <p className='text-muted-foreground'>
                  La templanza es la moderación y el autocontrol. Es la
                  capacidad de actuar con mesura y evitar los excesos en todas
                  las áreas de la vida.
                </p>
              </CardContent>
            </Card>

            {/* Column 3 */}
            <Card className='overflow-hidden border-stone-200 dark:border-stone-700'>
              <div className='relative h-48'>
                <Image
                  src='/justice.webp'
                  alt='Balanza de la justicia en estilo griego antiguo'
                  fill
                  sizes='(max-width: 768px)'
                  className='object-cover object-center dark:brightness-[0.8]'
                />
              </div>
              <CardContent className='flex flex-col items-center p-8 text-center'>
                <div className='border-primary mb-6 h-16 w-16 border-t-4'></div>
                <CardTitle className='mb-4 text-xl font-medium tracking-wide'>
                  JUSTICIA
                </CardTitle>
                <p className='text-muted-foreground'>
                  La justicia es tratar a todos con equidad y respeto. Es
                  reconocer nuestra conexión con toda la humanidad y actuar en
                  consecuencia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className='bg-secondary relative border-y border-stone-200 py-16 dark:border-stone-700'>
        <div className='absolute right-0 bottom-0 h-full overflow-hidden opacity-20 dark:opacity-10'></div>
        <div className='relative z-10 container mx-auto max-w-4xl px-4 text-center'>
          <blockquote className='mb-6 text-2xl italic md:text-3xl'>
            "No busques que los acontecimientos sucedan como tú quieres, sino
            desea que sucedan como suceden, y serás feliz."
          </blockquote>
          <p className='text-muted-foreground text-xl'>— Marco Aurelio</p>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-16'>
        <div className='container mx-auto max-w-4xl px-4'>
          <div className='flex flex-col gap-12 md:flex-row'>
            <div className='md:w-1/2'>
              <h2 className='mb-6 text-3xl font-medium tracking-wide'>
                FILOSOFÍA ESTOICA
              </h2>
              <p className='text-muted-foreground mb-4'>
                El estoicismo es una escuela de filosofía fundada en Atenas por
                Zenón de Citio a principios del siglo III a.C. Su nombre deriva
                del pórtico (stoa poikilê) donde Zenón enseñaba.
              </p>
              <p className='text-muted-foreground mb-4'>
                Los estoicos enseñaban que las emociones destructivas resultan
                de errores de juicio, y que un sabio, o persona con "virtud
                moral perfecta", no sufriría tales emociones.
              </p>
              <p className='text-muted-foreground'>
                Los estoicos se centraban en desarrollar la serenidad mental y
                la fortaleza frente a la adversidad a través del cultivo de la
                virtud y el razonamiento claro.
              </p>
            </div>
            <div className='flex items-center justify-center md:w-1/2'>
              <div className='relative aspect-square w-full max-w-sm'>
                <Image
                  src='/column.webp'
                  alt='Columna griega con detalles arquitectónicos'
                  fill
                  className='object-contain dark:brightness-[0.9]'
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='bg-background/80 dark:bg-background/70 border-primary border p-6 backdrop-blur-sm'>
                    <div className='text-primary text-center'>
                      <p className='mb-2 text-xl tracking-widest'>
                        ΓΝΩΘΙ ΣΕΑΥΤΟΝ
                      </p>
                      <p className='italic'>Conócete a ti mismo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-secondary border-t border-stone-200 py-16 dark:border-stone-700'>
        <div className='container mx-auto max-w-2xl px-4 text-center'>
          <h2 className='mb-6 text-3xl font-medium tracking-wide'>
            EXPLORA MÁS
          </h2>
          <p className='text-muted-foreground mb-8'>
            Descubre cómo los principios estoicos pueden transformar tu vida y
            ayudarte a encontrar la tranquilidad en un mundo caótico.
          </p>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
              RECURSOS ESTOICOS
            </Button>
            <Button
              variant='outline'
              className='border-primary text-primary hover:bg-accent bg-transparent'
            >
              SUSCRÍBETE
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
