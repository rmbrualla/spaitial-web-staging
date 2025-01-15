import React from 'react';
import Particles from '../components/Particles';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <Particles />
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">SpAItial</h1>
            <div className="space-x-6">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#jobs" className="hover:text-primary transition-colors">Jobs</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Stealth startup building{" "}
                <span className="text-primary">3D foundational models</span>
              </h2>
              <p className="text-xl text-gray-300">
                Revolutionizing the future of 3D content generation and understanding
              </p>
            </div>
            <div className="animate-float">
              <img
                src="/lovable-uploads/eda227b1-c21f-47b9-8a64-0ec236dbdff2.png"
                alt="3D Room Visualization"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="relative py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <a
              href="#"
              className="group p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-white transition-colors">
                Senior ML Engineer
              </h3>
              <p className="text-gray-400">
                Join us in building the next generation of 3D AI models
              </p>
            </a>
            <a
              href="#"
              className="group p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2 text-secondary group-hover:text-white transition-colors">
                3D Graphics Engineer
              </h3>
              <p className="text-gray-400">
                Help us push the boundaries of 3D visualization
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;