import { GitBranch } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <Logo />
          <p className="text-sm text-text-secondary mt-3">
            &copy; {new Date().getFullYear()} 陈晓乐团队 · All rights reserved
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/XiaoleC05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary-light transition-colors"
          >
            <GitBranch size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
