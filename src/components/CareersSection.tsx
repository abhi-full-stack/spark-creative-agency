import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const internshipPrograms = [
  {
    title: "Web Development",
    duration: "3-6 months",
    description: "Learn React, Node.js, and modern web technologies while working on real client projects",
    skills: ["React/Next.js", "TypeScript", "Node.js", "Database Design"],
    testimonial: "Best learning experience! I went from beginner to junior developer in 4 months.",
    author: "Sarah Chen, Now at Google"
  },
  {
    title: "UI/UX Design",
    duration: "3-4 months", 
    description: "Master design thinking, user research, and create stunning interfaces for real products",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    testimonial: "The mentorship was incredible. I built a portfolio that landed me my dream job.",
    author: "Alex Rivera, Design Lead at Stripe"
  },
  {
    title: "AI & Machine Learning",
    duration: "4-6 months",
    description: "Work with cutting-edge AI technologies and build intelligent solutions for businesses",
    skills: ["Python", "LLMs", "API Integration", "Data Analysis"],
    testimonial: "From theory to practice - I shipped AI features used by thousands of users.",
    author: "Priya Patel, ML Engineer at OpenAI"
  }
];

const fullTimeRoles = [
  { title: "Senior Full-Stack Developer", location: "Remote/Hybrid", type: "Full-time" },
  { title: "UI/UX Designer", location: "On-site", type: "Full-time" },
  { title: "AI Solutions Architect", location: "Remote", type: "Full-time" },
  { title: "Project Manager", location: "Hybrid", type: "Full-time" }
];

const CareersSection = () => {
  return (
    <section id="careers" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your career with us or take it to the next level. We're building the future together.
          </p>
        </div>
        
        {/* Internship Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Internship Programs</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {internshipPrograms.map((program, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="text-accent font-medium">
                    {program.duration}
                  </CardDescription>
                  <p className="text-muted-foreground text-sm mt-2">
                    {program.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Skills You'll Learn</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-primary-light text-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm italic mb-2">"{program.testimonial}"</p>
                    <p className="text-xs text-muted-foreground font-medium">- {program.author}</p>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Apply for Internship
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Full-time Positions */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Full-time Positions</h3>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Open Positions</CardTitle>
                <CardDescription>
                  Join our growing team and help shape the future of digital solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fullTimeRoles.map((role, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-card-hover transition-colors"
                    >
                      <div>
                        <h4 className="font-semibold">{role.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {role.location} • {role.type}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Apply Now
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-primary rounded-lg text-primary-foreground text-center">
                  <h4 className="font-bold text-lg mb-2">Don't see your role?</h4>
                  <p className="mb-4 opacity-90">
                    We're always looking for talented people. Send us your resume!
                  </p>
                  <Button variant="secondary">
                    Contact HR Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;