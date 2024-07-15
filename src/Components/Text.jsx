function Text({ className, children, ...props }) {
    return (
      <p className={`text-[16px] ${className}`} {...props}>
        {children}
      </p>
    );
  }
  
  export default Text;
  