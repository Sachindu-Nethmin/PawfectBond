import { Animal, AnimalCard } from "./AnimalCard";

interface AnimalGridProps {
    animals: Animal[];
}

export function AnimalGrid({ animals }: AnimalGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {animals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
            ))}
        </div>
    );
}
