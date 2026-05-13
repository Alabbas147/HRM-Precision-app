/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Bell, HelpCircle, Settings } from 'lucide-react';

export function TopBar() {
  return (
    <header className="fixed top-0 right-0 left-64 h-24 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 px-10 flex justify-between items-center z-40">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/30" />
          <input
            type="text"
            placeholder="Search records..."
            className="w-full bg-white/3 border border-white/5 rounded-full pl-10 pr-4 py-2.5 text-[11px] uppercase tracking-widest text-cream focus:ring-1 focus:ring-gold/30 transition-all outline-none placeholder:text-cream/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 rounded-full transition-all relative group">
            <Bell className="w-4 h-4 text-cream/40 group-hover:text-gold transition-colors" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-gold rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-white/5 rounded-full transition-all group">
            <HelpCircle className="w-4 h-4 text-cream/40 group-hover:text-gold transition-colors" />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-full transition-all group">
            <Settings className="w-4 h-4 text-cream/40 group-hover:text-gold transition-colors" />
          </button>
        </div>
        
        <div className="h-6 w-[1px] bg-white/10"></div>

        <div className="flex items-center gap-4 cursor-pointer hover:bg-white/3 p-1 pl-3 rounded-full transition-all border border-transparent hover:border-white/5">
          <div className="text-right">
            <p className="text-[11px] font-bold text-cream uppercase tracking-widest leading-none">Alex Rivera</p>
            <p className="text-[9px] uppercase text-gold font-medium tracking-[0.15em] leading-none mt-1 opacity-60">Global Admin</p>
          </div>
          <div className="w-10 h-10 rounded-full border border-gold/30 overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlSvGhOYrWb0RNiZh0jB3Ng0xE2_MfvzpbrUMPzXQsuXJiDg5k6r9k0bIFutNFnUs_RuccVMQKUwWQ5j6xirybuTnD6OGP6cxIyQ4co1zGRBGTi7zIkh3kaCzJBync8jz5hVRtJ7sXygth2BkpJwPsKqZrJ6mUKCd2krNIZ-xK1fbWL7LkhEw7ih9_i-dvjHEgaHBr3Xxz8IOQfeUOUt2cw4V_etWXrczLRPBY5FOJ_3fLIzt5o7PfLfcauZSbctlZsFDkrcfCcL8"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
