import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  href: string
  image?: string
}

export function ServiceCard({ title, description, href, image }: ServiceCardProps) {
  return (
    <Link 
      href={href} 
      className="group flex flex-col bg-white dark:bg-[#181E27] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/80 dark:border-slate-800/80 hover:-translate-y-1.5"
    >
      <div className="aspect-[16/10] bg-slate-900 w-full relative overflow-hidden">
        {/* Red Angled Ribbon Banner */}
        <div className="absolute top-4 left-0 z-10">
          <span className="bg-primary text-white text-xs font-extrabold uppercase tracking-wider py-1.5 px-5 pr-8 service-ribbon shadow-md inline-block">
            {title}
          </span>
        </div>

        <img 
          src={image || "/images/service-placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>
        <div className="flex items-center text-xs font-bold text-primary tracking-[0.1em] uppercase gap-2 group-hover:translate-x-1 transition-transform">
          <span>Explore Service</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
