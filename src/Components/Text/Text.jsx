function Text({ className, children, ...props }) {
    return (
      <p className={`text-txtWhite text-sm md:text-base text-justify ${className}`} {...props}>
        {children}
      </p>
    );
  }
  
  export default Text;
  