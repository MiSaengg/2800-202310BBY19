const Button = ({ onClick, text, type }) => {
  return (
    <button
      className="block 
      border 
      border-gray-400
      rounded-lg
      hover:shadow-md
      hover:border-opacity-0
      transform
      transition-all duration-200
      text-white-700
      text-sm
      text-center
      font-mono
      py-1
      px-3"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
