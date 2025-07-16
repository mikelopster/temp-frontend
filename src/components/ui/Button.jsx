function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick, 
  className = "",
  type = "button",
  fullWidth = false,
  ...props 
}) {
  const baseClasses = "font-semibold rounded-md transition-all duration-300 transform hover:scale-105 shadow"
  
  const variants = {
    primary: "bg-web-green-500 text-white hover:bg-web-green-600",
    secondary: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-web-green-500 text-web-green-500 hover:bg-web-green-50"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  }
  
  const widthClass = fullWidth ? "w-full" : ""
  
  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`
  
  return (
    <button 
      type={type}
      onClick={onClick} 
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
