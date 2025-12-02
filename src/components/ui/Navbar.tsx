"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart, Search } from "lucide-react";


const navigation = [
    { name: "Home", href: "/" },
    { name: "Adopt", href: "/animals" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Heart className="h-8 w-8 text-primary fill-primary" />
                            <span className="font-bold text-xl tracking-tight text-foreground">
                                PawfectBond
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button className="p-2 hover:bg-secondary rounded-full transition-colors">
                            <Search className="h-5 w-5 text-foreground/80" />
                        </button>
                        <Link
                            href="/animals"
                            className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                            Find a Pet
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4 pb-2">
                            <Link
                                href="/animals"
                                className="block w-full text-center bg-primary text-primary-foreground px-4 py-3 rounded-lg font-medium hover:bg-primary/90"
                                onClick={() => setIsOpen(false)}
                            >
                                Find a Pet
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
