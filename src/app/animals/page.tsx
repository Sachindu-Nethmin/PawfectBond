import { AnimalGrid } from "@/components/animals/AnimalGrid";
import { FilterBar } from "@/components/animals/FilterBar";
import { animals } from "@/lib/data";

export default function AnimalsPage() {
    return (
        <div className="min-h-screen bg-background py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Adopt a Pet</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Browse our available pets and find your perfect match.
                        Use the filters below to narrow down your search.
                    </p>
                </div>

                <FilterBar />

                <AnimalGrid animals={animals} />
            </div>
        </div>
    );
}
