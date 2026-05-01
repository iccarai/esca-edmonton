import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const navLinkClass = (active: boolean) =>
  cn('px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-secondary transition-colors rounded-md', active && 'text-secondary');

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-primary/95 backdrop-blur-md shadow-lg';

  const isAbout = location.pathname === '/about';

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', headerBg)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logos/esca-logo-white.png" alt="ESCA Logo" className="h-10 md:h-12 w-auto" />
            <span className="text-primary-foreground font-serif-display text-sm md:text-base font-semibold hidden sm:block leading-tight">
              ESCA<br />Edmonton
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className={navLinkClass(location.pathname === '/')}>
              {t('nav', 'home') as string}
            </Link>

            {/* About dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={cn(navLinkClass(isAbout), 'flex items-center gap-1 outline-none')}>
                  {t('nav', 'about') as string}
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[160px]">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="w-full cursor-pointer">
                    {t('nav', 'aliciasStory') as string}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/events" className={navLinkClass(location.pathname === '/events')}>
              {t('nav', 'events') as string}
            </Link>

            <Link to="/gallery" className={navLinkClass(location.pathname === '/gallery')}>
              {t('nav', 'gallery') as string}
            </Link>

            <Link to="/membership" className={navLinkClass(location.pathname === '/membership')}>
              {t('nav', 'getInvolved') as string}
            </Link>

            <Link to="/financials" className={navLinkClass(location.pathname === '/financials')}>
              {t('nav', 'financials') as string}
            </Link>
          </nav>

          {/* Right side: Language + Social + Mobile menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/10 gap-1"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold">{language === 'en' ? 'ES' : 'EN'}</span>
            </Button>

            {/* Social icons */}
            <div className="hidden md:flex items-center gap-1">
              <a href="https://www.instagram.com/esca_edmonton" target="_blank" rel="noopener noreferrer" className="p-2 text-primary-foreground/60 hover:text-secondary transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61567303020814" target="_blank" rel="noopener noreferrer" className="p-2 text-primary-foreground/60 hover:text-secondary transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/el-salvador-cultural-association-of-edmonton" target="_blank" rel="noopener noreferrer" className="p-2 text-primary-foreground/60 hover:text-secondary transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-primary-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-primary text-primary-foreground w-72">
                <SheetTitle className="text-primary-foreground font-serif-display">Menu</SheetTitle>
                <nav className="flex flex-col gap-1 mt-8">
                  <Link to="/" className="px-4 py-3 text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/5 rounded-md transition-colors">
                    {t('nav', 'home') as string}
                  </Link>
                  <div className="px-4 py-2 text-xs font-semibold text-secondary uppercase tracking-wider mt-1">
                    {t('nav', 'about') as string}
                  </div>
                  <Link to="/about" className="px-6 py-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                    {t('nav', 'aliciasStory') as string}
                  </Link>
                  <Link to="/events" className="px-4 py-3 text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/5 rounded-md transition-colors">
                    {t('nav', 'events') as string}
                  </Link>
                  <Link to="/gallery" className="px-4 py-3 text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/5 rounded-md transition-colors">
                    {t('nav', 'gallery') as string}
                  </Link>
                  <Link to="/membership" className="px-4 py-3 text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/5 rounded-md transition-colors">
                    {t('nav', 'getInvolved') as string}
                  </Link>
                  <Link to="/financials" className="px-4 py-3 text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/5 rounded-md transition-colors">
                    {t('nav', 'financials') as string}
                  </Link>
                  <div className="flex items-center gap-4 px-4 mt-4 pt-4 border-t border-primary-foreground/10">
                    <a href="https://www.instagram.com/esca_edmonton" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61567303020814" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/el-salvador-cultural-association-of-edmonton" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
