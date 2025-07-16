function Input({ 
  label, 
  id, 
  type = "text", 
  value, 
  onChange, 
  placeholder, 
  required = false,
  className = "",
  ...props 
}) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-web-green-500 focus:border-transparent ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input
