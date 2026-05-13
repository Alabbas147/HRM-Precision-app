/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  LineChart, 
  ChevronRight, 
  Plus, 
  Filter, 
  MoreVertical, 
  Star, 
  Calendar,
  FileText,
  Zap,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { mockGoals, mockReviews } from '../data/mockData';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function Performance() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12"
    >
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-serif italic font-light text-cream tracking-tight">Performance</h2>
          <p className="text-[10px] uppercase tracking-[0.2em] text-cream/40 mt-3 font-medium">Curating Excellence and Professional Heritage</p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-3 border border-white/10 text-cream/60 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
            Export Intelligence
          </button>
          <button className="px-8 py-3 bg-gold text-dark-bg rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold/90 transition-all flex items-center gap-2">
            <Plus className="w-3.5 h-3.5" />
            Initiate Cycle
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Goal Progress */}
        <div className="col-span-8 bg-white/3 border border-white/5 p-10 rounded-2xl shadow-lg backdrop-blur-sm">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-xl font-serif text-cream italic">Strategic Objectives</h3>
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gold px-4 py-1.5 bg-gold/5 border border-gold/10 rounded-full italic">Q3 2024 Cycle</span>
          </div>
          <div className="space-y-10">
            {mockGoals.map((goal) => (
              <div key={goal.id} className="space-y-4 group">
                <div className="flex justify-between items-end">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-cream/60 group-hover:text-gold transition-colors">{goal.label}</span>
                  <span className="text-xs font-serif italic text-gold">{goal.progress}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-[1px] overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={cn("h-full", goal.color.replace('bg-', 'bg-').includes('slate') ? 'bg-white/20' : 'bg-gold')}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Reviews */}
        <div className="col-span-4 bg-white/3 border border-white/5 p-10 rounded-2xl shadow-lg backdrop-blur-sm flex flex-col">
          <div className="flex items-center gap-4 mb-10">
            <Calendar className="w-5 h-5 text-gold" />
            <h3 className="text-xl font-serif text-cream italic">Upcoming Reviews</h3>
          </div>
          <div className="flex-grow space-y-3">
            {mockReviews.map((review) => (
              <div key={review.id} className="flex gap-5 p-5 bg-white/3 border border-white/5 hover:border-gold/30 rounded-2xl transition-all cursor-pointer group">
                <div className="flex flex-col items-center justify-center min-w-[54px] bg-dark-bg border border-white/10 rounded-xl py-2 shadow-inner ring-1 ring-white/5">
                  <span className="text-[8px] font-bold text-cream/30 uppercase tracking-[0.2em] leading-none">OCT</span>
                  <span className="text-xl font-serif italic text-gold leading-none mt-1.5">{review.date.split(' ')[1]}</span>
                </div>
                <div className="flex-grow">
                  <p className="text-[12px] font-bold text-cream uppercase tracking-widest group-hover:text-gold transition-colors">{review.employeeName}</p>
                  <p className="text-[10px] text-cream/30 uppercase tracking-wider mt-1.5 font-medium">{review.type}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 text-[9px] uppercase tracking-[0.25em] text-gold font-bold flex items-center justify-center gap-3 hover:translate-x-1 transition-all group">
            Full Curation Schedule
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Active Feedback Cycles */}
        <div className="col-span-12 bg-white/3 border border-white/5 rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm">
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <h3 className="text-xl font-serif text-cream italic">Operational Cycles</h3>
              <span className="bg-red-400/10 text-red-400 text-[8px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-red-400/20">02 Critical</span>
            </div>
            <button className="p-2.5 border border-white/10 rounded-full hover:bg-white/5 transition-all">
              <Filter className="w-4 h-4 text-cream/40" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/5">
                <tr>
                  <th className="px-10 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Cycle Identifier</th>
                  <th className="px-10 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">State</th>
                  <th className="px-10 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Completion</th>
                  <th className="px-10 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Participants</th>
                  <th className="px-10 py-5 text-[9px] font-medium uppercase tracking-[0.2em] text-cream/40">Deadline</th>
                  <th className="px-10 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/3 transition-all group">
                  <td className="px-10 py-7">
                    <p className="text-[13px] font-medium text-cream italic font-serif">360 Leadership Portfolio 2024</p>
                    <p className="text-[10px] text-cream/30 uppercase tracking-widest mt-1.5 font-medium">Global Management Heritage</p>
                  </td>
                  <td className="px-10 py-7">
                    <span className="px-4 py-1.5 rounded-full bg-gold/5 text-gold border border-gold/20 text-[9px] font-bold uppercase tracking-widest italic">Operational</span>
                  </td>
                  <td className="px-10 py-7">
                    <div className="flex items-center gap-5">
                      <div className="w-32 bg-white/5 rounded-full h-[1px] overflow-hidden">
                        <div className="bg-gold h-full" style={{ width: '88%' }}></div>
                      </div>
                      <span className="text-[11px] font-serif italic text-gold">88%</span>
                    </div>
                  </td>
                  <td className="px-10 py-7">
                    <div className="flex -space-x-3">
                      <div className="w-7 h-7 rounded-full border-2 border-dark-bg bg-white/10 ring-1 ring-white/5" />
                      <div className="w-7 h-7 rounded-full border-2 border-dark-bg bg-white/20 ring-1 ring-white/5" />
                      <div className="w-7 h-7 rounded-full border-2 border-dark-bg bg-white/30 ring-1 ring-white/5" />
                      <div className="w-7 h-7 rounded-full bg-dark-bg flex items-center justify-center text-[8px] font-bold text-gold border-2 border-white/5">+12</div>
                    </div>
                  </td>
                  <td className="px-10 py-7 text-[11px] font-medium text-cream/60">Oct 30, 2024</td>
                  <td className="px-10 py-7 text-right">
                    <MoreVertical className="w-4 h-4 text-cream/20 group-hover:text-cream transition-colors cursor-pointer" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Cards */}
        <div className="col-span-12 grid grid-cols-3 gap-8">
          <div className="bg-white/3 border border-white/5 p-10 rounded-3xl flex flex-col items-start shadow-lg group hover:border-gold/30 transition-all backdrop-blur-sm">
            <div className="flex items-center justify-between w-full mb-8">
              <div className="p-4 bg-white/5 text-gold border border-white/10 rounded-2xl group-hover:bg-gold group-hover:text-dark-bg transition-all">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-cream/20">Audit: 2h ago</span>
            </div>
            <h3 className="text-xl font-serif italic text-cream mb-3">Portfolio Packets</h3>
            <p className="text-[12px] text-cream/40 leading-relaxed mb-10 font-medium">Strategic documentation curated for the semi-annual board directorship meeting.</p>
            <div className="flex items-center justify-between w-full mt-auto">
              <span className="text-[11px] font-serif text-gold italic">12 Files</span>
              <button className="text-[9px] uppercase tracking-[0.2em] text-gold font-bold hover:underline">Catalogue</button>
            </div>
          </div>

          <div className="bg-white/3 border border-white/5 p-10 rounded-3xl flex flex-col items-start shadow-lg group hover:border-gold/30 transition-all backdrop-blur-sm">
            <div className="flex items-center justify-between w-full mb-8">
              <div className="p-4 bg-gold/10 text-gold border border-gold/20 rounded-2xl group-hover:bg-gold group-hover:text-dark-bg transition-all">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-cream/20">Peak Output</span>
            </div>
            <h3 className="text-xl font-serif italic text-cream mb-3">Elite Performers</h3>
            <p className="text-[12px] text-cream/40 leading-relaxed mb-10 font-medium">Personnel exceeding core operational benchmarks by a minimum of 15%.</p>
            <div className="flex items-center justify-between w-full mt-auto">
              <span className="text-[11px] font-serif text-gold italic">8 Entities</span>
              <button className="text-[9px] uppercase tracking-[0.2em] text-gold font-bold hover:underline">Analysis</button>
            </div>
          </div>

          <div className="bg-white/3 border border-white/5 p-10 rounded-3xl flex flex-col items-start shadow-lg group hover:border-gold/30 transition-all backdrop-blur-sm">
            <div className="flex items-center justify-between w-full mb-8">
              <div className="p-4 bg-red-400/10 text-red-400 border border-red-400/20 rounded-2xl group-hover:bg-red-400 group-hover:text-dark-bg transition-all">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-cream/20">Urgent Protocol</span>
            </div>
            <h3 className="text-xl font-serif italic text-cream mb-3">Protocol Tracking</h3>
            <p className="text-[12px] text-cream/40 leading-relaxed mb-10 font-medium">Monitoring personnel integration plans for at-risk enterprise assets.</p>
            <div className="flex items-center justify-between w-full mt-auto">
              <span className="text-[11px] font-serif text-gold italic">3 Active</span>
              <button className="text-[9px] uppercase tracking-[0.2em] text-gold font-bold hover:underline">Intervene</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
