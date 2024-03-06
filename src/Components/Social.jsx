function Social({children, className, ...props}) {
    return (
        <div className={`inline-block bg-gradient-to-t from-gBlack to-gGray rounded-full py-2 px-4 ${className}`} {...props}>
          {children}
        </div>
    );
  }
  
  export default Social;
  