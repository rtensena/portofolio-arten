import { Code2, Database, Palette, GitBranch } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    icon: Database,
    items: ["PHP", "SQL", "MySQL"],
  },
  {
    category: "Design",
    icon: Palette,
    items: ["Canva", "CapCut", "Figma"],
  },
  {
    category: "Tools",
    icon: GitBranch,
    items: ["Git", "GitHub"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Keahlian <span className="gradient-text">Saya</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto">
                <skillGroup.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-foreground">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillGroup.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Bar */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Tingkat Keahlian</h3>
            <div className="space-y-4">
              {[
                { name: "HTML & CSS", level: 90 },
                { name: "JavaScript", level: 70 },
                { name: "PHP", level: 80 },
                { name: "SQL", level: 85 },
                { name: "Design", level: 75 },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
