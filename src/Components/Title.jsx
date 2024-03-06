function Title({ title, children, className }) {
  return title === "1" ? (
    <h1 className={`text-[64px] leading-[70px] font-bold ${className}`}>
      {children}
    </h1>
  ) : title === "2" ? (
    <h2 className={`text-[40px] font-bold ${className}`}>{children}</h2>
  ) : title === "3" ? (
    <h3 className={`text-[32px] font-medium ${className}`}>{children}</h3>
  ) : title === "4" ? (
    <h4 className={`text-[20px] ${className}`}>{children}</h4>
  ) : null;
}

export default Title;
