import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Animal {
    id: string;
    name: string;
    breed: string;
    age: string;
    gender: "Male" | "Female";
    location: string;
    imageUrl: string;
    type: "Dog" | "Cat" | "Other";
}

interface AnimalCardProps {
    animal: Animal;
    className?: string;
}

export function AnimalCard({ animal, className }: AnimalCardProps) {
    return (
        <div className={cn("group relative bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-border", className)}>
            <Link href={`/animals/${animal.id}`} className="absolute inset-0 z-0">
                <span className="sr-only">View details for {animal.name}</span>
            </Link>
            <div className="aspect-square relative overflow-hidden bg-muted">
                {animal.imageUrl && (
                    <Image
                        src={animal.imageUrl}
                        alt={animal.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}
                {!animal.imageUrl && (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                        <span className="sr-only">Image of {animal.name}</span>
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/20" />
                    </div>
                )}

                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors backdrop-blur-sm z-20">
                    <Heart className="h-5 w-5" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12 z-10 pointer-events-none">
                    <h3 className="text-white font-bold text-xl">{animal.name}</h3>
                </div>
            </div>

            <div className="p-4 space-y-2 pointer-events-none">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-primary">{animal.breed}</p>
                        <p className="text-sm text-muted-foreground">{animal.age} • {animal.gender}</p>
                    </div>
                </div>

                <div className="flex items-center text-muted-foreground text-sm pt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {animal.location}
                </div>
            </div>
        </div>
    );
}
