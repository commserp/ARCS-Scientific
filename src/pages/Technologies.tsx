import React from 'react';
import { Helmet } from 'react-helmet';
import Technologies from '../components/Technologies';
import { ParticleBackground } from '../components/animations';

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>Core Technologies | ARCS Scientific</title>
        <meta name="description" content="Explore the advanced technologies powering ARCS Scientific's adaptive compliance solutions, from neural processing to quantum-inspired systems." />
        <meta property="og:title" content="Core Technologies | ARCS Scientific" />
        <meta property="og:description" content="Discover our cutting-edge technologies enabling next-generation regulatory compliance through quantum precision and real-time intelligence." />
      </Helmet>

      <ParticleBackground />
      
      {/* Add padding for navbar */}
      <div className="pt-20">
        <Technologies />
      </div>
    </div>
  );
}