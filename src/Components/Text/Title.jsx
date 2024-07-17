function Title({ title, children, className }) {
  return title === "1" ? (
    <h1 className={`text-6xl leading-[70px] font-bold ${className}`}>
      {children}
    </h1>
  ) : title === "2" ? (
    <h2 className={`text-txtWhite text-3xl font-medium ${className}`}>{children}</h2>
  ) : title === "3" ? (
    <h3 className={`text-txtWhite text-3xl font-light ${className}`}>{children}</h3>
  ) : title === "4" ? (
    <h4 className={`text-txtWhite text-xl ${className}`}>{children}</h4>
  ) : null;
}

export default Title;
