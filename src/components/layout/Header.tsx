"use client"

import * as React from "react"
import Link from "next/link"
import { Phone, Menu, X, MessageCircle, ChevronDown } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Areas Served", href: "/areas" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
            DG
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-white uppercase leading-none">
              Dawelen<span className="text-primary">Glass</span>
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mt-0.5">
              Glazing & Repairs
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-[0.1em] text-slate-300">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-6">
              <Link
                href={link.href}
                className="transition-colors hover:text-white flex items-center gap-1.5 relative"
              >
                <span>{link.name}</span>
                {link.name === "Services" && <ChevronDown className="h-3 w-3" />}
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
              
              {link.name === "Services" && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
                  <div className="p-2 flex flex-col">
                    {siteConfig.services.map((service) => (
                      <Link 
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="px-4 py-3 text-slate-600 hover:text-primary hover:bg-slate-50 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA matching Dribbble On Top Roofing */}
        <div className="hidden md:flex items-center space-x-5">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all group"
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
              <Phone className="h-4 w-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Fast Call Out
              </span>
              <span className="text-xs font-black tracking-wide text-white">
                {siteConfig.phone}
              </span>
            </div>
          </a>

          <Button asChild size="sm" className="bg-primary hover:bg-blue-700 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-lg shadow-blue-600/30">
            <Link href="/request-a-quote">FREE ESTIMATE</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col space-y-3 pt-4 border-t border-border">
            <Button asChild className="w-full justify-center">
              <Link href={`tel:${siteConfig.phone}`}>
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Link>
            </Button>
            
            {siteConfig.whatsapp && siteConfig.whatsapp !== "WHATSAPP_PLACEHOLDER" && (
              <Button asChild variant="outline" className="w-full justify-center text-[#25D366] border-[#25D366] hover:bg-[#25D366]/10">
                <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </Link>
              </Button>
            )}

            <Button asChild className="w-full justify-center">
              <Link href="/request-a-quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
