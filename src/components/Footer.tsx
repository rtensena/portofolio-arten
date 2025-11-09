import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Winalfan Artensena Pamuji. Made with{" "}
            <Heart className="text-primary fill-primary" size={16} /> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
