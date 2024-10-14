import { useState } from "react";

const someRecords = [
  { name: "Alice Smith", id: "1" },
  { name: "Bob Johnson", id: "2" },
  { name: "Charlie Brown", id: "3" },
  { name: "Diana Prince", id: "4" },
  { name: "Ethan Hunt", id: "5" },
  { name: "Fiona Apple", id: "6" },
  { name: "George Lucas", id: "7" },
  { name: "Hannah Montana", id: "8" },
  { name: "Ian McKellen", id: "9" },
  { name: "Jane Doe", id: "10" },
];

const Sider = () => {
  const [selectItem, setSelectItem] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Function to select all with a delay animation
  const selectAllWithAnimation = () => {
    let newSelection = [];
    someRecords.forEach((rec, index) => {
      setTimeout(() => {
        newSelection = [...newSelection, rec];
        setSelectItem([...newSelection]);
      }, index * 100); // 200ms delay between each item selection
    });
  };

  // Function to deselect all with animation
  const deselectAllWithAnimation = () => {
    let newSelection = [...selectItem];
    someRecords.forEach((rec, index) => {
      setTimeout(() => {
        newSelection = newSelection.filter((item) => item.id !== rec.id);
        setSelectItem([...newSelection]);
      }, index * 100); // 200ms delay between each item deselection
    });
  };

  // Handle select/deselect all
  const handleSelectAll = () => {
    if (selectAll) {
      deselectAllWithAnimation();
    } else {
      selectAllWithAnimation();
    }
    setSelectAll(!selectAll);
  };

  // Individual item selection
  const selector = (e) => {
    if (e.hasOwnProperty("action") && e.action === "delete") {
      setSelectItem((prev) => prev.filter(({ id }) => id !== e.id));
    } else {
      setSelectItem((prev) => [...prev, e]);
    }
  };

  return (
    <div className="flex flex-col w-1/6 bg-white border-r-2 p-4 gap-4 h-screen">
      {/* Select All / Deselect All */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg">Select All</h2>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAll}
          className="cursor-pointer"
        />
      </div>

      {/* List of items */}
      {someRecords.map((rec) => {
        const isActive = selectItem.some(({ id }) => id === rec.id);

        return (
          <div
            key={rec.id}
            className={`${
              isActive ? "bg-[#3ab47d] text-white" : ""
            } px-4 rounded-md h-[40px] flex items-center hover:bg-[#ecfaf5] hover:text-[#268e57] cursor-pointer transition-all duration-300`}
            onClick={() =>
              selector(isActive ? { ...rec, action: "delete" } : rec)
            }
          >
            {rec.name}
          </div>
        );
      })}
    </div>
  );
};

export default Sider;
