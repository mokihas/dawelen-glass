import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { Phone, Mail, MapPin, Clock, Link as LinkIcon } from "lucide-react"

// Helper to get the correct icon based on platform name
const getSocialIcon = (platform: string) => {
  const p = platform.toLowerCase()
  if (p.includes('facebook')) return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  )
  if (p.includes('instagram')) return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  )
  if (p.includes('linkedin')) return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  )
  if (p.includes('twitter') || p.includes('x')) return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
  )
  if (p.includes('youtube')) return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
  )
  return <LinkIcon className="w-5 h-5" />
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B0D10] text-slate-400 py-16 border-t border-slate-800/80">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 mb-16">
        
        {/* Column 1: Brand & Identity */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-600/30">
              DG
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white uppercase leading-none">
                Dawelen<span className="text-primary">Glass</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mt-0.5">
                Glazing & Glass Repairs
              </span>
            </div>
          </Link>

          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            {siteConfig.description}
          </p>
          
          {/* Social Media Icons with red hover */}
          <div className="flex items-center gap-3 pt-2">
            {siteConfig.socialProfiles.map((profile, i) => (
               <a 
                 key={i}
                 href={profile.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary transition-all duration-300 shadow-sm"
                 aria-label={profile.platform}
               >
                 {getSocialIcon(profile.platform)}
               </a>
            ))}
          </div>

          {/* Trust Badges */}
          {siteConfig.trustBadges && siteConfig.trustBadges.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/50">
              {siteConfig.trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img src={badge.image} alt={badge.name} className="h-9 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white border-l-2 border-primary pl-3">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm font-medium text-slate-400">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">All Services</Link></li>
            <li><Link href="/projects" className="hover:text-primary transition-colors">Completed Work</Link></li>
            <li><Link href="/faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white border-l-2 border-primary pl-3">
            Services
          </h3>
          <ul className="space-y-3 text-sm font-medium text-slate-400">
            {siteConfig.services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white border-l-2 border-primary pl-3">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors flex items-center gap-3 group">
                 <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-white transition-colors shrink-0">
                   <Phone className="w-4 h-4" />
                 </div>
                 <span>{siteConfig.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors flex items-center gap-3 group">
                 <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-white transition-colors shrink-0">
                   <Mail className="w-4 h-4" />
                 </div>
                 <span className="truncate">{siteConfig.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-slate-400">
               <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                 <MapPin className="w-4 h-4" />
               </div>
               <span>
                 {siteConfig.streetAddress}<br />
                 {siteConfig.city}, {siteConfig.state} {siteConfig.postalCode}
               </span>
            </li>
          </ul>
        </div>

      </div>

      {/* GBP Verification / Legal Footer */}
      <div className="container pt-8 border-t border-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-slate-500 gap-6">
        <div className="flex flex-col space-y-1">
           <p>&copy; {currentYear} {siteConfig.legalBusinessName}. All rights reserved.</p>
           <p className="text-slate-600 text-[11px]">
             Registered in Anglesey & North Wales • {siteConfig.streetAddress}, {siteConfig.city}, {siteConfig.postalCode}
           </p>
        </div>
        
        <div className="flex space-x-6 text-xs">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}
