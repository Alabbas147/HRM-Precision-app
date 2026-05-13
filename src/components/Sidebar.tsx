/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  CalendarClock, 
  LineChart, 
  UserPlus, 
  Headset, 
  LogOut,
  Building2
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

type NavItem = {
  id: string;
  label: string;
  icon: any;
};

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'employees', label: 'Employees', icon: Users },
  { id: 'payroll', label: 'Payroll', icon: CreditCard },
  { id: 'timeoff', label: 'Time Off', icon: CalendarClock },
  { id: 'performance', label: 'Performance', icon: LineChart },
  { id: 'recruitment', label: 'Recruitment', icon: UserPlus },
];

const secondaryNavItems: NavItem[] = [
  { id: 'support', label: 'Support', icon: Headset },
  { id: 'logout', label: 'Logout', icon: LogOut },
];

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 flex flex-col py-10 px-6 bg-dark-bg border-r border-white/5 text-cream z-50">
      <div className="mb-12 px-2 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
          <Building2 className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h1 className="text-xl font-serif tracking-widest uppercase text-cream leading-tight">HRM</h1>
          <p className="text-[9px] uppercase tracking-[0.2em] text-gold font-medium opacity-60">
            Precision
          </p>
        </div>
      </div>

      <nav className="flex-grow flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 text-sm",
              activeView === item.id 
                ? "bg-white/5 text-gold border border-white/5" 
                : "text-cream/40 hover:text-cream hover:bg-white/3"
            )}
          >
            <item.icon className={cn("w-4 h-4 shrink-0", activeView === item.id ? "text-gold" : "opacity-40")} />
            <span className="uppercase tracking-[0.15em] text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-2 pt-8 border-t border-white/5">
        {secondaryNavItems.map((item) => (
          <button
            key={item.id}
            className="flex items-center gap-4 px-4 py-3 text-cream/40 hover:text-cream hover:bg-white/3 transition-all rounded-lg"
          >
            <item.icon className="w-4 h-4 shrink-0 opacity-40" />
            <span className="uppercase tracking-[0.15em] text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
