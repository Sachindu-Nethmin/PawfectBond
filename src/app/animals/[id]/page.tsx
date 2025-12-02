import { animals } from "@/lib/data";
import { Animal } from "@/components/animals/AnimalCard";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Info, Phone, Mail } from "lucide-react";

// Mock data fetcher
const getAnimal = (id: string): Animal | undefined => {
    return animals.find((a) => a.id === id);
};

export default function AnimalDetailsPage({ params }: { params: { id: string } }) {
    const animal = getAnimal(params.id);

    if (!animal) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Animal Not Found</h1>
                    <Link href="/animals" className="text-primary hover:underline">
                        Back to Listings
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/animals" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Listings
                </Link>

                <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
                    <div className="relative h-96 bg-muted">
                        {/* Placeholder for image */}
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                            <span className="sr-only">Image of {animal.name}</span>
                            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/20" />
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-4xl font-bold text-foreground mb-2">{animal.name}</h1>
                                <p className="text-xl text-primary font-medium">{animal.breed}</p>
                            </div>
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                                {animal.type}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="flex items-center text-muted-foreground">
                                <Calendar className="h-5 w-5 mr-3 text-primary" />
                                <span>{animal.age}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                                <Info className="h-5 w-5 mr-3 text-primary" />
                                <span>{animal.gender}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                                <MapPin className="h-5 w-5 mr-3 text-primary" />
                                <span>{animal.location}</span>
                            </div>
                        </div>

                        <div className="prose max-w-none text-muted-foreground mb-8">
                            <h3 className="text-lg font-semibold text-foreground mb-2">About {animal.name}</h3>
                            <p>
                                {animal.name} is a loving {animal.breed.toLowerCase()} looking for a forever home.
                                They are friendly, energetic, and great with people.
                                (This is a placeholder description. In a real app, this would be dynamic.)
                            </p>
                        </div>

                        <div className="border-t border-border pt-8">
                            <h3 className="text-lg font-semibold text-foreground mb-4">Interested in adopting?</h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call Shelter
                                </button>
                                <button className="flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors font-medium">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Email Inquiry
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
