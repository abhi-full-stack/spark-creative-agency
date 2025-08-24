import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss your project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-primary-foreground">Start Your Project</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Tell us about your vision and we'll make it reality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Input 
                  placeholder="Your Email" 
                  type="email"
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
              <Input 
                placeholder="Project Type (Web Development, Design, AI Solutions, etc.)" 
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Textarea 
                placeholder="Tell us about your project, goals, and timeline..."
                rows={5}
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button size="lg" variant="secondary" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="opacity-90">hello@sparkcreative.agency</p>
                    <p className="opacity-90">careers@sparkcreative.agency</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="opacity-90">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="opacity-90">123 Innovation Street</p>
                    <p className="opacity-90">Tech District, CA 94102</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/20">
              <h4 className="font-semibold mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-white/20 text-primary-foreground hover:bg-white/10">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="border-white/20 text-primary-foreground hover:bg-white/10">
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="border-white/20 text-primary-foreground hover:bg-white/10">
                  Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;