import React from 'react'
import { Star } from 'lucide-react'
const TestimonialCard = ({ name, score, review, avatar }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 mx-4 w-80 flex-shrink-0 border border-slate-700">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4 border-2 border-blue-400" />
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-slate-400">Achieved Band {score}</p>
        </div>
      </div>
      <p className="text-slate-300 italic">"{review}"</p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-yellow-400 fill-current" size={20} />
        ))}
      </div>
    </div>
  )
}

export default TestimonialCard