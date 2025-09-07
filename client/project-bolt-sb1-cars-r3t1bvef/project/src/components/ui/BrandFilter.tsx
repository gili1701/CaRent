import React from 'react';
import { useCars } from '../../context/CarContext';

const BrandFilter: React.FC = () => {
  const { brands, filterByBrand, resetFilter } = useCars();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const brandId = e.target.value;
    if (brandId === 'all') {
      resetFilter();
    } else {
      filterByBrand(brandId);
    }
  };

  return (
    <div className="mb-6">
      <label htmlFor="brand-filter" className="block text-gray-700 font-medium mb-2">
        Filter by Brand
      </label>
      <select
        id="brand-filter"
        onChange={handleChange}
        className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue="all"
      >
        <option value="all">All Brands</option>
        {brands.map(brand => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandFilter;