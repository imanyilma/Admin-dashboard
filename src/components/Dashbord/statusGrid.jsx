import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function statusGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="bg-white/80 dark:bg-slate-900/80  backdrop-blur-xl rounded-2xl p-6
      border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl
      hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group:">
<div className="flex items-center justify-between">
<div className="flex-1">
  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
    iman
  </p>
  <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4"> 
     tsgi
  </p>
  <div className="flex items-center space-x-2">
<ArrowRight className="w-4 h-4"/>
<span >
  sattus change

</span>
<span className="text-sm text-slate-500 dark:text-slate-400">vs last</span>
  </div>
</div>
     </div>
      </div>
    </div>
  )
}
