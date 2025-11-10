import { Card, CardContent } from "@/components/ui/card";
import siparImage from "@/assets/project-sipar.jpg";
import booksImage from "@/assets/project-books.jpg";
import coffeeImage from "@/assets/project-coffee.jpg";
import portfolioImage from "@/assets/project-portfolio.jpg";
import wasteImage from "@/assets/project-waste.jpg";

const projects = [
  {
    title: "SIPAR – Sistem Informasi Peminjaman Ruangan",
    description:
      "Pada tahun 2024, selama menjalani magang di Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR), khususnya di Badan Pengembangan Sumber Daya Manusia (BPSDM), saya berkesempatan untuk mengembangkan Sistem Informasi Peminjaman Ruangan (SIPAR). Website ini dirancang untuk mempermudah proses peminjaman dan pengelolaan data ruangan di lingkungan instansi secara digital. Melalui SIPAR, pengguna dapat melakukan peminjaman ruangan dengan lebih efisien melalui fitur seperti login, registrasi, pencarian ruangan, serta manajemen data ruangan. Sistem ini juga dilengkapi dengan antarmuka yang responsif dan user friendly, sehingga dapat diakses dengan mudah oleh berbagai pengguna.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
