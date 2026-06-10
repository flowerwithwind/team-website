import { motion } from 'framer-motion';
import { teamMembers } from '../data/team';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function MemberCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl font-bold text-white">{member.avatar}</span>
        </div>

        {/* Name & Role */}
        <h3 className="text-xl font-bold text-text-primary mb-1">{member.name}</h3>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary-light mb-3">
          {member.role}
        </span>
        <p className="text-sm text-text-secondary mb-4">{member.title}</p>

        {/* Task tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {member.tasks.map((task) => (
            <span
              key={task}
              className="px-2.5 py-1 rounded-md bg-dark-border/50 text-xs text-text-secondary"
            >
              {task}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="team" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">团队介绍</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            五名成员各有所长，通力协作打造智能化产品
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
