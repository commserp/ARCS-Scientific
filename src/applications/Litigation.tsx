import React, { useState, useEffect } from 'react';
import ApplicationLayout from './Layout';
import { 
  Scale, 
  FileText, 
  AlertTriangle, 
  BarChart, 
  Shield, 
  CheckCircle,
  GitBranch,
  Gavel,
  BookOpen,
  Target
} from 'lucide-react';

interface RiskMapItem {
  label: string;
  risk: number;
  impact: string;
  description: string;
}

const riskMap: RiskMapItem[] = [
  {
    label: 'Regulatory Non-Compliance',
    risk: 0.8,
    impact: 'High',
    description: 'Critical regulatory violations with severe penalties'
  },
  {
    label: 'Documentation Gaps',
    risk: 0.6,
    impact: 'Medium',
    description: 'Incomplete or inconsistent legal documentation'
  },
  {
    label: 'Procedural Errors',
    risk: 0.4,
    impact: 'Medium',
    description: 'Deviations from established legal procedures'
  },
  {
    label: 'Timeline Delays',
    risk: 0.7,
    impact: 'High',
    description: 'Missed deadlines and procedural delays'
  }
];

const caseStudies = [
  {
    title: 'Fortune 500 Compliance Integration',
    metrics: {
      successRate: 98,
      alignmentScore: 95,
      timeReduction: 65,
      costSavings: 45
    },
    description: 'Implemented enterprise-wide compliance monitoring system'
  },
  {
    title: 'Multi-Jurisdiction Case Management',
    metrics: {
      successRate: 94,
      alignmentScore: 92,
      timeReduction: 55,
      costSavings: 40
    },
    description: 'Streamlined cross-border litigation management'
  },
  {
    title: 'Regulatory Investigation Defense',
    metrics: {
      successRate: 96,
      alignmentScore: 97,
      timeReduction: 70,
      costSavings: 50
    },
    description: 'Automated compliance defense system implementation'
  }
];

const features = [
  {
    icon: GitBranch,
    title: 'Predictive Scenario Mapping',
    description: 'AI-driven analysis of potential case outcomes and compliance pathways'
  },
  {
    icon: AlertTriangle,
    title: 'Risk Assessment Engine',
    description: 'Real-time evaluation of compliance risks and mitigation strategies'
  },
  {
    icon: Target,
    title: 'Reviewer Alignment',
    description: 'Automated alignment of multiple reviewers for consistent compliance evaluation'
  },
  {
    icon: Shield,
    title: 'Compliance Shield',
    description: 'Proactive compliance monitoring and violation prevention'
  }
];

export default function Litigation() {
  const [activeRisk, setActiveRisk] = useState<string | null>(null);
  const [animatedMetrics, setAnimatedMetrics] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedMetrics(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ApplicationLayout
      title="ARCS for Litigation"
      subtitle="Advanced compliance intelligence for legal operations"
      industry="Litigation"
    >
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
            alt="Legal Technology"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-blue-900/50" />
        </div>
        <div className="relative py-20 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Next-Generation Legal Compliance
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Quantum-inspired compliance solutions for modern litigation
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                Explore Platform
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-gray-800 rounded-lg hover:bg-white/20 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
            <div className="relative glass-card p-8 rounded-2xl hover-glow">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
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

      {/* Risk Heatmap */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold gradient-text mb-8 text-center">
          Interactive Risk Assessment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {riskMap.map((item) => (
            <div
              key={item.label}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveRisk(item.label)}
              onMouseLeave={() => setActiveRisk(null)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card p-6 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-gray-900">{item.label}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    item.impact === 'High' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.impact}
                  </span>
                </div>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-500"
                    style={{ 
                      width: activeRisk === item.label ? `${item.risk * 100}%` : '0%'
                    }}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-white/50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold gradient-text mb-8 text-center">
          Success Stories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">{study.title}</h4>
                <div className="space-y-4">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="font-semibold">{value}%</span>
                      </div>
                      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-1000"
                          style={{ 
                            width: animatedMetrics ? `${value}%` : '0%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ApplicationLayout>
  );
}