
import React from 'react';

interface TabNavigationProps {
  activeTab: 'create' | 'examples' | 'protection';
  setActiveTab: (tab: 'create' | 'examples' | 'protection') => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => (
  <div className="flex justify-center mb-6">
    <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <button
        className={`px-4 py-2 transition-colors ${activeTab === 'create' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
        onClick={() => setActiveTab('create')}
      >
        Create SMS
      </button>
      <button
        className={`px-4 py-2 transition-colors ${activeTab === 'examples' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
        onClick={() => setActiveTab('examples')}
      >
        Examples
      </button>
      <button
        className={`px-4 py-2 transition-colors ${activeTab === 'protection' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
        onClick={() => setActiveTab('protection')}
      >
        Protection Tips
      </button>
    </div>
  </div>
);
