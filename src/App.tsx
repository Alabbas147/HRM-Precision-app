/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './views/Dashboard';
import { EmployeeDirectory } from './views/EmployeeDirectory';
import { TimeOff } from './views/TimeOff';
import { Performance } from './views/Performance';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'employees':
        return <EmployeeDirectory />;
      case 'timeoff':
        return <TimeOff />;
      case 'performance':
        return <Performance />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full min-h-[600px] text-cream/20">
            <h3 className="text-4xl font-serif italic mb-4">Curation Pending</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">This operational sector is currently being finalized.</p>
          </div>
        );
    }
  };

  return (
    <Layout activeView={activeView} onViewChange={setActiveView}>
      <AnimatePresence mode="wait">
        {renderView()}
      </AnimatePresence>
    </Layout>
  );
}
