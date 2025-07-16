import { useState } from 'react'
import './App.css'

function App() {
  const [showFeatures, setShowFeatures] = useState(false)

  if (showFeatures) {
    return <TailwindV4Features />
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Hello World!</h1>
        <p className="text-lg text-neutral-700 leading-relaxed">
          ยินดีต้อนรับสู่ React App ที่สร้างด้วย Vite
        </p>
        <div className="space-y-3">
          <div className="bg-web-green-100 text-web-green-800 px-4 py-3 rounded-md font-medium">
            ⚡ Fast Refresh
          </div>
          <div className="bg-info/10 text-info px-4 py-3 rounded-md font-medium">
            🎯 Modern JavaScript
          </div>
          <div className="bg-web-green-50 text-web-green-700 px-4 py-3 rounded-md font-medium">
            🚀 Optimized Build
          </div>
        </div>
        <div className="pt-4 space-y-4">
          <p className="text-sm text-neutral-500">
            🎉 พร้อมใช้งาน Tailwind CSS v4 แล้ว!
          </p>
          <button 
            onClick={() => setShowFeatures(true)}
            className="w-full bg-web-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-web-green-600 transition-all duration-300 transform hover:scale-105 shadow"
          >
            ดูฟีเจอร์ใหม่ของ Tailwind v4 🚀
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
