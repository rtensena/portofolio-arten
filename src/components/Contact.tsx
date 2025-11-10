import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/rtensena", 
      label: "GitHub",
      username: "@rtensena"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/winalfan-artensena-pamuji-51aa18285", 
      label: "LinkedIn",
      username: "Winalfan Artensena Pamuji"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/winalfann", 
      label: "Instagram",
      username: "@winalfann"
    },
    { 
      icon: Mail, 
      href: "mailto:winalfann@gmail.com", 
      label: "Email",
      username: "winalfann@gmail.com"
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Hubungi <span className="gradient-text">Saya</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Koneksi Sosial</h3>
            <p className="text-muted-foreground mb-8 text-center">
              Mari terhubung! Anda dapat menemukan saya di platform berikut:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-secondary/50 rounded-lg hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <social.icon className="text-primary" size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium">{social.label}</p>
                    <p className="text-sm text-muted-foreground truncate">{social.username}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
