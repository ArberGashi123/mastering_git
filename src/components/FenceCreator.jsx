const shapes = [{ type: "Circle" }, { type: "Polygon" }];
const FenceCreator = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="font-bold">Add Geofence</div>
      <div className="flex flex-col gap-4">
        <input
          className="bg-[#eeeff2] border rounded-sm p-2 w-[300px] shadow-inner"
          placeholder="Enter geofence name"
        />
        <input
          className="bg-[#eeeff2] border rounded-sm p-2 w-[300px] shadow-inner"
          placeholder="Enter Location"
        />
      </div>
      <div className="flex justify-between gap-4">
        {shapes.map(({ type }) => {
          return (
            <div
              key={type}
              className="w-1/2 bg-[#eeeff2] p-2 rounded-md text-center"
            >
              {type}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FenceCreator;
