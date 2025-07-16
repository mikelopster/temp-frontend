function FeatureCard({ icon, title, bgColor, textColor }) {
  return (
    <div className={`${bgColor} ${textColor} px-4 py-3 rounded-md font-medium`}>
      {icon} {title}
    </div>
  )
}

export default FeatureCard
