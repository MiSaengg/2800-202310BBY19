// Declare a constant that contains classes to style the form field
const formClasses =
  'block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'

// Label is a functional component that takes id and children as props.
const Label = ({ id, children }) => {
  // htmlFor is used to associate the label with an input element
  return (
    <label
      htmlFor={id}
      className='mb-2 block text-sm font-semibold text-gray-900'
    >
      {children}
    </label>
  )
}

// TextField is a functional component that takes id, label, type, className and other props as arguments.
const TextField = ({ id, label, type = 'text', className, ...props }) => {
  return (
    <div className={className}>
      {/* If label is provided, render Label component */}
      {label && <Label id={id}>{label}</Label>}
      {/* Render an input field with a provided type and other props, and style it with formClasses */}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

// Export TextField component as the default export
export default TextField
