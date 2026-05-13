/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, TrendingDown, Star, Briefcase, ChevronRight, MoreVertical, Plus, UserPlus, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { StatsCard } from '../components/Common';
import { mockActivities, mockReviews } from '../data/mockData';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12"
    >
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-serif italic font-light text-cream tracking-tight">Dashboard</h2>
          <p className="text-[10px] uppercase tracking-[0.2em] text-cream/40 mt-3 font-medium">Enterprise Management Overview</p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-3 border border-white/10 text-cream/60 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
            Post Vacancy
          </button>
          <button className="px-8 py-3 bg-gold text-dark-bg rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold/90 transition-all flex items-center gap-2">
            <Plus className="w-3.5 h-3.5" />
            Add Entity
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <StatsCard 
          label="Workforce Capital" 
          value="1,284" 
          trend="+12%" 
          trendType="positive"
          icon={Users}
          className="col-span-4"
        />
        <StatsCard 
          label="Attrition Intelligence" 
          value="4.2%" 
          trend="+0.8%" 
          trendType="negative"
          icon={TrendingDown}
          className="col-span-4"
        />
        <div className="col-span-4 flex flex-col gap-6">
          <div className="bg-gold/10 border border-gold/20 text-gold rounded-2xl p-8 flex items-center justify-between shadow-sm backdrop-blur-md">
            <div>
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] opacity-60">Pending Reviews</span>
              <p className="text-3xl font-serif mt-2 italic">28</p>
            </div>
            <Star className="w-8 h-8 opacity-20 fill-current" />
          </div>
          <div className="bg-white/5 border border-white/10 text-cream rounded-2xl p-8 flex items-center justify-between shadow-sm backdrop-blur-md">
            <div>
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] opacity-40">Open Positions</span>
              <p className="text-3xl font-serif mt-2 italic">14</p>
            </div>
            <Briefcase className="w-8 h-8 opacity-20 fill-current" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 bg-white/3 border border-white/5 rounded-2xl p-10 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-serif text-cream italic">Recent Curations</h3>
            <button className="text-[10px] uppercase tracking-[0.2em] text-gold hover:opacity-100 opacity-60 transition-opacity">Audit Logs</button>
          </div>
          <div className="space-y-2">
            {mockActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-6 p-5 hover:bg-white/3 rounded-xl transition-all group border border-transparent hover:border-white/5">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border",
                  activity.type === 'NEW_HIRE' && "bg-blue-400/5 text-blue-400 border-blue-400/10",
                  activity.type === 'REVIEW' && "bg-emerald-400/5 text-emerald-400 border-emerald-400/10",
                  activity.type === 'URGENT' && "bg-red-400/5 text-red-400 border-red-400/10",
                  activity.type === 'SYSTEM' && "bg-cream/5 text-cream border-cream/10",
                )}>
                  {activity.type === 'NEW_HIRE' && <UserPlus className="w-5 h-5" />}
                  {activity.type === 'REVIEW' && <CheckCircle className="w-5 h-5" />}
                  {activity.type === 'URGENT' && <AlertTriangle className="w-5 h-5" />}
                  {activity.type === 'SYSTEM' && <Info className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <p className="text-[13px] text-cream leading-relaxed">
                    <span className="text-gold font-medium uppercase tracking-wider text-[10px] mr-2">{activity.title.split(':')[0]}</span> 
                    {activity.title.split(':')[1]}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-cream/30 mt-2">{activity.timestamp} • {activity.description}</p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-2 rounded-full hover:bg-white/5 transition-all">
                  <MoreVertical className="w-4 h-4 text-cream/20" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4 space-y-8">
          <div className="bg-white/3 border border-white/5 rounded-2xl p-10 backdrop-blur-sm">
            <h3 className="text-xl font-serif text-cream italic mb-8">Weekly Reviews</h3>
            <div className="space-y-3">
              {mockReviews.map((review) => (
                <div key={review.id} className="flex items-center justify-between p-4 bg-white/3 border border-white/5 rounded-xl hover:bg-white/5 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-gold/30 overflow-hidden">
                      <img src={review.avatar} alt={review.employeeName} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[12px] font-medium text-cream group-hover:text-gold transition-colors">{review.employeeName}</span>
                  </div>
                  <span className="text-[9px] text-gold uppercase tracking-widest font-bold">{review.time.split(',')[0]}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 text-[10px] uppercase tracking-[0.2em] text-cream/40 border border-white/5 rounded-full hover:bg-white/5 hover:text-cream transition-all">
              Schedule Interface
            </button>
          </div>

          <div className="bg-dark-bg border border-white/5 text-cream rounded-2xl p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Star className="w-24 h-24 text-gold" />
            </div>
            <h3 className="text-xl font-serif italic mb-6">Concierge</h3>
            <div className="flex flex-col gap-2">
              {['Executive Directive', 'Operational Heritage', 'Security Protocols'].map((link, idx) => (
                <div key={idx}>
                  <a href="#" className="flex items-center justify-between py-3 opacity-40 hover:opacity-100 hover:translate-x-1 transition-all group">
                    <span className="text-[11px] uppercase tracking-[0.15em]">{link}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  </a>
                  {idx < 2 && <div className="h-[1px] bg-white/5"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
