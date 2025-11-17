import React from 'react';
import { CheckCircle, Star } from 'lucide-react';

const EquipmentCard = ({ equipment, category }) => {
  // Different layouts based on category
  const renderSpecifications = () => {
    switch (category) {
      case 'panel':
        return (
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Power Output:</span>
              <span className="font-semibold text-gray-900">{equipment.power}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Efficiency:</span>
              <span className="font-semibold text-gray-900">{equipment.efficiency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cell Technology:</span>
              <span className="font-semibold text-gray-900 text-xs">{equipment.cellTechnology}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Warranty:</span>
              <span className="font-semibold text-gray-900">{equipment.performanceWarranty}/{equipment.productWarranty}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Temperature Coef:</span>
              <span className="font-semibold text-gray-900">{equipment.temperatureCoefficient}</span>
            </div>
          </div>
        );

      case 'inverter':
        return (
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Type:</span>
              <span className="font-semibold text-gray-900">{equipment.type}</span>
            </div>
            {equipment.continuousACOutput && (
              <div className="flex justify-between">
                <span className="text-gray-600">Continuous AC:</span>
                <span className="font-semibold text-gray-900">{equipment.continuousACOutput}</span>
              </div>
            )}
            {equipment.continuousPower && (
              <div className="flex justify-between">
                <span className="text-gray-600">Continuous Power:</span>
                <span className="font-semibold text-gray-900">{equipment.continuousPower}</span>
              </div>
            )}
            {equipment.peakACOutput && (
              <div className="flex justify-between">
                <span className="text-gray-600">Peak AC:</span>
                <span className="font-semibold text-gray-900">{equipment.peakACOutput}</span>
              </div>
            )}
            {equipment.peakPower && (
              <div className="flex justify-between">
                <span className="text-gray-600">Peak Power:</span>
                <span className="font-semibold text-gray-900">{equipment.peakPower}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">Efficiency:</span>
              <span className="font-semibold text-gray-900">{equipment.efficiency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Warranty:</span>
              <span className="font-semibold text-gray-900">{equipment.warranty}</span>
            </div>
          </div>
        );

      case 'battery':
        return (
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Capacity:</span>
              <span className="font-semibold text-gray-900">{equipment.capacity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Continuous Power:</span>
              <span className="font-semibold text-gray-900">{equipment.continuousPower}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Peak Power:</span>
              <span className="font-semibold text-gray-900">{equipment.peakPower}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Chemistry:</span>
              <span className="font-semibold text-gray-900 text-xs">{equipment.chemistry}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Efficiency:</span>
              <span className="font-semibold text-gray-900">{equipment.roundTripEfficiency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Warranty:</span>
              <span className="font-semibold text-gray-900">{equipment.warranty}</span>
            </div>
          </div>
        );

      case 'racking':
        return (
          <div className="space-y-2 text-sm">
            {equipment.material && (
              <div className="flex justify-between">
                <span className="text-gray-600">Material:</span>
                <span className="font-semibold text-gray-900">{equipment.material}</span>
              </div>
            )}
            {equipment.finish && (
              <div className="flex justify-between">
                <span className="text-gray-600">Finish:</span>
                <span className="font-semibold text-gray-900">{equipment.finish}</span>
              </div>
            )}
            {equipment.warranty && (
              <div className="flex justify-between">
                <span className="text-gray-600">Warranty:</span>
                <span className="font-semibold text-gray-900">{equipment.warranty}</span>
              </div>
            )}
            {equipment.type && (
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span className="font-semibold text-gray-900">{equipment.type}</span>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200">
      {/* Header with manufacturer and model */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-semibold text-blue-100">{equipment.manufacturer}</p>
            <h3 className="text-xl font-bold mt-1">{equipment.model}</h3>
          </div>
          {equipment.featured && (
            <div className="flex items-center gap-1 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
              <Star className="w-3 h-3" />
              <span>{equipment.badge}</span>
            </div>
          )}
        </div>
      </div>

      {/* Specifications Section */}
      <div className="p-6">
        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Specifications</h4>
          {renderSpecifications()}
        </div>

        {/* Best For Section */}
        {equipment.bestFor && (
          <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="text-sm font-bold text-green-900 uppercase tracking-wide mb-2">Best For</h4>
            <p className="text-sm text-green-800">{equipment.bestFor}</p>
          </div>
        )}

        {/* Features Section */}
        {equipment.features && equipment.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Features</h4>
            <ul className="space-y-2">
              {equipment.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits Section */}
        {equipment.benefits && equipment.benefits.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Benefits</h4>
            <ul className="space-y-2">
              {equipment.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Options Section (for racking) */}
        {equipment.options && equipment.options.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Options</h4>
            <ul className="space-y-2">
              {equipment.options.map((option, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
          Request Quote with This Equipment
        </button>
      </div>
    </div>
  );
};

export default EquipmentCard;
