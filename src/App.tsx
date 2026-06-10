import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import ProjectsSection from './components/ProjectsSection';
import TasksSection from './components/TasksSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <TeamSection />
      <ProjectsSection />
      <TasksSection />
      <Footer />
    </div>
  );
}
