import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Tentang <span className="gradient-text">Saya</span>
          </h2>
          
          <div className="glass-card p-8 rounded-lg mb-8">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Saya adalah lulusan Informatika <span className="text-primary font-semibold">UPN "Veteran" Yogyakarta</span> dengan minat di bidang pengembangan web dan desain. Terampil dalam HTML, CSS, JavaScript, PHP, dan SQL, serta berpengalaman mengembangkan sistem informasi berbasis web seperti SIPAR.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Saya juga memiliki kemampuan desain menggunakan Canva dan CapCut untuk menciptakan tampilan yang menarik dan profesional. Saya percaya bahwa kombinasi keterampilan teknis dan desain dapat menciptakan pengalaman pengguna yang luar biasa.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="mr-2" size={20} />
              Hubungi Saya
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
