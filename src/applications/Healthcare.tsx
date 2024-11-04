import React from 'react';
import ApplicationLayout from './Layout';
import { Stethoscope, ShieldCheck, Microscope, Clock, FileText } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'HIPAA Compliance Automation',
    description: 'Real-time monitoring and automated compliance checks for HIPAA regulations.',
    benefits: [
      'Real-time HIPAA monitoring',
      'Automated compliance checks',
      'Documentation tracking',
      'Risk assessment'
    ]
  },
  {
    icon: Microscope,
    title: 'Clinical Trial Management',
    description: 'Advanced oversight of clinical trials with regulatory alignment.',
    benefits: [
      'Protocol compliance',
      'Data management',
      'Trial monitoring',
      'Safety tracking'
    ]
  },
  {
    icon: Clock,
    title: 'Real-Time Monitoring',
    description: 'Continuous monitoring of healthcare operations and compliance.',
    benefits: [
      'Patient data protection',
      'Operation monitoring',
      'Compliance tracking',
      'Alert system'
    ]
  },
  {
    icon: FileText,
    title: 'Documentation Management',
    description: 'Automated medical records compliance and documentation tracking.',
    benefits: [
      'Record management',
      'Compliance verification',
      'Audit trails',
      'Access control'
    ]
  }
];

export default function Healthcare() {
  return (
    <ApplicationLayout
      title="Advanced Healthcare Compliance Solutions"
      subtitle="Revolutionizing healthcare compliance with quantum-inspired AI systems"
      industry="Healthcare"
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
              <ul className="mt-4 space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-2 text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </ApplicationLayout>
  );
}