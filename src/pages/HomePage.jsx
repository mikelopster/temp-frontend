import { useState } from 'react'
import { Link } from 'react-router'
import PageLayout from '../components/layout/PageLayout'
import FeatureCard from '../components/ui/FeatureCard'
import Button from '../components/ui/Button'
import DatePicker from '../components/ui/DatePicker'
import TailwindV4Features from '../components/TailwindV4Features'

function HomePage() {
  const [showFeatures, setShowFeatures] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateChange = (date) => {
    setSelectedDate(date)
    console.log('Selected date:', date)
  }

  if (showFeatures) {
    return <TailwindV4Features />
  }

  return (
    <PageLayout>
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Hello World!</h1>
        <p className="text-lg text-neutral-700 leading-relaxed">
          ยินดีต้อนรับสู่ React App ที่สร้างด้วย Vite
        </p>
        
        <div className="space-y-3">
          <FeatureCard 
            icon="⚡" 
            title="Fast Refresh" 
            bgColor="bg-web-green-100" 
            textColor="text-web-green-800" 
          />
          <FeatureCard 
            icon="🎯" 
            title="Modern JavaScript" 
            bgColor="bg-info/10" 
            textColor="text-info" 
          />
          <FeatureCard 
            icon="🚀" 
            title="Optimized Build" 
            bgColor="bg-web-green-50" 
            textColor="text-web-green-700" 
          />
        </div>
        
        <div className="pt-4 space-y-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-neutral-800">ทดสอบ DatePicker</h3>
            <div className="flex flex-col items-center space-y-2">
              <DatePicker 
                value={selectedDate}
                onChange={handleDateChange}
                placeholder="เลือกวันที่"
              />
              {selectedDate && (
                <p className="text-sm text-neutral-600">
                  วันที่ที่เลือก: {selectedDate.toLocaleDateString('th-TH')}
                </p>
              )}
            </div>
          </div>
          
          <p className="text-sm text-neutral-500">
            🎉 พร้อมใช้งาน Tailwind CSS v4 แล้ว!
          </p>
          
          <Button 
            onClick={() => setShowFeatures(true)}
            fullWidth
            className="mb-3"
          >
            ดูฟีเจอร์ใหม่ของ Tailwind v4 🚀
          </Button>
          
          <Link 
            to="/login"
            className="block"
          >
            <Button variant="secondary" fullWidth>
              เข้าสู่ระบบ 🔐
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default HomePage
