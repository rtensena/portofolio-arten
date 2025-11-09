import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:arten@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Hubungi <span className="gradient-text">Saya</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nama
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tulis pesan Anda di sini..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Kirim Pesan
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Koneksi Sosial</h3>
              <p className="text-muted-foreground mb-6">
                Mari terhubung! Anda dapat menemukan saya di platform berikut:
              </p>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <social.icon className="text-primary" size={20} />
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-center text-muted-foreground">
                  Atau langsung email ke:
                  <br />
                  <a
                    href="mailto:arten@example.com"
                    className="text-primary font-semibold hover:underline"
                  >
                    arten@example.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
