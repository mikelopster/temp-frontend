import { Link } from 'react-router'

function TailwindV4Features() {
  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8 text-center">
          Tailwind CSS v4 Features
        </h1>
        <p className="text-center text-neutral-600 mb-8">
          This is a placeholder for Tailwind v4 features demo
        </p>
        <div className="text-center">
          <Link 
            to="/"
            className="bg-web-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-web-green-600 transition-all duration-300"
          >
            ← กลับหน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TailwindV4Features
