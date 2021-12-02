import React from 'react'

type Props = {
	icon: React.ReactElement, 
	title: string, 
	value: number
}

export default function StatsCard({ icon, title, value }: Props) {
  return (
    <div className="box-border p-8 rounded-lg bg-gray-200 shadow-lg bg-opacity-60 backdrop-blur-lg flex items-center justify-around w-64">
      {icon}
      <div>
        <h2 className="text-sm text-gray-500">{title}</h2>
        <p className="font-bold tracking-widest text-gray-800 mt-4">{value}</p>
      </div>
    </div>
  );
}
