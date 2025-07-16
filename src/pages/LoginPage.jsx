import { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import DatePicker from '../components/ui/DatePicker'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [birthDate, setBirthDate] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { email, password, birthDate })
    // Add your login logic here
  }

  return (
    <PageLayout>
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 mb-6 text-center">เข้าสู่ระบบ</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            id="email"
            label="อีเมล"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="กรอกอีเมลของคุณ"
            required
          />

          <Input
            type="password"
            id="password"
            label="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="กรอกรหัสผ่านของคุณ"
            required
          />

          <div className="space-y-2">
            <label htmlFor="birthdate" className="block text-sm font-medium text-neutral-700">
              วันเกิด
            </label>
            <DatePicker 
              value={birthDate}
              onChange={(date) => setBirthDate(date)}
              placeholder="เลือกวันเกิดของคุณ"
              className="w-full"
            />
            {birthDate && (
              <p className="text-xs text-neutral-500">
                วันเกิด: {birthDate.toLocaleDateString('th-TH')}
              </p>
            )}
          </div>

          <Button type="submit" fullWidth>
            เข้าสู่ระบบ
          </Button>
        </form>

        <div className="mt-6 text-center">
          <a href="/" className="text-web-green-500 hover:text-web-green-600 text-sm">
            ← กลับหน้าหลัก
          </a>
        </div>
      </div>
    </PageLayout>
  )
}

export default LoginPage
