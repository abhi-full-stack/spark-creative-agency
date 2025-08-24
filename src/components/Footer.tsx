const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">Spark Creative</div>
            <p className="text-background/80 text-sm leading-relaxed">
              Transforming businesses through innovative digital solutions, 
              beautiful designs, and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#services" className="hover:text-background transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Digital Presence</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#portfolio" className="hover:text-background transition-colors">Portfolio</a></li>
              <li><a href="#careers" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#careers" className="hover:text-background transition-colors">Internships</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Twitter</a></li>
              <li><a href="mailto:hello@sparkcreative.agency" className="hover:text-background transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Spark Creative Agency. All rights reserved. Built with passion and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;