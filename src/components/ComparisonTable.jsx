import React from 'react';

const ComparisonTable = ({ title, data, type }) => {
  const renderTableHeaders = () => {
    switch (type) {
      case 'panel':
        return (
          <tr className="bg-blue-600 text-white">
            <th className="px-4 py-3 text-left font-semibold">Model</th>
            <th className="px-4 py-3 text-left font-semibold">Power</th>
            <th className="px-4 py-3 text-left font-semibold">Efficiency</th>
            <th className="px-4 py-3 text-left font-semibold">Warranty</th>
            <th className="px-4 py-3 text-left font-semibold">Best For</th>
          </tr>
        );

      case 'inverter':
        return (
          <tr className="bg-blue-600 text-white">
            <th className="px-4 py-3 text-left font-semibold">Model</th>
            <th className="px-4 py-3 text-left font-semibold">Type</th>
            <th className="px-4 py-3 text-left font-semibold">Power</th>
            <th className="px-4 py-3 text-left font-semibold">Warranty</th>
            <th className="px-4 py-3 text-left font-semibold">Best For</th>
          </tr>
        );

      case 'battery':
        return (
          <tr className="bg-blue-600 text-white">
            <th className="px-4 py-3 text-left font-semibold">Model</th>
            <th className="px-4 py-3 text-left font-semibold">Capacity</th>
            <th className="px-4 py-3 text-left font-semibold">Power</th>
            <th className="px-4 py-3 text-left font-semibold">Warranty</th>
            <th className="px-4 py-3 text-left font-semibold">Best For</th>
          </tr>
        );

      default:
        return null;
    }
  };

  const renderTableRow = (item, index) => {
    switch (type) {
      case 'panel':
        return (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="px-4 py-4 text-sm">
              <div className="font-semibold text-gray-900">{item.manufacturer}</div>
              <div className="text-gray-600">{item.model}</div>
            </td>
            <td className="px-4 py-4 text-sm font-semibold text-gray-900">{item.power}</td>
            <td className="px-4 py-4 text-sm font-semibold text-gray-900">{item.efficiency}</td>
            <td className="px-4 py-4 text-sm text-gray-700">
              {item.performanceWarranty}/{item.productWarranty}
            </td>
            <td className="px-4 py-4 text-sm text-gray-700">{item.bestFor}</td>
          </tr>
        );

      case 'inverter':
        return (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="px-4 py-4 text-sm">
              <div className="font-semibold text-gray-900">{item.manufacturer}</div>
              <div className="text-gray-600">{item.model}</div>
              {item.featured && (
                <span className="inline-block mt-1 bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                  {item.badge}
                </span>
              )}
            </td>
            <td className="px-4 py-4 text-sm font-semibold text-gray-900">{item.type}</td>
            <td className="px-4 py-4 text-sm font-semibold text-gray-900">
              {item.continuousACOutput || item.continuousPower}
            </td>
            <td className="px-4 py-4 text-sm text-gray-700">{item.warranty}</td>
            <td className="px-4 py-4 text-sm text-gray-700">{item.bestFor}</td>
          </tr>
        );

      case 'battery':
        return (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="px-4 py-4 text-sm">
              <div className="font-semibold text-gray-900">{item.manufacturer}</div>
              <div className="text-gray-600">{item.model}</div>
            </td>
            <td className="px-4 py-4 text-sm font-semibold text-gray-900">{item.capacity}</td>
            <td className="px-4 py-4 text-sm font-semibold text-gray-900">{item.continuousPower}</td>
            <td className="px-4 py-4 text-sm text-gray-700">{item.warranty}</td>
            <td className="px-4 py-4 text-sm text-gray-700">{item.bestFor}</td>
          </tr>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            {renderTableHeaders()}
          </thead>
          <tbody>
            {data.map((item, index) => renderTableRow(item, index))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          All equipment comes with manufacturer warranties and proven performance in coastal Georgia climates.
        </p>
      </div>
    </div>
  );
};

export default ComparisonTable;
