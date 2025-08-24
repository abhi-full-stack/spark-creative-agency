import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "E-commerce Revolution",
    client: "Fashion Retailer",
    problem: "Outdated website with 2% conversion rate and poor mobile experience",
    solution: "Complete redesign with modern React architecture, optimized checkout flow, and mobile-first approach",
    result: "300% increase in conversions, 150% boost in mobile traffic, $2M additional revenue in 6 months",
    image: "📊",
    category: "Web Development"
  },
  {
    title: "AI Customer Support",
    client: "SaaS Company",
    problem: "Overwhelmed support team handling 500+ tickets daily with slow response times",
    solution: "Custom AI chatbot with LLM integration, automated ticket routing, and smart knowledge base",
    result: "80% reduction in response time, 60% fewer escalations, 95% customer satisfaction",
    image: "🤖",
    category: "AI Solutions"
  },
  {
    title: "Brand Transformation",
    client: "Tech Startup",
    problem: "No brand identity, inconsistent messaging across platforms, low market recognition",
    solution: "Complete brand strategy, logo design, website redesign, and social media presence",
    result: "400% increase in brand mentions, 250% growth in social followers, successful Series A funding",
    image: "🎨",
    category: "Design & Branding"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real problems, innovative solutions, measurable results
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="text-6xl mb-4 group-hover:animate-float">{study.image}</div>
                <div className="text-sm text-accent font-medium mb-2">{study.category}</div>
                <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                <CardDescription className="text-muted-foreground font-medium">
                  {study.client}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-destructive mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground">{study.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>
                
                <div className="p-4 bg-accent-light rounded-lg">
                  <h4 className="font-semibold text-accent mb-2">Result</h4>
                  <p className="text-sm text-accent/80 font-medium">{study.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;