import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    icon: "🌐",
    features: ["React & Next.js", "Full-Stack Solutions", "E-commerce Platforms", "API Integration"]
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that convert visitors into customers and provide exceptional user experiences.",
    icon: "🎨",
    features: ["User Research", "Wireframing", "Prototyping", "Brand Identity"]
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI agents and LLM integrations to automate processes and enhance business operations.",
    icon: "🤖",
    features: ["ChatBots", "Process Automation", "Data Analysis", "Custom AI Models"]
  },
  {
    title: "Digital Presence",
    description: "Complete online presence management including SEO, content strategy, and social media optimization.",
    icon: "📈",
    features: ["SEO Optimization", "Content Strategy", "Social Media", "Analytics"]
  },
  {
    title: "Software Solutions",
    description: "Custom software development tailored to your business needs, from mobile apps to enterprise systems.",
    icon: "💻",
    features: ["Mobile Apps", "Desktop Software", "Cloud Solutions", "System Integration"]
  },
  {
    title: "Graphics Design",
    description: "Professional graphic design services for branding, marketing materials, and digital assets.",
    icon: "🎭",
    features: ["Logo Design", "Marketing Materials", "Web Graphics", "Brand Guidelines"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to launch, we provide end-to-end solutions that drive your business forward
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-4xl mb-4 group-hover:animate-float">{service.icon}</div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <svg className="h-4 w-4 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;