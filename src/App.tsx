import React from 'react';
import PricingCard from './components/PricingCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl font-bold text-white mb-10">Pricing</h1>
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-5xl justify-center items-center">
        <PricingCard
          plan="Standard"
          price="100"
          features={["50,000 Requests", "4 contributors", "Up to 3 GB storage space"]}
        />
        <PricingCard
          plan="Pro"
          price="200"
          features={["100,000 Requests", "7 contributors", "Up to 6 GB storage space"]}
          isFeatured
        />
        <PricingCard
          plan="Expert"
          price="500"
          features={["200,000 Requests", "11 contributors", "Up to 10 GB storage space"]}
        />
      </div>
    </div>
  );
}

export default App; 