"use client";

import { Search } from "lucide-react";

export function FilterBar() {
    return (
        <div className="bg-card border border-border rounded-lg p-4 shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative md:col-span-2">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search by name, breed..."
                        className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    />
                </div>

                <div>
                    <select className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground">
                        <option value="">All Types</option>
                        <option value="dog">Dogs</option>
                        <option value="cat">Cats</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <select className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground">
                        <option value="">Location</option>
                        <option value="nicosia">Nicosia</option>
                        <option value="limassol">Limassol</option>
                        <option value="larnaca">Larnaca</option>
                        <option value="paphos">Paphos</option>
                        <option value="famagusta">Famagusta</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
