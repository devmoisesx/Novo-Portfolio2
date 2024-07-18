function Text({ className, children, ...props }) {
    return (
      <p className={`text-txtWhite text-base text-justify ${className}`} {...props}>
        {children}
      </p>
    );
  }
  
  export default Text;
  