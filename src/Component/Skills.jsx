import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const categories = [
    {
      title: "Développement Front-End",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 88 },
        { name: "Bootstrap", level: 80 },
        { name: "Tailwind", level: 85 },
        { name: "React", level: 82 },
        { name: "Figma", level: 70 },
      ],
    },
    {
      title: "Développement Back-End",
      skills: [
        { name: "Laravel", level: 78 },
        { name: "Python", level: 75 },
      ],
    },
    {
      title: "Bases de Données",
      skills: [
        { name: "SQL", level: 80 },
        { name: "NoSQL", level: 75 },
      ],
    },
    {
      title: "Compétences Supplémentaires",
      skills: [
        { name: "Photoshop", level: 65 },
        { name: "Illustrator", level: 60 },
        { name: "Montage vidéo", level: 70 },
        { name: "Word", level: 85 },
        { name: "Excel", level: 80 },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].title);

  const selectedCategory = categories.find(
    (category) => category.title === activeCategory
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-slate-800 mb-16">
          My Skillset
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category.title)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.title
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-slate-700"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills List with Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-slate-700 mb-6 text-center">
              {selectedCategory?.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {selectedCategory?.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-slate-700">
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
