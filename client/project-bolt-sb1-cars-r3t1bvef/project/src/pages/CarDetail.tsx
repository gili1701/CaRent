import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCars } from '../context/CarContext';
import { useAuth } from '../context/AuthContext';
import { Calendar, Gauge, Palette, ArrowLeft, ShieldCheck, Car } from 'lucide-react';

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getCarById, getBrandById, placeOrder } = useCars();
  const { user, isAuthenticated } = useAuth();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  const car = getCarById(id || '');
  const brand = car ? getBrandById(car.brandId) : undefined;
  
  if (!car || !brand) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-24">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Car Not Found</h2>
          <p className="text-gray-600 mb-6">
            The car you're looking for doesn't exist or has been removed.
          </p>
          <button 
            onClick={() => navigate('/cars')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Back to Cars
          </button>
        </div>
      </div>
    );
  }

  const handleOrder = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }
    
    placeOrder(user!.id, car.id);
    setOrderPlaced(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate('/cars')}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to cars
        </button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Car Image */}
            <div className="lg:h-full h-64 overflow-hidden relative">
              <img 
                src={car.imageUrl} 
                alt={`${brand.name} ${car.model}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-md font-medium">
                ${car.price.toLocaleString()}
              </div>
            </div>
            
            {/* Car Details */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800">
                {brand.name} {car.model}
              </h1>
              <p className="text-gray-600 mt-1">{car.year}</p>
              
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-md">
                    <Gauge size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Horsepower</p>
                    <p className="font-semibold">{car.horsePower} HP</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-md">
                    <Calendar size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-semibold">{car.year}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-md">
                    <Palette size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Color</p>
                    <p className="font-semibold">{car.color}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-md">
                    <Car size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Brand</p>
                    <p className="font-semibold">{brand.name}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-600">
                  The {brand.name} {car.model} is a premium vehicle offering exceptional performance and luxury. 
                  With its {car.horsePower} HP engine, this {car.color} beauty combines power with elegance, 
                  making it a perfect choice for those who demand the best in automotive excellence.
                </p>
              </div>
              
              {orderPlaced ? (
                <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck size={20} />
                    <h3 className="font-semibold">Order Placed Successfully!</h3>
                  </div>
                  <p>
                    Thank you for your order. Our team will contact you shortly to finalize the details.
                  </p>
                </div>
              ) : (
                <div className="mt-8">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-lg text-gray-600">Price</p>
                      <p className="text-3xl font-bold text-blue-600">${car.price.toLocaleString()}</p>
                    </div>
                    <button 
                      onClick={handleOrder}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    >
                      Order Now
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    * Financing options available. Contact us for more details.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-10 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Premium Sound System',
              'Leather Interior',
              'Navigation System',
              'Bluetooth Connectivity',
              'Backup Camera',
              'Heated Seats',
              'Keyless Entry',
              'Sunroof',
              'Cruise Control'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Login Required</h3>
            <p className="text-gray-600 mb-6">
              You need to be logged in to place an order. Would you like to log in now?
            </p>
            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setShowLoginModal(false)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setShowLoginModal(false);
                  navigate('/login');
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetail;