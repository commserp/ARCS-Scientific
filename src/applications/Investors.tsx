import React, { useState, useEffect } from 'react';
import ApplicationLayout from './Layout';
import { TrendingUp, LineChart, AlertTriangle, Clock, Database, ChevronDown, ChevronUp } from 'lucide-react';

interface Section {
  title: string;
  description: string;
  benefits: string[];
  icon: typeof TrendingUp;
}

const sections: Section[] = [
  {
    title: 'Early-Stage Compliance Assessment',
    description: 'Comprehensive compliance evaluation for early-stage investments.',
    benefits: [
      'Pre-investment due diligence',
      'Projected regulatory pathway analysis',
      'Early risk identification',
      'Compliance readiness scoring'
    ],
    icon: AlertTriangle
  },
  {
    title: 'Market Readiness Analysis',
    description: 'Advanced market entry compliance and scenario analysis.',
    benefits: [
      'Market entry compliance mapping',
      'Regulatory scenario forecasting',
      'Compliance cost projection',
      'Time-to-market optimization'
    ],
    icon: LineChart
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Continuous compliance monitoring and risk assessment.',
    benefits: [
      'Live compliance tracking',
      'Risk level monitoring',
      'Regulatory change alerts',
      'Performance metrics'
    ],
    icon: Clock
  },
  {
    title: 'Data-Driven Insights',
    description: 'Advanced analytics for investment compliance decisions.',
    benefits: [
      'Compliance trend analysis',
      'Predictive risk modeling',
      'Market impact assessment',
      'Investment optimization'
    ],
    icon: Database
  }
];

export default function Investors() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ApplicationLayout
      title="ARCS for Investors"
      subtitle="Advanced compliance intelligence for investment decisions"
      industry="Investment"
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card rounded-2xl hover-glow">
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
                        <section.icon className="relative h-8 w-8 text-blue-600" />
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
                    expandedSection === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {section.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-center space-x-3 text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
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