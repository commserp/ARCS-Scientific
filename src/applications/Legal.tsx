import React from 'react';
import ApplicationLayout from './Layout';
import { Scale, FileText, Shield, Search, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Scale,
    title: 'Regulatory Compliance Analysis',
    description: 'AI-powered analysis of legal documents and regulatory requirements.'
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Automated legal document processing and compliance tracking.'
  },
  {
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Real-time risk analysis and compliance monitoring.'
  },
  {
    icon: Search,
    title: 'Legal Research',
    description: 'Advanced legal research and precedent analysis.'
  }
];

export default function Legal() {
  return (
    <ApplicationLayout
      title="Legal & Litigation Compliance Solutions"
      subtitle="Advanced AI systems for legal compliance and risk management"
      industry="Legal"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
            <div className="relative glass-card p-8 rounded-2xl hover-glow">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
                  <feature.icon className="relative h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ApplicationLayout>
  );
}