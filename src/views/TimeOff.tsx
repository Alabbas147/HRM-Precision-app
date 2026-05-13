/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  CalendarClock, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  MoreVertical, 
  Plus, 
  Download, 
  Filter, 
  AlertCircle,
  Check,
  X,
  Users2
} from 'lucide-react';
import { StatsCard } from '../components/Common';
import { mockEmployees } from '../data/mockData';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function TimeOff() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12"
    >
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-serif italic font-light text-cream tracking-tight">Attendance</h2>
          <p className="text-[10px] uppercase tracking-[0.2em] text-cream/40 mt-3 font-medium">Monitoring Global workforce Availability</p>
        </div>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-4 gap-8">
        <StatsCard label="Active Requests" value="24" trend="+4 from last week" trendType="positive" className="p-8" />
        <StatsCard label="Off-Duty Status" value="12" trend="Personnel Unavailable" trendType="neutral" className="p-8" />
        <StatsCard label="Protocol Deviations" value="03" trendType="negative" icon={AlertCircle} className="p-8" />
        <StatsCard label="Operational Capacity" value="92%" progress={92} className="p-8" />
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Attendance Calendar */}
        <div className="col-span-8 bg-white/3 border border-white/5 rounded-2xl overflow-hidden flex flex-col shadow-lg backdrop-blur-sm">
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <h3 className="text-xl font-serif text-cream italic">Calendar Interface</h3>
              <div className="flex border border-white/10 rounded-full overflow-hidden">
                <button className="px-6 py-2 bg-white/5 text-[9px] font-bold uppercase tracking-widest border-r border-white/10">Month</button>
                <button className="px-6 py-2 hover:bg-white/3 text-[9px] font-bold uppercase tracking-widest border-r border-white/10 transition-all text-cream/40">Week</button>
                <button className="px-6 py-2 hover:bg-white/3 text-[9px] font-bold uppercase tracking-widest transition-all text-cream/40">Day</button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/5 rounded-full transition-all border border-white/5"><ChevronLeft className="w-4 h-4 text-cream/40" /></button>
              <span className="text-[11px] font-bold text-cream uppercase tracking-[0.2em] px-4">October 2024</span>
              <button className="p-2 hover:bg-white/5 rounded-full transition-all border border-white/5"><ChevronRight className="w-4 h-4 text-cream/40" /></button>
            </div>
          </div>

          <div className="grid grid-cols-7 border-b border-white/5 bg-white/3">
            {weekDays.map(day => (
              <div key={day} className="py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-cream/30 text-center">{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 auto-rows-[130px] bg-transparent">
            <div className="p-4 border-r border-b border-white/5 bg-white/2 opacity-10"><span className="text-[10px] font-bold">29</span></div>
            <div className="p-4 border-r border-b border-white/5 bg-white/2 opacity-10"><span className="text-[10px] font-bold">30</span></div>
            <div className="p-4 border-r border-b border-white/5 hover:bg-white/3 transition-all relative">
              <span className="text-[10px] font-bold text-cream/60">1</span>
              <div className="mt-3 flex flex-col gap-1">
                <div className="px-2 py-1 bg-blue-400/10 text-blue-400 text-[8px] font-bold rounded-md border border-blue-400/20 truncate uppercase tracking-widest leading-none">Sick: 2</div>
              </div>
            </div>
            <div className="p-4 border-r border-b border-white/5 hover:bg-white/3 transition-all relative">
              <span className="text-[10px] font-bold text-cream/60">2</span>
            </div>
            <div className="p-4 border-r border-b border-white/5 hover:bg-white/3 transition-all relative">
              <span className="text-[10px] font-bold text-cream/60">3</span>
              <div className="mt-3 flex flex-col gap-1">
                <div className="px-2 py-1 bg-gold/10 text-gold text-[8px] font-bold rounded-md border border-gold/20 truncate uppercase tracking-widest leading-none">Holiday: 4</div>
              </div>
            </div>
            <div className="p-4 border-r border-b border-white/5 hover:bg-white/3 transition-all relative">
              <span className="text-[10px] font-bold text-cream/60">4</span>
            </div>
            <div className="p-4 border-b border-white/5 hover:bg-white/3 transition-all relative">
              <span className="text-[10px] font-bold text-cream/60">5</span>
            </div>
            {/* Today Row */}
            <div className="p-4 border-r border-b border-white/5 hover:bg-white/3 transition-all relative"><span className="text-[10px] font-bold text-cream/60">6</span></div>
            <div className="p-4 border-r border-b border-white/5 bg-gold/5 ring-1 ring-gold/20 ring-inset">
              <span className="text-[10px] font-bold text-gold">7</span>
              <div className="mt-3">
                <div className="px-2 py-1 bg-gold text-dark-bg text-[8px] font-bold rounded-md text-center uppercase tracking-widest leading-none">Present</div>
              </div>
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={cn("p-4 border-b border-white/5 hover:bg-white/3 transition-all relative text-cream/60", i < 4 && "border-r")}><span className="text-[10px] font-bold">{i + 8}</span></div>
            ))}
          </div>
        </div>

        {/* Right Section: Pending Approvals & Capacity */}
        <div className="col-span-4 space-y-8">
          <div className="bg-white/3 border border-white/5 rounded-2xl overflow-hidden flex flex-col shadow-lg backdrop-blur-sm">
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-xl font-serif text-cream italic">Pending Requests</h3>
              <span className="bg-red-400/10 text-red-400 text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-red-400/20">08 New</span>
            </div>
            <div className="divide-y divide-white/5">
              {mockEmployees.slice(0, 3).map((emp) => (
                <div key={emp.id} className="p-6 hover:bg-white/3 transition-all cursor-pointer group">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-gold/30 overflow-hidden shrink-0">
                      <img src={emp.avatar} alt={emp.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="text-[12px] font-medium text-cream group-hover:text-gold transition-colors">{emp.name}</p>
                        <span className="text-[9px] text-cream/30 uppercase tracking-wider">2h ago</span>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-cream/40 mt-1">{emp.status === 'ON LEAVE' ? 'Sick Leave' : 'Annual Cycle'} • 3 Days</p>
                      <div className="flex gap-2 mt-4">
                        <button className="flex-1 py-1.5 bg-gold text-dark-bg rounded-full text-[8px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-gold/90">
                          Authorize
                        </button>
                        <button className="flex-1 py-1.5 border border-white/10 text-cream/40 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 hover:text-cream transition-all">
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="p-5 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-gold hover:bg-white/5 transition-all mt-auto border-t border-white/5">
              View All Directives
            </button>
          </div>

          <div className="bg-white/3 border border-white/5 rounded-2xl p-10 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-serif text-cream italic mb-8">Capacity Insight</h3>
            <div className="space-y-5">
              {[
                { label: 'Operational', count: 118, color: 'bg-emerald-400' },
                { label: 'Off-site', count: 10, color: 'bg-blue-400' },
                { label: 'Unavailable', count: 12, color: 'bg-red-400' },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-1.5 h-1.5 rounded-full", stat.color)}></div>
                    <span className="text-[11px] text-cream/60 uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <span className="text-[11px] font-serif text-gold italic">{stat.count}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 mb-6 text-cream/30">
                <Users2 className="w-4 h-4" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Personnel Cycle: Ending</span>
              </div>
              <div className="flex -space-x-3">
                {mockEmployees.map((emp, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-dark-bg overflow-hidden ring-1 ring-white/5">
                    <img src={emp.avatar} className="w-full h-full object-cover" alt="Elite" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-dark-bg bg-white/5 flex items-center justify-center text-[9px] font-bold text-gold ring-1 ring-white/5">+5</div>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Logs */}
        <div className="col-span-12 bg-white/3 border border-white/5 rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm">
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-xl font-serif text-cream italic">Terminal Intelligence</h3>
            <div className="flex gap-4 text-[10px] uppercase tracking-[0.2em]">
              <button className="flex items-center gap-2 group text-cream/40 hover:text-cream transition-colors">
                <Filter className="w-3.5 h-3.5" /> Criteria
              </button>
              <button className="flex items-center gap-2 group text-cream/40 hover:text-gold transition-colors">
                <Download className="w-3.5 h-3.5" /> Export Data
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/5">
                <tr>
                  <th className="px-10 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Resource</th>
                  <th className="px-10 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Arrival</th>
                  <th className="px-10 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Departure</th>
                  <th className="px-10 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Operational Time</th>
                  <th className="px-10 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Status</th>
                  <th className="px-10 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40 text-right">Vault</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockEmployees.map((emp, i) => (
                  <tr key={emp.id} className="hover:bg-white/3 transition-all group">
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full border border-gold/30 overflow-hidden shrink-0">
                          <img src={emp.avatar} alt={emp.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-[12px] font-medium text-cream group-hover:text-gold transition-colors">{emp.name}</p>
                          <p className="text-[9px] uppercase tracking-widest text-cream/30 mt-1">{emp.department}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-6 text-[11px] font-medium text-cream/60">08:52 AM</td>
                    <td className="px-10 py-6 text-[11px] font-medium text-cream/30 font-serif italic">Pending</td>
                    <td className="px-10 py-6 text-[11px] font-serif text-cream italic">06h 45m</td>
                    <td className="px-10 py-6">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-[0.15em] border transition-all",
                        i === 0 ? "bg-emerald-400/5 text-emerald-400 border-emerald-400/20" : i === 1 ? "bg-red-400/5 text-red-400 border-red-400/20" : "bg-blue-400/5 text-blue-400 border-blue-400/20"
                      )}>
                        {i === 0 ? 'On Standard' : i === 1 ? 'Delayed (15m)' : 'Pre-Arrival'}
                      </span>
                    </td>
                    <td className="px-10 py-6 text-right">
                      <MoreVertical className="w-4 h-4 text-cream/20 cursor-pointer hover:text-cream transition-colors" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <button className="fixed bottom-12 right-12 w-16 h-16 bg-gold text-dark-bg rounded-full shadow-[0_0_50px_rgba(191,161,129,0.2)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all group z-50 ring-4 ring-gold/10">
        <Plus className="w-7 h-7" />
        <span className="absolute right-full mr-6 bg-white/5 backdrop-blur-xl border border-white/10 text-gold px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-6 group-hover:translate-x-0 pointer-events-none">
          Initiate Request
        </span>
      </button>
    </motion.div>
  );
}
