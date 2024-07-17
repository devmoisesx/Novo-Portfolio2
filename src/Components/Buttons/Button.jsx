function Button({ children, className, ...props }) {
  return (
    <>
      <button
        className={`text-[14px] bg-bgButton rounded-full px-3 py-2 transition duration-500 ease select-none hover:bg-bgButtonHover active:bg-bgButtonActive active:duration-150 focus:outline-none focus:shadow-outline ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
