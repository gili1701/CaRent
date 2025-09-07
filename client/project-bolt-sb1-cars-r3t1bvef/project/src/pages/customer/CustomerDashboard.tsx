import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCars } from '../../context/CarContext';

const CustomerDashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { getCarById, getBrandById, getUserOrders } = useCars();
  const navigate = useNavigate();
  
  if (!isAuthenticated || !user) {
    navigate('/login');
    return null;
  }
  
  const userOrders = getUserOrders(user.id);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Dashboard</h1>
        <p className="text-gray-600 mb-8">Welcome back, {user.name}</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium">{user.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{user.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">{user.address}</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
          
          {/* Orders */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">My Orders</h2>
              
              {userOrders.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">You have no orders yet.</p>
                  <button 
                    onClick={() => navigate('/cars')}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                  >
                    Browse Cars
                  </button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Car</th>
                        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userOrders.map(order => {
                        const car = getCarById(order.carId);
                        const brand = car ? getBrandById(car.brandId) : undefined;
                        
                        return (
                          <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-4 text-sm font-medium text-gray-900">#{order.id}</td>
                            <td className="py-4 text-sm text-gray-500">
                              {car && brand ? `${brand.name} ${car.model}` : 'Unknown Car'}
                            </td>
                            <td className="py-4 text-sm text-gray-500">{order.orderDate}</td>
                            <td className="py-4 text-sm">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                order.status === 'completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : order.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </span>
                            </td>
                            <td className="py-4 text-sm text-gray-500">
                              <button 
                                onClick={() => navigate(`/car/${order.carId}`)}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                              >
                                View Car
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;