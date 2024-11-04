import React from 'react';
import { Brain, ArrowLeft, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  title: string;
  subtitle: string;
  industry: string;
  children: React.ReactNode;
}

export default function ApplicationLayout({ title, subtitle, industry, children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              <Link 
                to="/"
                className="group flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Back to ARCS Scientific</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
                <Brain className="relative h-8 w-8 text-blue-600" />
              </div>
              <span className="font-bold text-xl tracking-tight gradient-text">
                ARCS for {industry}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
        <div className="absolute inset-0 opacity-5 grid-pattern animate-grid-scroll" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 animate-pulse-glow" />
          
          {/* Enhanced Floating Icons */}
          <div className="absolute top-1/4 left-1/4 h-16 w-16 text-blue-500/20 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/4 h-12 w-12 text-emerald-500/20 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/3 h-14 w-14 text-blue-500/20 animate-float" style={{ animationDelay: '4s' }} />
          
          {/* Enhanced Glow Effects */}
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/2 w-48 h-48 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4 reveal opacity-0">
              {title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal opacity-0" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
            <ChevronDown className="relative h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {children}
      </main>
    </div>
  );
}