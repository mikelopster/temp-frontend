function PageLayout({ children, className = "" }) {
  return (
    <div className={`min-h-screen bg-neutral-50 flex items-center justify-center p-6 ${className}`}>
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        {children}
      </div>
    </div>
  )
}

export default PageLayout
