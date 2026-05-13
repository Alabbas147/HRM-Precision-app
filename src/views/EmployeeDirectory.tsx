/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Users, 
  Plus, 
  Filter, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  User, 
  Building, 
  Clock, 
  Briefcase 
} from 'lucide-react';
import { StatsCard, StatusBadge } from '../components/Common';
import { mockEmployees } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Employee } from '../types';

export function EmployeeDirectory() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(mockEmployees[1]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex gap-10 h-[calc(100vh-180px)]"
    >
      {/* Left Side: Directory List & Filters */}
      <div className="flex-grow flex flex-col gap-10 overflow-y-auto pr-4 custom-scrollbar">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-5xl font-serif italic font-light text-cream tracking-tight">Directory</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cream/40 mt-3 font-medium">Managing 248 Enterprise Assets</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-cream/60 hover:bg-white/5 transition-all">
              <Filter className="w-3.5 h-3.5" />
              Criteria
            </button>
            <button className="flex items-center gap-3 px-6 py-3 bg-gold text-dark-bg rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold/90 transition-all">
              <Plus className="w-3.5 h-3.5" />
              Onboard
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-8">
          <StatsCard label="Active Status" value={242} progress={92} className="p-8" />
          <StatsCard label="Temporary Leave" value={6} progress={15} trendType="neutral" className="p-8" />
          <StatsCard label="Acquisition Rate" value={12} trend="↑ 8% Growth" trendType="positive" className="p-8" />
          <StatsCard label="Capital Velocity" value="2.4%" trend="↓ 0.2% Efficiency" trendType="negative" className="p-8" />
        </div>

        {/* Table Container */}
        <div className="bg-white/3 border border-white/5 rounded-2xl overflow-hidden flex flex-col shadow-lg backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white/5 border-b border-white/5">
              <tr>
                <th className="px-8 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Resource</th>
                <th className="px-8 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Division</th>
                <th className="px-8 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Designation</th>
                <th className="px-8 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Status</th>
                <th className="px-8 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40 text-right">Reference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockEmployees.map((emp) => (
                <tr 
                  key={emp.id} 
                  onClick={() => setSelectedEmployee(emp)}
                  className={cn(
                    "hover:bg-white/3 transition-all cursor-pointer group",
                    selectedEmployee?.id === emp.id && "bg-white/5"
                  )}
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-gold/30 overflow-hidden shrink-0">
                        <img src={emp.avatar} alt={emp.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[13px] font-medium text-cream">{emp.name}</p>
                        <p className="text-[10px] text-cream/30 font-medium tracking-tight">{emp.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-[11px] text-cream/60 uppercase tracking-widest">{emp.department}</td>
                  <td className="px-8 py-5 text-[12px] text-cream italic font-serif tracking-wide">{emp.role}</td>
                  <td className="px-8 py-5">
                    <StatusBadge status={emp.status} />
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className={cn(
                      "p-2 rounded-full hover:bg-white/10 transition-all",
                      selectedEmployee?.id === emp.id ? "opacity-100 text-gold" : "opacity-0 group-hover:opacity-100 text-cream/20"
                    )}>
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="px-8 py-5 bg-white/3 flex justify-between items-center border-t border-white/5">
            <p className="text-[10px] text-cream/30 uppercase tracking-[0.15em]">Ref: 4 of 248 Entities</p>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center border border-white/5 rounded-full hover:bg-white/5 transition-all disabled:opacity-10" disabled>
                <ChevronLeft className="w-4 h-4 text-cream/40" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-gold text-dark-bg rounded-full text-[10px] font-bold">I</button>
              <button className="w-8 h-8 flex items-center justify-center border border-white/5 rounded-full hover:bg-white/5 text-[10px] text-cream/40 transition-all">II</button>
              <button className="w-8 h-8 flex items-center justify-center border border-white/5 rounded-full hover:bg-white/5 transition-all">
                <ChevronRight className="w-4 h-4 text-cream/40" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar: Employee Profile Detail */}
      <AnimatePresence mode="wait">
        {selectedEmployee && (
          <motion.aside 
            key={selectedEmployee.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-[420px] bg-dark-bg border border-white/5 rounded-3xl flex flex-col overflow-hidden shadow-2xl h-full backdrop-blur-xl"
          >
            <div className="relative h-40 group">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Banner" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent"></div>
              <button 
                onClick={() => setSelectedEmployee(null)}
                className="absolute top-6 right-6 bg-white/5 hover:bg-white/10 p-2.5 rounded-full backdrop-blur-xl text-cream/40 hover:text-cream transition-all border border-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="px-10 -mt-16 relative z-10 flex flex-col items-start">
              <div className="w-32 h-32 rounded-full border-4 border-dark-bg shadow-2xl overflow-hidden bg-dark-bg">
                <img 
                  src={selectedEmployee.avatar} 
                  className="w-full h-full object-cover" 
                  alt={selectedEmployee.name} 
                />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-serif italic text-cream leading-tight">{selectedEmployee.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold mt-2 font-medium">{selectedEmployee.role} • <span className="opacity-60">{selectedEmployee.department}</span></p>
              </div>
              <div className="flex gap-4 mt-10 w-full">
                <button className="flex-1 py-3.5 bg-gold text-dark-bg rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold/90 transition-all">Direct Message</button>
                <button className="flex-1 py-3.5 border border-white/10 text-cream/60 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all">Modify Record</button>
              </div>
            </div>

            <div className="mt-12 px-10 pb-10 overflow-y-auto custom-scrollbar flex-grow">
              <div className="space-y-12">
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-cream/30 mb-6 pb-2 border-b border-white/5">Communications</p>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="p-2.5 bg-white/3 rounded-full border border-white/5 group-hover:border-gold/30 transition-all">
                        <Mail className="w-4 h-4 text-cream/40 group-hover:text-gold" />
                      </div>
                      <span className="text-xs text-cream/60 group-hover:text-cream transition-colors">{selectedEmployee.email}</span>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="p-2.5 bg-white/3 rounded-full border border-white/5 group-hover:border-gold/30 transition-all">
                        <Phone className="w-4 h-4 text-cream/40 group-hover:text-gold" />
                      </div>
                      <span className="text-xs text-cream/60 group-hover:text-cream transition-colors">{selectedEmployee.phone}</span>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="p-2.5 bg-white/3 rounded-full border border-white/5 group-hover:border-gold/30 transition-all">
                        <MapPin className="w-4 h-4 text-cream/40 group-hover:text-gold" />
                      </div>
                      <span className="text-xs text-cream/60 group-hover:text-cream transition-colors">{selectedEmployee.location}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-cream/30 mb-6 pb-2 border-b border-white/5">Corporate Heritage</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Induction', value: selectedEmployee.joinedDate, icon: Calendar },
                      { label: 'Type', value: selectedEmployee.employmentType, icon: Briefcase },
                      { label: 'Director', value: selectedEmployee.manager, icon: User },
                      { label: 'Environment', value: selectedEmployee.workModel, icon: Building },
                    ].map((item, idx) => (
                      <div key={idx} className="p-5 bg-white/3 border border-white/5 rounded-2xl flex flex-col gap-2 hover:bg-white/5 transition-all group cursor-default">
                        <p className="text-[9px] uppercase font-bold text-cream/30 tracking-widest">{item.label}</p>
                        <p className="text-[11px] font-medium text-cream group-hover:text-gold transition-colors">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-cream/30 mb-6 pb-2 border-b border-white/5">Operational History</p>
                  <div className="space-y-8 border-l border-white/10 ml-3 pl-8">
                    <div className="relative">
                      <div className="absolute -left-[37px] top-1 w-2.5 h-2.5 rounded-full bg-gold border border-dark-bg ring-4 ring-gold/10"></div>
                      <p className="text-[12px] font-medium text-cream italic font-serif">Assessment Finalized</p>
                      <p className="text-[10px] uppercase tracking-wider text-cream/30 mt-2">Oct 12 • Performance Q3</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[37px] top-1 w-2.5 h-2.5 rounded-full bg-cream/20 border border-dark-bg ring-4 ring-white/5"></div>
                      <p className="text-[12px] font-medium text-cream/60 italic font-serif">Authorized Leave</p>
                      <p className="text-[10px] uppercase tracking-wider text-cream/20 mt-2">Sep 28 • Annual Cycle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
