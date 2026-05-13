/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

interface LayoutProps {
  children: ReactNode;
  activeView: string;
  onViewChange: (view: string) => void;
}

export function Layout({ children, activeView, onViewChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark-bg font-sans">
      <Sidebar activeView={activeView} onViewChange={onViewChange} />
      <TopBar />
      <main className="ml-64 pt-24 min-h-screen">
        <div className="p-12 max-w-[1400px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
