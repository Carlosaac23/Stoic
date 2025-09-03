import Link from 'next/link';
import { Scroll, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  return (
    <header className='border-b border-stone-200 dark:border-stone-700'>
      <div className='container mx-auto flex items-center justify-between px-4 py-6'>
        <div className='flex items-center gap-2'>
          <Scroll className='h-6 w-6' />
          <span className='text-xl font-medium tracking-wide'>
            FILOSOFÍA ESTOICA
          </span>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='#' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-serif tracking-wide`}
                >
                  INICIO
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='#' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-serif tracking-wide`}
                >
                  FILOSOFÍA
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='#' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-serif tracking-wide`}
                >
                  PRINCIPIOS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='#' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-serif tracking-wide`}
                >
                  CONTACTO
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center gap-2'>
          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' className='md:hidden'>
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className='font-serif'>
              <div className='mt-10 flex flex-col gap-6'>
                <Link
                  href='#'
                  className='text-lg tracking-wide hover:text-stone-600 dark:hover:text-stone-300'
                >
                  INICIO
                </Link>
                <Link
                  href='#'
                  className='text-lg tracking-wide hover:text-stone-600 dark:hover:text-stone-300'
                >
                  FILOSOFÍA
                </Link>
                <Link
                  href='#'
                  className='text-lg tracking-wide hover:text-stone-600 dark:hover:text-stone-300'
                >
                  PRINCIPIOS
                </Link>
                <Link
                  href='#'
                  className='text-lg tracking-wide hover:text-stone-600 dark:hover:text-stone-300'
                >
                  CONTACTO
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
