import React from 'react';
import { Helmet } from 'react-helmet';
import { Brain, Star, Award, ArrowRight, Globe, Sparkles } from 'lucide-react';
import { FadeInSection } from '../components/animations';

export default function Founder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>James Scott - Founder of ARCS Scientific | Visionary in Regulatory Compliance and Technology</title>
        <meta name="description" content="Learn about James Scott, the visionary founder of ARCS Scientific, a leader in regulatory compliance, think tank initiatives, and technology-driven societal impact." />
        <meta property="og:title" content="James Scott - Founder of ARCS Scientific" />
        <meta property="og:description" content="Pioneering philanthropist and technology expert with over two decades dedicated to advancing solutions in critical infrastructure, technology, and societal resilience." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 animate-pulse-glow" />
          <div className="absolute top-1/4 left-1/4 h-16 w-16 text-blue-500/20 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/4 h-12 w-12 text-emerald-500/20 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/3 h-14 w-14 text-blue-500/20 animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full hover-glow cursor-pointer group mb-8">
              <Brain className="h-5 w-5 text-blue-600 group-hover:text-emerald-500 transition-colors duration-300" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                Founder & Visionary
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">James Scott</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering philanthropist and technology expert with over two decades dedicated to advancing solutions in critical infrastructure, technology, and societal resilience.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Genesis Section */}
        <FadeInSection>
          <div className="glass-card p-8 rounded-2xl hover-glow mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Star className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold gradient-text">Genesis of a Technological Visionary</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Scott's passion for technology was ignited in high school when he joined an advanced STEM program, splitting his day between academic classes and afternoon sessions devoted to robotics. Coming from an abusive household, Scott found support and mentorship in Mr. Bianco, a teacher whose guidance profoundly shaped his path.
            </p>
            <p className="text-gray-600 leading-relaxed">
              During his senior year, a pivotal moment occurred when a recruiter from SGS Thomson Microelectronics (now STMicroelectronics) recognized Scott's potential. SGS Thomson's work with the Department of Defense in aerospace and defense technology introduced Scott to the realms of advanced technology and international defense, laying the groundwork for his future in critical infrastructure technology and strategy.
            </p>
          </div>
        </FadeInSection>

        {/* ARCS Process Section */}
        <FadeInSection>
          <div className="glass-card p-8 rounded-2xl hover-glow mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold gradient-text">The ARCS Process: A Crowning Achievement</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Scott's culmination of expertise is embodied in the Adaptive Regulatory Compliance System (ARCS), a revolutionary framework integrating AI, quantum technology, and data science to adapt regulatory compliance processes in real time. The ARCS process anticipates regulatory changes and dynamically aligns compliance strategies with evolving standards, reducing regulatory risk and accelerating market readiness.
            </p>
          </div>
        </FadeInSection>

        {/* Global Impact Section */}
        <FadeInSection>
          <div className="glass-card p-8 rounded-2xl hover-glow mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold gradient-text">Global Impact & Innovation</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Over the years, Scott's advisory services have expanded across more than 50 countries, helping to establish and support labs, tech startups, institutes, and think tanks worldwide. His initiatives span numerous industries, integrating AI, quantum computing, bioengineering, and advanced analytics to develop adaptive solutions that can evolve with emerging global challenges.
            </p>
          </div>
        </FadeInSection>

        {/* Legacy Section */}
        <FadeInSection>
          <div className="glass-card p-8 rounded-2xl hover-glow">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold gradient-text">A Legacy of Visionary Leadership</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Through these transformative projects, Scott's legacy is one of unparalleled innovation and societal impact. His unique influence mapping and problem-solving architecture have created robust collaboration vehicles, making his institutes and think tanks the gold standard for rapid, solution-oriented public-private partnerships.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Scott's vision and architecture for the next generation of international collaboration have redefined the role of technology in diplomacy, community resilience, and environmental action. His initiatives embody the belief that "the next generation of international diplomacy will be led by problem solvers who utilize intergovernmental-focused institutes & think tanks to blend technological leadership and innovation with incubators, accelerators, and finance."
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}