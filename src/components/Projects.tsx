import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import siparImage from "@/assets/project-sipar.jpg";
import booksImage from "@/assets/project-books.jpg";
import primasindoImage from "@/assets/project-primasindo.jpg";
import sigYogyakartaImage from "@/assets/project-sig-yogyakarta.jpg";
import greencycleImage from "@/assets/project-greencycle.jpg";

const projects = [
  {
    title: "SIPAR – Sistem Informasi Peminjaman Ruangan",
    description:
      "Pada tahun 2024, selama menjalani magang di Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR), khususnya di Badan Pengembangan Sumber Daya Manusia (BPSDM), saya berkesempatan untuk mengembangkan Sistem Informasi Peminjaman Ruangan (SIPAR). Website ini dirancang untuk mempermudah proses peminjaman dan pengelolaan data ruangan di lingkungan instansi secara digital. Melalui SIPAR, pengguna dapat melakukan peminjaman ruangan dengan lebih efisien melalui fitur seperti login, registrasi, pencarian ruangan, serta manajemen data ruangan. Sistem ini juga dilengkapi dengan antarmuka yang responsif dan user friendly, sehingga dapat diakses dengan mudah oleh berbagai pengguna.",
    image: siparImage,
    tags: ["PHP", "MySQL", "Web App"],
  },
  {
    title: "Unibookstore – Website Manajemen Buku",
    description:
      "Saya membuat website ini sebagai bagian dari pelatihan Web Development bersertifikasi BNSP (Badan Nasional Sertifikasi Profesi). Website ini berisi informasi mengenai berbagai sumber daya perpustakaan, salah satunya adalah daftar buku dari berbagai bidang yang dapat diakses oleh banyak pengguna. Fitur utama yang dikembangkan meliputi fungsi pencarian buku berdasarkan judul dan penulis untuk mempermudah proses pencarian, serta fitur manajemen buku bagi admin perpustakaan agar data buku tetap terbarui dan konsisten. Proyek ini menjadi salah satu implementasi dari kompetensi pengembangan web yang saya pelajari selama pelatihan.",
    image: booksImage,
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    title: "Website Primasindo",
    description:
      "Proyek ini bernama Website Primasindo, yang saya buat sebagai bagian dari tugas mata kuliah Rekayasa Perangkat Lunak (RPL) pada semester lima tahun 2023. Website Primasindo berfungsi sebagai platform informasi untuk sebuah layanan psikologi bernama Primasindo. Website ini memuat berbagai elemen terkait bidang psikologi, seperti fitur pendaftaran sesi konseling dan halaman artikel yang berisi topik-topik psikologis. Selain itu, website ini dirancang agar dapat diakses oleh masyarakat luas yang ingin mengenal lebih jauh tentang Primasindo dan layanan yang disediakan.",
    image: primasindoImage,
    tags: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "Sistem Informasi Geografis - Yogyakarta",
    description:
      "Pada tahun 2023, saya mengembangkan Website Sistem Informasi Geografis (SIG) Pariwisata Yogyakarta sebagai bagian dari tugas mata kuliah Global Positioning System (GPS). Website ini bertujuan untuk memudahkan pengguna dalam mencari dan mengetahui informasi seputar tempat wisata yang ada di wilayah Daerah Istimewa Yogyakarta. Sistem ini menyajikan peta wisata interaktif yang menampilkan lokasi-lokasi wisata beserta informasi terkait seperti deskripsi dan sejarah singkat setiap destinasi. Melalui website ini, pengguna dapat dengan mudah mengakses informasi wisata secara praktis, kapan pun dan di mana pun, sehingga dapat membantu wisatawan dalam merencanakan kunjungan mereka ke berbagai tempat menarik di Yogyakarta.",
    image: sigYogyakartaImage,
    tags: ["Web GIS", "PHP", "MySQL", "JavaScript"],
  },
  {
    title: "GreenCycle - UI/UX Design",
    description:
      "Pada semester 6, saya mengerjakan proyek GreenCycle sebagai tugas akhir mata kuliah UI/UX Design. Aplikasi ini dirancang untuk mempermudah proses daur ulang sampah dengan menghubungkan pengguna dan layanan pengelolaan sampah secara digital. GreenCycle memiliki tiga fitur utama, yaitu E-Wallet untuk mencatat saldo hasil daur ulang, Pick-Up untuk permintaan pengambilan sampah oleh petugas, dan Shop sebagai tempat pengguna menukarkan poin atau saldo dengan barang ramah lingkungan. Proyek ini berfokus pada pengalaman pengguna (User Experience) yang sederhana namun interaktif, serta antarmuka pengguna (User Interface) yang bersih dan mudah digunakan. Tujuan dari desain ini adalah untuk mendukung gaya hidup berkelanjutan dengan memanfaatkan teknologi dalam pengelolaan sampah yang lebih efisien dan modern.",
    image: greencycleImage,
    tags: ["UI/UX Design", "Figma", "Mobile App"],
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Proyek <span className="gradient-text">Saya</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div 
                className="relative overflow-hidden h-80 cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                    Klik untuk memperbesar
                  </span>
                </div>
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

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="text-white" size={24} />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-full object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
