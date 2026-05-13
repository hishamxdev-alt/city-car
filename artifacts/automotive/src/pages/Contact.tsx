import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">We're here to help you find your next premium vehicle.</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Showroom Location</h3>
                  <p className="text-muted-foreground">Sheikh Zayed Road<br/>Dubai, United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone Number</h3>
                  <p className="text-muted-foreground">+971 50 123 4567<br/>+971 4 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Address</h3>
                  <p className="text-muted-foreground">hello@autopremier.com<br/>sales@autopremier.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 9:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-semibold mb-4 text-lg">Quick Response</h3>
              <a 
                href="https://wa.me/971501234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 px-6 rounded-md font-medium transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5" /> Chat with us on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 shadow-sm h-fit">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full border border-input rounded-md p-2.5 bg-background" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full border border-input rounded-md p-2.5 bg-background" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input type="tel" className="w-full border border-input rounded-md p-2.5 bg-background" placeholder="Your phone number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea rows={4} className="w-full border border-input rounded-md p-2.5 bg-background resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-md font-medium transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
