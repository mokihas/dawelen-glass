import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { 
  ArrowRight, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Award, 
  User, 
  Mail, 
  FileText, 
  ChevronRight,
  Calculator,
  Wrench
} from "lucide-react"
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema"

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      
      {/* ========================================================================= */}
      {/* SECTION 1 - HERO (Dark, High-Impact Contractor Design with Floating Form) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center bg-[#0F1216] overflow-hidden pt-12 pb-20 border-b border-slate-800/80">
        {/* Background Image Overlay with deep contrast */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src={siteConfig.heroImage} 
            alt="Glazing installation" 
            className="w-full h-full object-cover object-center mix-blend-luminosity filter brightness-75" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1216] via-[#0F1216]/90 to-[#0F1216]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1216] via-transparent to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Bold condensed copy & twin CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-primary/10 border border-primary/30 px-3.5 py-1.5 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Fast Emergency Response • 24/7 Available
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.03]">
                STAY PROTECTED WITH <span className="text-primary">ANGLESEY&apos;S</span> GLAZING EXPERTS
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                Emergency board-up, double glazing replacement, window repairs & bespoke glass installations across Benllech, Anglesey, and North Wales. Quality craft built to last.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-red-600/30">
                  <Link href="/request-a-quote" className="flex items-center gap-2">
                    <span>GET A FREE ESTIMATE</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white font-bold px-7 py-4 rounded-full">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>CALL US TODAY</span>
                  </a>
                </Button>
              </div>

              {/* Trust Indicators Pill Row */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg">
                <div>
                  <div className="text-2xl font-black text-white">20+</div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Years Exp.</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Guaranteed</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">24/7</div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Emergency</div>
                </div>
              </div>
            </div>

            {/* Right Column: Floating White Lead Capture Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-2xl text-slate-900 border border-slate-100 relative overflow-hidden">
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />

                {siteConfig.ghl?.heroFormEmbedCode && siteConfig.ghl.heroFormEmbedCode.includes('<') && !siteConfig.ghl.heroFormEmbedCode.includes('Paste your GHL') ? (
                  <div 
                    className="w-full overflow-y-auto"
                    dangerouslySetInnerHTML={{ __html: siteConfig.ghl.heroFormEmbedCode }}
                  />
                ) : (
                  <form action="/request-a-quote" method="GET" className="space-y-4">
                    <div className="text-center space-y-1 mb-6">
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900">
                        GET YOUR FREE GLAZING ESTIMATE
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Fast callback within 60 minutes. No obligation.
                      </p>
                    </div>

                    {/* Name Input */}
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="Your Full Name" 
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-400 transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="Email Address" 
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-400 transition-colors"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        placeholder="Phone Number" 
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-400 transition-colors"
                      />
                    </div>

                    {/* Service Selector */}
                    <div className="relative">
                      <Wrench className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <select 
                        name="service"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white text-slate-900 transition-colors appearance-none cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled>Select Required Service</option>
                        {siteConfig.services.map((service) => (
                          <option key={service.id} value={service.name}>{service.name}</option>
                        ))}
                        <option value="Emergency Glazing">Emergency Board Up / Glazing</option>
                      </select>
                    </div>

                    {/* Message Details */}
                    <div className="relative">
                      <FileText className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <textarea 
                        name="message" 
                        rows={2} 
                        placeholder="Describe your project or measurements..." 
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-400 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-red-700 text-white font-black text-sm py-4 rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 uppercase tracking-wider mt-2"
                    >
                      <span>REQUEST A FREE ESTIMATE</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>

                    <p className="text-[11px] text-center text-slate-400 mt-2">
                      🔒 Your details are kept strictly private & confidential.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SIGNATURE SLANTED RED DIVIDER */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden leading-none z-10 -mt-1 bg-[#0F1216]">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="relative block w-full h-8 sm:h-12 fill-primary">
          <polygon points="0,0 1200,45 1200,60 0,60" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2 - ABOUT DAWELEN GLASS (Clean High-Contrast Light Section) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#F8FAFC] text-slate-900">
        <div className="container text-center max-w-4xl mx-auto">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary block mb-3">
            About Dawelen Glass
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-6 leading-tight">
            YOUR TRUSTED LOCAL GLAZING TEAM FOCUSED ON QUALITY, DURABILITY &amp; CUSTOMER CARE
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto font-normal">
            Based in Benllech, Dawelen Glass is your #1 choice for bespoke architectural glazing, emergency glass repairs, window replacements, and custom mirrors across Anglesey and Gwynedd. Our certified team of experienced specialists delivers precision, long-lasting durability, and unmatched customer care on every installation.
          </p>

          {/* 3 Pillars */}
          <div className="grid sm:grid-cols-3 gap-6 text-left mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">Guaranteed Work</h4>
              <p className="text-xs text-slate-600 leading-relaxed">All installations comply with British Standards and insurance guidelines.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">Rapid Call Out</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Fast local response for broken window boarding and glass replacement.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">Over 20 Years Exp</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Trusted by residential homeowners and leading commercial enterprises.</p>
            </div>
          </div>

          <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-red-600/30">
            <Link href="/about" className="flex items-center gap-2">
              <span>LEARN MORE ABOUT US</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 - INTERACTIVE ESTIMATOR ("WHAT WILL MY GLAZING COST?") */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-200/80">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-3">
              WHAT WILL MY GLAZING COST?
            </h2>
            <p className="text-slate-600 text-base">
              Enter your project details or postcode to get an accurate estimate rapidly.
            </p>
          </div>

          {/* Feature Card with 30-Second Quote Banner */}
          <div className="bg-[#0F1216] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden mb-12">
            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
              <div className="inline-block bg-primary text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                30-SECOND QUOTE IN 4 EASY STEPS
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                Quick Estimates for Any Home or Business
              </h3>

              <div className="flex flex-col sm:flex-row items-center gap-3 bg-white/10 p-2 rounded-2xl border border-white/20 backdrop-blur-md">
                <div className="flex items-center gap-2 px-4 py-2 w-full text-left">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Enter your postcode or street address (e.g. LL74 8SW)" 
                    className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
                <Button asChild className="w-full sm:w-auto bg-primary hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl uppercase tracking-wider shrink-0">
                  <Link href="/request-a-quote">
                    START <ChevronRight className="h-4 w-4 ml-1 inline" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Background texture */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30 pointer-events-none" />
          </div>

          {/* 4 Steps Visual Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Enter Your Address",
                desc: "Provide your property location across Anglesey or North Wales.",
                icon: MapPin,
              },
              {
                step: 2,
                title: "Confirm Your Needs",
                desc: "Choose window repair, double glazing, door glass, or emergency board-up.",
                icon: CheckCircle2,
              },
              {
                step: 3,
                title: "Enter Contact Info",
                desc: "Give us your phone or email so we can prepare exact pricing.",
                icon: User,
              },
              {
                step: 4,
                title: "Get Your Quote",
                desc: "Receive a fast, transparent estimate with no hidden charges.",
                icon: Calculator,
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 text-center flex flex-col items-center group hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center mb-4 shadow-md shadow-red-600/20 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SIGNATURE SLANTED RED DIVIDER */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden leading-none z-10 bg-white">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="relative block w-full h-8 sm:h-12 fill-primary">
          <polygon points="0,45 1200,0 1200,60 0,60" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 4 - PREMIER GLAZING SERVICES (High-Impact 2x2 Service Cards) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#F8FAFC] text-slate-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-4">
              PREMIER GLAZING SERVICES
            </h2>
            <p className="text-slate-600 text-base">
              We&apos;re proud to serve the Benllech, Anglesey, and North Wales communities with excellence.
            </p>
          </div>

          {/* 4 Main Service Cards with Signature Red Ribbons */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.services.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.name}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
                image={service.image}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-red-600/30">
              <Link href="/services" className="flex items-center gap-2">
                <span>VIEW ALL SERVICES</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 - WHY CHOOSE DAWELEN GLASS? (Dark Section with Red Circular Badges) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#0F1216] text-white relative overflow-hidden border-t border-slate-800/80">
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            WHY CHOOSE DAWELEN GLASS?
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto mb-16">
            High-quality glazing solutions backed by experience, integrity &amp; fast emergency service.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "FREE ESTIMATES & INSPECTION",
                desc: "Accurate quotes with zero pressure and complete transparency.",
                icon: CheckCircle2,
              },
              {
                title: "QUICK RESPONSE TIME",
                desc: "Immediate support for broken windows, cracked panels, and emergencies.",
                icon: Zap,
              },
              {
                title: "INSURANCE CLAIM GUIDANCE",
                desc: "Direct support and itemized paperwork for insurance claim handling.",
                icon: ShieldCheck,
              },
              {
                title: "MASTER GLAZING SPECIALISTS",
                desc: "Decades of certified expertise delivering precision installations.",
                icon: Award,
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-red-600/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-sm md:text-base font-black uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6 - REAL STORIES FROM REAL CUSTOMERS (Google Reviews) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-200">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-4">
              REAL STORIES FROM REAL CUSTOMERS
            </h2>
            <p className="text-slate-600 text-base mb-6">
              Verified reviews reflecting our commitment to quality service and customer care.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 px-5 py-2.5 rounded-full shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex text-[#FBBC04]">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800 tracking-wide">
                Google 5.0 Rating • ({siteConfig.reviews?.totalReviews || 40}+ Reviews)
              </span>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {siteConfig.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center uppercase">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{testimonial.name}</h4>
                        <span className="text-[11px] text-slate-500 font-medium">Verified Customer</span>
                      </div>
                    </div>
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>

                  <div className="flex text-[#FBBC04] mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {testimonial.service}
                  </span>
                  <span className="text-xs font-bold text-primary">Read Review</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-red-600/30">
              <a href={siteConfig.reviews?.googleBusinessProfileUrl || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span>VIEW MORE TESTIMONIALS</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7 - SEE OUR WORK IN ACTION (Portfolio Showcase) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#0F1216] text-white border-t border-slate-800/80">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary block mb-2">
                Our Craftsmanship
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                SEE OUR WORK IN ACTION
              </h2>
            </div>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              Explore recent glazing projects completed for homeowners &amp; businesses across Anglesey and Gwynedd.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {siteConfig.projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-red-600/30">
              <Link href="/projects" className="flex items-center gap-2">
                <span>VIEW ALL PROJECTS</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SIGNATURE SLANTED RED DIVIDER */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden leading-none z-10 bg-[#0F1216]">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="relative block w-full h-8 sm:h-12 fill-primary">
          <polygon points="0,0 1200,45 1200,60 0,60" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 8 - GLAZING SOLUTIONS NEAR YOU (Service Areas) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#F8FAFC] text-slate-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary block mb-2">
              Areas We Cover
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-4">
              GLAZING SOLUTIONS NEAR YOU
            </h2>
            <p className="text-slate-600 text-base">
              Providing reliable glazing and glass repair services for homeowners and businesses throughout Anglesey and North Wales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            
            {/* Anglesey Towns */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase text-slate-900">Isle of Anglesey</h3>
                  <span className="text-xs text-slate-500 font-medium">Primary Fast Response Zone</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Benllech",
                  "Holyhead",
                  "Llangefni",
                  "Menai Bridge",
                  "Beaumaris",
                  "Amlwch",
                  "Rhosneigr",
                  "Trearddur Bay",
                ].map((town) => (
                  <div key={town} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs font-bold text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>{town}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gwynedd & Surrounds */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase text-slate-900">Gwynedd &amp; North Wales</h3>
                  <span className="text-xs text-slate-500 font-medium">Scheduled &amp; Commercial Coverage</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Bangor",
                  "Caernarfon",
                  "Conwy",
                  "Llandudno",
                  "Bethesda",
                  "Porthmadog",
                  "Colwyn Bay",
                  "Llanfairpwll",
                ].map((town) => (
                  <div key={town} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs font-bold text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>{town}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 mb-4">
              Don&apos;t see your area listed? We frequently travel across North Wales for specialized projects.
            </p>
            <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100 rounded-full font-bold text-xs px-6 py-3">
              <a href={`tel:${siteConfig.phone}`}>
                Check Your Location: {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9 - FINAL HIGH-CONVERTING CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#0F1216] text-white border-t border-slate-800">
        <div className="container text-center max-w-4xl mx-auto space-y-8">
          <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto">
            <Wrench className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            NEED RELIABLE GLAZING IN <span className="text-primary">ANGLESEY</span>?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Get your transparent, zero-obligation estimate today or call our rapid response team directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-red-700 text-white font-black px-10 py-5 rounded-full shadow-2xl shadow-red-600/40 uppercase tracking-wider">
              <Link href="/request-a-quote">REQUEST A FREE QUOTE</Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white font-bold px-8 py-5 rounded-full uppercase tracking-wider">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>{siteConfig.phone}</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
