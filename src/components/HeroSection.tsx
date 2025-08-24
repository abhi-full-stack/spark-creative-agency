import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent transform rotate-12"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent mb-6">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Next-Generation Digital Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Future-Ready
              </span>
              <br />
              <span className="text-foreground">Digital</span>
              <br />
              <span className="text-accent">Experiences</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Transforming businesses with cutting-edge AI solutions, futuristic web applications, 
              and innovative digital strategies that drive exponential growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact} 
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent/90 border-0 text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300"
              >
                Launch Your Vision
                <div className="ml-2 flex items-center">
                  <div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-current rounded-full animate-pulse mx-1" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-1 h-1 bg-current rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300"
              >
                Explore Our Work
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="relative">
              {/* Futuristic grid/mesh background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent),linear-gradient(-45deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:30px_30px] rounded-3xl opacity-30"></div>
              
              {/* Central futuristic element */}
              <div className="relative p-16 h-96 flex items-center justify-center">
                <div className="relative">
                  {/* Central core */}
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-glow animate-pulse">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-foreground rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-glow"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-glow"></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-accent rounded-full shadow-glow"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-glow"></div>
                  </div>
                  
                  {/* Connection lines */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-gradient-to-t from-primary to-transparent transform -translate-x-1/2 -translate-y-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-l from-accent to-transparent transform -translate-y-1/2 -translate-x-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-accent to-transparent transform -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;