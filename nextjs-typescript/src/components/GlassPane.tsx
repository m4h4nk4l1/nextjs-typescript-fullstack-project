import clsx from "clsx";

const GlassPane = ({
  children, className
}: {
  children: React.ReactNode, className: String
}) => {
  return (<div className={clsx('glass rounded-2xl border-solid border-2 border-gray-200', className)}>
    {children}
  </div>
  )
}

export default GlassPane;