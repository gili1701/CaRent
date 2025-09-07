import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCars } from '../context/CarContext';
import CarCard from '../components/ui/CarCard';
import { Search, ShieldCheck, Car, Award, Settings } from 'lucide-react';

const Home: React.FC = () => {
  const { cars } = useCars();
  const navigate = useNavigate();
  
  // Get featured cars (first 4)
  const featuredCars = cars.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Luxury Car" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Your Dream Car With <span className="text-blue-400">AutoDrive</span>
          </h1>
          <p className="text-xl mb-8 max-w-xl">
            Browse our extensive collection of premium vehicles and drive home your perfect match today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/cars')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors"
            >
              Browse Cars
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-md font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-lg shadow-md p-6 -mt-16 relative z-10 border border-blue-100">
            <div className="flex items-center mb-4">
              <Search size={24} className="text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Find Your Perfect Car</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Brand
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">All Brands</option>
                  <option value="1">BMW</option>
                  <option value="2">Mercedes</option>
                  <option value="3">Audi</option>
                  <option value="4">Tesla</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Price Range
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Any Price</option>
                  <option value="1">Under $30,000</option>
                  <option value="2">$30,000 - $50,000</option>
                  <option value="3">$50,000 - $80,000</option>
                  <option value="4">$80,000+</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <button 
                  onClick={() => navigate('/cars')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Cars Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Vehicles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium vehicles, each offering exceptional quality, performance, and value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button 
              onClick={() => navigate('/cars')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-colors"
            >
              View All Cars
            </button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose AutoDrive?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and the highest quality vehicles to our valued customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Car size={32} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
              <p className="text-gray-600">
                Hand-picked premium vehicles from the world's top manufacturers.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <ShieldCheck size={32} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                All our vehicles undergo rigorous quality checks before sale.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Award size={32} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Award-Winning Service</h3>
              <p className="text-gray-600">
                Our customer service has been recognized as the best in the industry.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Settings size={32} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Maintenance Support</h3>
              <p className="text-gray-600">
                Comprehensive after-sales service and maintenance support.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="max-w-2xl mx-auto opacity-80">
              Don't just take our word for it. Here's what our satisfied customers have to say about their AutoDrive experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="mb-4">
                "I found my dream car at AutoDrive. The staff was incredibly helpful and made the buying process so smooth. Couldn't be happier with my new BMW!"
              </p>
              <div className="font-medium">Sarah Johnson</div>
              <div className="text-sm opacity-70">Nashville, TN</div>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="mb-4">
                "The selection at AutoDrive is impressive. I was able to find exactly what I was looking for within my budget. Great experience from start to finish."
              </p>
              <div className="font-medium">Michael Rodriguez</div>
              <div className="text-sm opacity-70">Chicago, IL</div>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="mb-4">
                "As a first-time buyer, I was nervous about the process, but the team at AutoDrive made it easy and stress-free. I love my new Tesla!"
              </p>
              <div className="font-medium">Emily Chen</div>
              <div className="text-sm opacity-70">San Francisco, CA</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;