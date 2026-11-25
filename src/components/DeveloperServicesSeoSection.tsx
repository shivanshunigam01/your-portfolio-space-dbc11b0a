import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DEVELOPER_ROLE_BLOCKS,
  SEO_FAQS,
} from "@/data/seoFaqs";

/**
 * Indexable on-page copy for “full stack / software / frontend / backend developer” searches.
 */
export function DeveloperServicesSeoSection() {
  return (
  <>
    <section
      id="developer-services"
      className="section-pad section-premium"
      aria-labelledby="developer-services-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="developer-services-heading"
            className="text-2xl font-bold sm:text-3xl lg:text-4xl"
          >
            Full Stack, Software, Frontend & Backend Developer
          </h2>
          <p className="page-lead mt-4">
            Hire a developer in India for production web apps, cloud deployment, and
            business automations — with content and UX built for search and social visibility.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2">
          {DEVELOPER_ROLE_BLOCKS.map((role) => (
            <article key={role.id} id={role.id} className="h-full">
              <Card className="h-full p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-portfolio-primary sm:text-xl">
                  {role.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {role.body}
                </p>
              </Card>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-portfolio-primary text-white hover:bg-portfolio-primary/90">
            <Link to="/contact">
              Hire Full Stack Developer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/projects">View Live Projects</Link>
          </Button>
        </div>
      </div>
    </section>

    <section
      className="section-pad border-b border-border/50"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto max-w-3xl px-4">
        <h2 id="faq-heading" className="text-2xl font-bold sm:text-3xl">
          Frequently asked questions
        </h2>
        <dl className="mt-8 space-y-8">
          {SEO_FAQS.map((item) => (
            <div key={item.question}>
              <dt className="text-base font-semibold sm:text-lg">{item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  </>
  );
}