const Collection = () => {
  return (
    <div className="grid grid-cols-4 gap-1 h-[300px] p-1">
      <div className="col-span-1 bg-yellow-300 hover:bg-pink-600"></div>
      <div className="col-span-1 bg-blue-700"></div>
      <div className="col-span-2 bg-red-700"></div>
    </div>
  );
};

export default Collection;
