import { useState } from 'react'
import { siteTitle } from '../../constants/content'

const navLinks = [
  { label: 'O Início', href: '#inicio' },
  { label: 'A Rota', href: '#rota' },
  { label: 'Os Postais', href: '#postais' },
  { label: 'Lado B', href: '#playlist' },
  { label: 'Carta do Capitão', href: '#carta' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLink = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 flex items-center justify-between"
      style={{ backgroundColor: '#F2E8D5', borderBottom: '2px solid #B8882A' }}
      aria-label="Navegação principal"
    >
      {/* Logo */}
      <span className="font-display font-bold italic text-drama text-2xl cursor-default select-none">
        {siteTitle}
      </span>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-8" aria-label="Links de navegação">
        {navLinks.map(link => (
          <button
            key={link.href}
            onClick={() => handleLink(link.href)}
            className="font-serif text-text text-base hover:text-drama transition-colors duration-200 bg-transparent border-none cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none"
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-text transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
          className={`block w-6 h-0.5 bg-text transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-6 h-0.5 bg-text transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col py-4 shadow-lg"
          style={{ backgroundColor: '#F2E8D5', borderBottom: '1px solid #B8882A' }}
        >
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="font-serif text-text text-base px-6 py-3 text-left hover:bg-gold/10 transition-colors duration-150 bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
