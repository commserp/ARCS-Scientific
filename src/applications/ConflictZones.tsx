import React, { useState, useEffect } from 'react';
import ApplicationLayout from './Layout';
import { 
  Shield, 
  AlertTriangle, 
  Globe, 
  Activity,
  ChevronDown,
  ChevronUp,
  Radio,
  Map,
  Zap
} from 'lucide-react';

interface Section {
  title: string;
  description: string;
  benefits: string[];
  icon: typeof Shield;
  metrics?: {
    label: string;
    value: string;
    trend: 'up' | 'down';
  }[];
}

const sections: Section[] = [
  {
    title: 'Risk Assessment',
    description: 'Real-time risk monitoring and assessment in conflict zones.',
    benefits: [
      'Threat detection',
      'Risk scoring',
      'Area monitoring',
      'Safety alerts'
    ],
    icon: AlertTriangle,
    metrics: [
      { label: 'Detection Rate', value: '99.9%', trend: 'up' },
      { label: 'Response Time', value: '<1ms', trend: 'down' },
      { label: 'Coverage', value: '100%', trend: 'up' }
    ]
  },
  {
    title: 'Safety Protocols',
    description: 'Advanced safety protocol management and compliance.',
    benefits: [
      'Protocol automation',
      'Safety verification',
      'Emergency response',
      'Compliance tracking'
    ],
    icon: Shield,
    metrics: [
      { label: 'Protocol Rate', value: '98.5%', trend: 'up' },
      { label: 'Response', value: '<5ms', trend: 'down' },
      { label: 'Compliance', value: '100%', trend: 'up' }
    ]
  },
  {
    title: 'Resource Management',
    description: 'Efficient resource allocation and distribution tracking.',
    benefits: [
      'Resource tracking',
      'Distribution planning',
      'Supply monitoring',
      'Efficiency optimization'
    ],
    icon: Activity,
    metrics: [
      { label: 'Efficiency', value: '97.8%', trend: 'up' },
      { label: 'Accuracy', value: '99.9%', trend: 'up' },
      { label: 'Coverage', value: '100%', trend: 'up' }
    ]
  },
  {
    title: 'Communication Systems',
    description: 'Secure communication and coordination networks.',
    benefits: [
      'Secure channels',
      'Real-time updates',
      'Network resilience',
      'Data protection'
    ],
    icon: Radio,
    metrics: [
      { label: 'Uptime', value: '99.99%', trend: 'up' },
      { label: 'Latency', value: '<10ms', trend: 'down' },
      { label: 'Security', value: '100%', trend: 'up' }
    ]
  }
];

export default function ConflictZones() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      setShowMetrics(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ApplicationLayout
      title="ARCS Applied to Conflict Zones"
      subtitle="Advanced compliance solutions for high-risk environments"
      industry="Crisis Management"
    >
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`transform transition-all duration-500 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card rounded-2xl hover-glow">
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
                        <section.icon className="relative h-8 w-8 text-red-600" />
                      </div>
                      <h3 className="text-xl font-semibold gradient-text">
                        {section.title}
                      </h3>
                    </div>
                    {expandedSection === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <p className="mt-2 text-gray-600">
                    {section.description}
                  </p>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedSection === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    {/* Metrics Grid */}
                    {section.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {section.metrics.map((metric, i) => (
                          <div 
                            key={i}
                            className={`text-center transition-all duration-500 transform ${
                              showMetrics && expandedSection === index
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-4 opacity-0'
                            }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            <div className="text-2xl font-bold gradient-text">
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-500">
                              {metric.label}
                            </div>
                            <div className={`text-xs ${
                              metric.trend === 'up' ? 'text-emerald-500' : 'text-blue-500'
                            }`}>
                              {metric.trend === 'up' ? '↑' : '↓'}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Benefits List */}
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {section.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-center space-x-3 text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ApplicationLayout>
  );
}