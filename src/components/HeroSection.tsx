import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transform Your
              <span className="bg-gradient-accent bg-clip-text text-transparent block">
                Digital Presence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We create stunning websites, powerful web applications, and AI solutions 
              that drive growth. From design to deployment, we make your vision reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToContact} className="group">
                Start Your Project
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                View Our Work
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Digital transformation and web development services" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;