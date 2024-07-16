function Line({ direction, className }) {
  return direction === "vertical" ? (
    <div className={`w-[1px] h-full mb-[15px] bg-white opacity-[30%] ${className}`}></div>
  ) : (
    <div className={`w-full h-[1px] mt-4 mb-7 bg-white ${className}`}></div>
  );
}

export default Line;
