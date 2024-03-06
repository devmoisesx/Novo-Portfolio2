function Line({ direction }) {
  return direction === "vertical" ? (
    <div className="w-[1px] h-full mb-[15px] bg-white opacity-[30%]"></div>
  ) : (
    <div className="w-full h-[1px] mb-[15px] bg-white"></div>
  );
}

export default Line;
