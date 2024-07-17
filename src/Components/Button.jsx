function Button({children, className, ...props}) {
  return (
    <>
      <button className={`text-[14px] bg-gradient-to-t from-gBlack to-gGray rounded-full px-3 py-2 ${className}`} {...props}>
        {children}
      </button>
    </>
  );
}

export default Button;
