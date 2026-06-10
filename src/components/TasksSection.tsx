import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { taskGroups } from '../data/tasks';

function TaskGroupCard({ group, index }: { group: typeof taskGroups[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-6 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary-light transition-colors">
              {group.title}
            </h3>
            {group.score && (
              <span className="text-sm text-accent">{group.score}</span>
            )}
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} className="text-text-secondary" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-0 border-t border-dark-border/50">
              {group.items.length === 1 && group.items[0].name.includes('全员协作') ? (
                <p className="text-text-secondary py-4 leading-relaxed">{group.items[0].name}</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-dark-bg/50"
                    >
                      <span className="text-sm text-text-primary">{item.name}</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary-light shrink-0 ml-2">
                        {item.person}
                        {item.size ? ` · ${item.size}` : ''}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TasksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="tasks" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">任务分工</span>
          </h2>
          <p className="text-text-secondary text-lg">
            团队协作，各司其职
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {taskGroups.map((group, index) => (
            <TaskGroupCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
