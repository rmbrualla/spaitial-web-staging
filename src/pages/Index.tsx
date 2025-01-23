import React, { useState, useEffect } from 'react';
import Particles from '../components/Particles';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScroll(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <Particles />
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Sp<span className="text-primary">AI</span>tial</h1>
            <div className="space-x-6">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                We are building{" "}
                <span className="text-primary">3D foundational models</span>
              </h2>
              <p className="text-xl text-gray-300">
                Revolutionizing the future of 3D content generation and understanding
              </p>
            </div>
            <div className="animate-float w-full max-w-2xl mx-auto">
              <img
                src="theme.jpg"
                alt="3D Room Visualization"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
        {showScroll && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center animate-bounce">
            <p className="text-sm mb-2">Scroll to explore</p>
            <ChevronDown className="mx-auto" />
          </div>
        )}
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Research Scientist */}
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Research Scientist</h3>
              <p className="text-gray-300 mb-4">
                Join our team to develop cutting-edge 3D foundational models and push the boundaries of AI research.
              </p>
              <a href="mailto:info@spaitial.ai" className="text-primary hover:text-primary/80 transition-colors">
                Apply Now →
              </a>
            </div>

            {/* ML Engineer */}
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
              <h3 className="text-xl font-semibold mb-4">ML Engineer</h3>
              <p className="text-gray-300 mb-4">
                Build and optimize large-scale machine learning systems for 3D content generation and understanding.
              </p>
              <a href="mailto:info@spaitial.ai" className="text-primary hover:text-primary/80 transition-colors">
                Apply Now →
              </a>
            </div>

            {/* Software Engineer */}
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Software Engineer</h3>
              <p className="text-gray-300 mb-4">
                Develop robust infrastructure and tools to support our AI research and development efforts.
              </p>
              <a href="mailto:info@spaitial.ai" className="text-primary hover:text-primary/80 transition-colors">
                Apply Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-12 bg-black/30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl text-gray-300">
            Interested? Reach out to <a href="mailto:info@spaitial.ai" className="text-primary hover:text-primary/80 transition-colors">info@spaitial.ai</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;