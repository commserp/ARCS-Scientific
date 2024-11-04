import React from 'react';
import ApplicationLayout from './Layout';
import { Shield, FileCheck, AlertTriangle, BarChart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Risk Assessment Automation',
    description: 'AI-powered risk analysis and compliance monitoring for insurance operations.'
  },
  {
    icon: FileCheck,
    title: 'Claims Compliance',
    description: 'Automated compliance verification for claims processing and management.'
  },
  {
    icon: AlertTriangle,
    title: 'Fraud Detection',
    description: 'Advanced fraud detection with regulatory compliance integration.'
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Real-time compliance analytics and reporting dashboard.'
  }
];

export default function Insurance() {
  return (
    <ApplicationLayout
      title="Insurance Compliance Solutions"
      subtitle="Advanced compliance automation for the insurance industry"
      industry="Insurance"
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