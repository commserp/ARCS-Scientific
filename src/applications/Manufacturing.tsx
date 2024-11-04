import React, { useState } from 'react';
import ApplicationLayout from './Layout';
import { Factory, Cog, BarChart, Shield, GitBranch, Activity, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

interface ComplianceMetric {
  label: string;
  value: number;
  target: number;
  status: 'success' | 'warning' | 'danger';
}

const features = [
  {
    icon: Factory,
    title: 'Manufacturing Compliance',
    description: 'Real-time monitoring and compliance management for manufacturing processes.',
    details: [
      'Automated regulatory tracking',
      'Process compliance verification',
      'Real-time monitoring systems',
      'Compliance audit trails'
    ]
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Automated compliance checks and process optimization.',
    details: [
      'Workflow automation',
      'Smart process controls',
      'Compliance checkpoints',
      'Automated reporting'
    ]
  },
  {
    icon: BarChart,
    title: 'Performance Analytics',
    description: 'Advanced analytics for compliance and efficiency metrics.',
    details: [
      'Real-time metrics tracking',
      'Predictive analytics',
      'Compliance dashboards',
      'Performance insights'
    ]
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Integrated quality control and compliance verification.',
    details: [
      'Quality control automation',
      'Compliance verification',
      'Defect detection',
      'Quality metrics'
    ]
  },
  {
    icon: GitBranch,
    title: 'Supply Chain Compliance',
    description: 'End-to-end supply chain compliance tracking and verification.',
    details: [
      'Supplier compliance tracking',
      'Chain of custody verification',
      'Regulatory alignment',
      'Compliance documentation'
    ]
  }
];

const complianceMetrics: ComplianceMetric[] = [
  {
    label: 'Process Compliance',
    value: 98.5,
    target: 99,
    status: 'success'
  },
  {
    label: 'Quality Standards',
    value: 96.7,
    target: 98,
    status: 'warning'
  },
  {
    label: 'Safety Compliance',
    value: 99.9,
    target: 99.9,
    status: 'success'
  },
  {
    label: 'Documentation',
    value: 94.3,
    target: 97,
    status: 'warning'
  }
];

export default function Manufacturing() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [showMetrics, setShowMetrics] = useState(false);

  // Animation trigger for metrics
  React.useEffect(() => {
    const timer = setTimeout(() => setShowMetrics(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ApplicationLayout
      title="Manufacturing Compliance Solutions"
      subtitle="Advanced regulatory compliance for manufacturing operations"
      industry="Manufacturing"
    >
      {/* Compliance Metrics Dashboard */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold gradient-text mb-6">Compliance Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {complianceMetrics.map((metric, index) => (
            <div key={index} className="glass-card p-4 rounded-xl hover-glow">
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