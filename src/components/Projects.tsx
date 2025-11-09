import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import siparImage from "@/assets/project-sipar.jpg";
import booksImage from "@/assets/project-books.jpg";
import coffeeImage from "@/assets/project-coffee.jpg";
import portfolioImage from "@/assets/project-portfolio.jpg";
import wasteImage from "@/assets/project-waste.jpg";

const projects = [
  {
    title: "SIPAR – Sistem Informasi Peminjaman Ruangan",
    description:
      "Aplikasi web berbasis PHP dan MySQL untuk mempermudah proses peminjaman serta pengelolaan data ruangan instansi.",
    image: siparImage,
    tags: ["PHP", "MySQL", "Web App"],
  },
  {
    title: "Website Manajemen Buku",
    description:
      "Website CRUD sederhana menggunakan HTML, CSS, JavaScript, dan MySQL.",
    image: booksImage,
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    title: "Landing Page Kopi Nusantara",
    description:
      "Desain landing page modern untuk promosi produk kopi lokal.",
    image: coffeeImage,
    tags: ["HTML", "CSS", "Design"],
  },
  {
    title: "Portfolio V1 – Personal Website",
    description:
      "Versi pertama website portofolio dengan layout klasik dan responsif.",
    image: portfolioImage,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Sistem Pemetaan Tempat Sampah DIY (KKN)",
    description:
      "Website berbasis partisipatif untuk mendata lokasi tempat sampah di wilayah DIY.",
    image: wasteImage,
    tags: ["Web GIS", "PHP", "MySQL"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Proyek <span className="gradient-text">Saya</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Lihat Detail
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
