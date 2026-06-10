import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/projects';

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-card rounded-2xl p-8 group relative overflow-hidden"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${project.color}20, transparent, ${project.color}10)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
          style={{ background: `${project.color}20` }}
        >
          <Code2 size={28} style={{ color: project.color }} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-text-primary mb-3">{project.name}</h3>

        {/* Description */}
        <p className="text-text-secondary mb-6 leading-relaxed">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${project.color}15`,
                color: project.color,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 text-white hover:shadow-lg"
          style={{
            background: project.color,
            boxShadow: `0 0 20px ${project.color}30`,
          }}
        >
          <ExternalLink size={16} />
          查看仓库
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">项目展示</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            我们的两个核心开源项目
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
