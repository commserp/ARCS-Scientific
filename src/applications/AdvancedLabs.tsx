import React, { useState, useEffect } from 'react';
import ApplicationLayout from './Layout';
import { 
  Microscope, 
  Shield, 
  Database, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Beaker,
  Activity,
  Dna
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
}

const features: Feature[] = [
  {
    icon: Microscope,
    title: 'Advanced Research Compliance',
    description: 'Real-time monitoring and adaptation of research protocols to ensure compliance with evolving standards.',
    gradient: 'from-blue-500 to-blue-600',
    stats: [
      { label: 'Compliance Rate', value: '99.9%' },
      { label: 'Update Speed', value: '<1min' },
      { label: 'Protocol Coverage', value: '100%' }
    ]
  },
  {
    icon: Shield,
    title: 'Data Security Protocol',
    description: 'Enterprise-grade security measures protecting sensitive research data and intellectual property.',
    gradient: 'from-emerald-500 to-emerald-600',
    stats: [
      { label: 'Security Score', value: '98/100' },
      { label: 'Encryption', value: '256-bit' },
      { label: 'Access Control', value: 'Multi-layer' }
    ]
  },
  {
    icon: Database,
    title: 'Research Data Management',
    description: 'Comprehensive data lifecycle management ensuring compliance and accessibility.',
    gradient: 'from-blue-600 to-emerald-500',
    stats: [
      { label: 'Data Integrity', value: '100%' },
      { label: 'Recovery Time', value: '<5min' },
      { label: 'Storage Efficiency', value: '99.5%' }
    ]
  },
  {
    icon: Search,
    title: 'Automated Compliance Scanning',
    description: 'Continuous monitoring of research activities for regulatory alignment.',
    gradient: 'from-emerald-600 to-blue-500',
    stats: [
      { label: 'Scan Frequency', value: '24/7' },
      { label: 'Alert Speed', value: 'Real-time' },
      { label: 'Accuracy', value: '99.99%' }
    ]
  }
];

export default function AdvancedLabs() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [animatedMetrics, setAnimatedMetrics] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedMetrics(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <ApplicationLayout
      title="ARCS for Advanced Labs"
      subtitle="Empowering research excellence through adaptive compliance and security"
      industry="Advanced Research"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur`} />
            <div className="relative glass-card p-8 rounded-2xl hover-glow">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300`} />
                  <feature.icon className="relative h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {feature.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-lg font-semibold gradient-text">
                      {animatedMetrics ? stat.value : '...'} 
                    </div>
                    <div className="text-sm text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Research Protocol Compliance Section */}
      <div className="mb-16">
        <div 
          className="glass-card p-6 rounded-2xl cursor-pointer"
          onClick={() => toggleSection('protocols')}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold gradient-text">Research Protocol Compliance</h3>
            {expandedSection === 'protocols' ? (
              <ChevronUp className="h-6 w-6 text-blue-600" />
            ) : (
              <ChevronDown className="h-6 w-6 text-blue-600" />
            )}
          </div>
          
          {expandedSection === 'protocols' && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Protocol Management</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Beaker className="h-5 w-5 text-blue-500" />
                    <span>Automated Protocol Validation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-500" />
                    <span>Real-time Compliance Monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Dna className="h-5 w-5 text-blue-500" />
                    <span>Genetic Research Guidelines</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Safety Standards</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    <span>Biosafety Protocols</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-blue-500" />
                    <span>Data Security Standards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Search className="h-5 w-5 text-blue-500" />
                    <span>Compliance Auditing</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </ApplicationLayout>
  );
}