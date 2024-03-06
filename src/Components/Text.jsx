function Text({ className, children, ...props }) {
    return (
      <p className={`text-[15px] ${className}`} {...props}>
        {children}
      </p>
    );
  }
  
  export default Text;
  