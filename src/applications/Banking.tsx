import React from 'react';
import ApplicationLayout from './Layout';
import { Building2, Lock, Activity, Database } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Banking Regulations',
    description: 'Comprehensive compliance monitoring for banking regulations.'
  },
  {
    icon: Activity,
    title: 'Transaction Monitoring',
    description: 'Real-time transaction compliance and risk assessment.'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Secure and compliant banking data management solutions.'
  },
  {
    icon: Building2,
    title: 'Institutional Compliance',
    description: 'Enterprise-wide compliance management for financial institutions.'
  }
];

export default function Banking() {
  return (
    <ApplicationLayout
      title="Investment Banking Solutions"
      subtitle="Advanced compliance systems for investment banking operations"
      industry="Investment Banking"
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