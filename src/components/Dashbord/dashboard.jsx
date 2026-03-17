import React from 'react'
import StatusGrid from './statusGrid'  
import ChartSection from './ChartSection'  
export default function Dashboard() {
  return (
    <div className="space-y-6">  
      {/* status grid */}
      <StatusGrid />  
      {/* charts */}
      <ChartSection />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6"> 
<div className="xl:col-span-2 ">

</div>
      </div>
    </div>
  )
}

