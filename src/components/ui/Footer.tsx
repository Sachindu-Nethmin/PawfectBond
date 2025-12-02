import Link from "next/link";
import { Mail, Phone, MapPin, Heart, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary/30 border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Heart className="h-6 w-6 text-primary fill-primary" />
                            <span className="font-bold text-lg text-foreground">PawfectBond</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Helping pets find their forever homes. Connecting hearts, one paw at a time.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/animals" className="hover:text-primary transition-colors">Adopt a Pet</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>sachindunethminweerasinghe@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <a href="https://wa.me/94702884311" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    0702884311 (WhatsApp)
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Kamburugamuwa, Sri Lanka</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/sachindu-nethmin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/94702884311" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">WhatsApp</span>
                                <MessageCircle className="h-5 w-5" />
                            </a>
                            <a href="mailto:sachindunethminweerasinghe@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">Email</span>
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} PawfectBond. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
