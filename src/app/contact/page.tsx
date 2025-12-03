import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have questions about adoption or want to get in touch? We&apos;d love to hear from you.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-foreground">Phone / WhatsApp</h3>
                                    <p className="mt-1 text-muted-foreground">
                                        <a href="https://wa.me/94702884311" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                            0702884311
                                        </a>
                                    </p>
                                    <p className="text-sm text-muted-foreground">Available on WhatsApp</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-foreground">Email</h3>
                                    <p className="mt-1 text-muted-foreground">sachindunethminweerasinghe@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-foreground">Location</h3>
                                    <p className="mt-1 text-muted-foreground">
                                        Kamburugamuwa<br />
                                        Sri Lanka
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
