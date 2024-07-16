function Text({ className, children, ...props }) {
    return (
      <p className={`text-base md:text-xl ${className}`} {...props}>
        {children}
      </p>
    );
  }
  
  export default Text;
  