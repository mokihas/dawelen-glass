import { siteConfig } from "@/config/siteConfig"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export const metadata = {
  title: "About Us",
  description: `Learn more about ${siteConfig.businessName}, your trusted local glass and glazing experts in ${siteConfig.city}.`,
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
              Local Glazing Help With A Practical Approach
            </h1>
            <p className="text-xl text-muted-foreground">
              Dawelen Glass provides glass repair and replacement services for customers who want a straightforward, dependable solution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Dawelen Glass</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                Dawelen Glass provides glass repair and replacement services for customers who want a straightforward, dependable solution for damaged, misted, or outdated glazing. From failed double glazed units to custom glass work, the focus is on restoring clarity, improving function, and helping your property look well cared for.
              </p>
              <p>
                We handle a wide range of glazing jobs. From mirrors and patio door glass to shopfront glazing and safety glass solutions, we offer practical support for many types of projects. We keep the process simple. You get clear advice, a free no obligation quote, and a local service that is easy to arrange and easy to trust.
              </p>
            </div>
            
            <h3 className="text-xl font-bold mt-8">What You Can Expect</h3>
            <ul className="space-y-3 mt-4">
              {[
                "Clear Advice on the likely cause of the issue",
                "Careful Workmanship on every repair",
                "Straightforward Service and communication",
                "Neat replacement of failed double glazed units",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
               <Button size="lg" asChild>
                 <Link href="/contact">Request A Quote</Link>
               </Button>
            </div>
          </div>
          
          <div className="aspect-[4/3] bg-muted rounded-lg border border-border flex flex-col items-center justify-center text-muted-foreground font-medium overflow-hidden">
             <img src={siteConfig.aboutImage} alt="Our Glazing Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  )
}
