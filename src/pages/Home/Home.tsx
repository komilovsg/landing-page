import React from 'react';
import Hero from '../../components/Hero/Hero';
import Dashboard from '../../components/Dashboard/Dashboard';
import Features from '../../components/Features/Features';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Dashboard />
      <Features />
    </div>
  );
};

export default Home; 