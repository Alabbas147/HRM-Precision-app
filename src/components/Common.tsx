/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface StatsCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendType?: 'positive' | 'negative' | 'neutral';
  icon?: any;
  className?: string;
  progress?: number;
}

export function StatsCard({ label, value, trend, trendType, icon: Icon, className, progress }: StatsCardProps) {
  return (
    <div className={cn("bg-white/3 border border-white/5 p-8 rounded-2xl flex flex-col justify-between backdrop-blur-sm", className)}>
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream/40">{label}</span>
        {Icon && <Icon className={cn("w-4 h-4", trendType === 'negative' ? 'text-red-400' : 'text-gold')} />}
      </div>
      
      <div className="mt-10">
        <span className="text-4xl font-serif tracking-tight text-cream">{value}</span>
        {trend && (
          <div className="flex items-center gap-2 mt-3">
            <span className={cn(
              "text-[10px] font-medium uppercase tracking-wider", 
              trendType === 'positive' ? 'text-emerald-400' : trendType === 'negative' ? 'text-red-400' : 'text-cream/40'
            )}>
              {trend}
            </span>
          </div>
        )}
        
        {progress !== undefined && (
          <div className="mt-5 h-[1px] w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gold transition-all duration-1000" 
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const isLeave = status.toUpperCase() === 'ON LEAVE';
  const isActive = status.toUpperCase() === 'ACTIVE';
  
  return (
    <span className={cn(
      "px-4 py-1.5 rounded-full text-[9px] font-medium uppercase tracking-[0.15em] border transition-all",
      isActive && "bg-emerald-400/5 text-emerald-400 border-emerald-400/20",
      isLeave && "bg-cream/5 text-cream/60 border-cream/10",
      !isActive && !isLeave && "bg-white/3 text-cream/40 border-white/5",
      className
    )}>
      {status}
    </span>
  );
}
