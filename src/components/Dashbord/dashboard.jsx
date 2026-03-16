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
    </div>
  )
}

