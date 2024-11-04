import React, { useState, useEffect } from 'react';
import ApplicationLayout from './Layout';
import { LandmarkIcon, FileText, Scale, Globe, ChevronDown, ChevronUp, BarChart, Shield } from 'lucide-react';

interface Section {
  title: string;
  description: string;
  benefits: string[];
  icon: typeof LandmarkIcon;
}

const sections: Section[] = [
  {
    title: 'Policy Development Support',
    description: 'Data-driven insights for legislative decision-making.',
    benefits: [
      'Real-time impact analysis',
      'Regulatory gap identification',
      'Policy effectiveness metrics',
      'Compliance forecasting'
    ],
    icon: FileText
  },
  {
    title: 'Legislative Compliance',
    description: 'Comprehensive compliance monitoring for legislative bodies.',
    benefits: [
      'Legislative tracking',
      'Compliance verification',
      'Documentation management',
      'Audit trail maintenance'
    ],
    icon: Scale
  },
  {
    title: 'International Alignment',
    description: 'Cross-border regulatory harmonization support.',
    benefits: [
      'International standards tracking',
      'Regulatory alignment analysis',
      'Global compliance mapping',
      'Policy coordination'
    ],
    icon: Globe
  },
  {
    title: 'Performance Analytics',
    description: 'Advanced analytics for legislative effectiveness.',
    benefits: [
      'Policy impact metrics',
      'Compliance success rates',
      'Implementation tracking',
      'Outcome analysis'
    ],
    icon: BarChart
  }
];

export default function Legislature() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ApplicationLayout
      title="ARCS for Legislature"
      subtitle="Advanced compliance solutions for legislative bodies"
      industry="Legislature"
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