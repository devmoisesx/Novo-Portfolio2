function Photo({src, alt, className, ...props}) {
    return (
        <div className={`bg-[#D9D9D9] w-[250px] h-[250px] rounded-[35px] rotate-[45deg] ${className}`} {...props}>
          <img src={src} alt={alt} />
        </div>
    );
  }
  
  export default Photo;
  