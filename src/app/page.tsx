import { Hero } from "@/components/home/Hero";
import { AnimalGrid } from "@/components/animals/AnimalGrid";
import { animals } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Get first 4 animals for featured section
const featuredAnimals = animals.slice(0, 4);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Featured Pets</h2>
              <p className="mt-2 text-muted-foreground">Meet some of our adorable friends looking for a home.</p>
            </div>
            <Link
              href="/animals"
              className="hidden sm:flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <AnimalGrid animals={featuredAnimals} />

          <div className="mt-8 sm:hidden text-center">
            <Link
              href="/animals"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Search</h3>
              <p className="text-muted-foreground">Browse through our list of available pets and find your perfect match.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground">Contact the current guardian or shelter to learn more about the pet.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Adopt</h3>
              <p className="text-muted-foreground">Complete the adoption process and bring your new best friend home.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
