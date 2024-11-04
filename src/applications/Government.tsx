import React, { useState, useEffect } from 'react';
import ApplicationLayout from './Layout';
import { 
  LandmarkIcon, Shield, FileText, Users, Globe, 
  CheckCircle, AlertTriangle, Activity, Zap, Database,
  Lock, Server
} from 'lucide-react';

interface ComplianceMetric {
  label: string;
  value: number;
  target: number;
  status: 'success' | 'warning' | 'danger';
}

const features = [
  {
    icon: LandmarkIcon,
    title: 'Regulatory Oversight',
    description: 'Comprehensive regulatory compliance monitoring for government agencies.',
    details: [
      'Real-time policy tracking',
      'Automated compliance checks',
      'Policy implementation monitoring',
      'Regulatory impact assessment'
    ]
  },
  {
    icon: Shield,
    title: 'Security Compliance',
    description: 'Advanced security protocols and compliance frameworks.',
    details: [
      'Zero-trust architecture',
      'Data encryption standards',
      'Access control systems',
      'Security audit trails'
    ]
  },
  {
    icon: FileText,
    title: 'Documentation Management',
    description: 'Automated documentation and compliance tracking systems.',
    details: [
      'Digital document management',
      'Version control systems',
      'Audit trail maintenance',
      'Automated reporting'
    ]
  },
  {
    icon: Users,
    title: 'Public Service Integration',
    description: 'Streamlined compliance for public service delivery.',
    details: [
      'Service delivery monitoring',
      'Performance tracking',
      'Citizen feedback integration',
      'Service compliance metrics'
    ]
  },
  {
    icon: Globe,
    title: 'International Compliance',
    description: 'Cross-border regulatory compliance and coordination.',
    details: [
      'International standards alignment',
      'Cross-border coordination',
      'Global compliance tracking',
      'International reporting'
    ]
  }
];

const complianceMetrics: ComplianceMetric[] = [
  {
    label: 'Policy Compliance',
    value: 99.2,
    target: 99.5,
    status: 'success'
  },
  {
    label: 'Security Standards',
    value: 98.8,
    target: 99.0,
    status: 'success'
  },
  {
    label: 'Service Delivery',
    value: 95.5,
    target: 97.0,
    status: 'warning'
  },
  {
    label: 'Documentation',
    value: 97.3,
    target: 98.0,
    status: 'warning'
  }
];

const systemStats = [
  {
    icon: Lock,
    label: 'Security Level',
    value: 'Level 4',
    subtext: 'Maximum Security Protocol'
  },
  {
    icon: Database,
    label: 'Data Centers',
    value: '12',
    subtext: 'Globally Distributed'
  },
  {
    icon: Server,
    label: 'Uptime',
    value: '99.999%',
    subtext: 'High Availability'
  }
];

export default function Government() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [showMetrics, setShowMetrics] = useState(false);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMetrics(true);
      setShowStats(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ApplicationLayout
      title="Government Compliance Solutions"
      subtitle="Advanced regulatory compliance for public sector operations"
      industry="Government"
    >
      {/* System Statistics */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {systemStats.map((stat, index) => (
            <div 
              key={index}
              className={`glass-card p-6 rounded-xl hover-glow transform transition-all duration-500 ${
                showStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
                  <stat.icon className="relative h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.subtext}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Metrics Dashboard */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold gradient-text mb-6">Compliance Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {complianceMetrics.map((metric, index) => (
            <div 
              key={index} 
              className="glass-card p-4 rounded-xl hover-glow transform transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-600">{metric.label}</span>
                {metric.status === 'success' ? (
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                ) : metric.status === 'warning' ? (
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                ) : (
                  <Activity className="w-4 h-4 text-red-500" />
                )}
              </div>
              <div className="flex items-end space-x-2">
                <span className="text-2xl font-bold gradient-text">
                  {showMetrics ? metric.value : 0}%
                </span>
                <span className="text-sm text-gray-500">
                  Target: {metric.target}%
                </span>
              </div>
              <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    metric.status === 'success' 
                      ? 'bg-emerald-500' 
                      : metric.status === 'warning'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{ 
                    width: showMetrics ? `${metric.value}%` : '0%'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group relative"
            onMouseEnter={() => setActiveFeature(index)}
            onMouseLeave={() => setActiveFeature(null)}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
            <div className="relative glass-card p-8 rounded-2xl hover-glow transform transition-all duration-300 group-hover:-translate-y-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
                  <feature.icon className="relative h-8 w-8 text-blue-600 transform transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className={`space-y-2 transition-all duration-300 ${
                activeFeature === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
              } overflow-hidden`}>
                {feature.details.map((detail, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ApplicationLayout>
  );
}