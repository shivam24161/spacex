import React from "react";
import ItemDetail from "./ItemDetail";
import "./Datagrid.css";

const DataGrid = ({ items }) => {
  const [showPopover, setShowPopover] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const handleClick = (item) => {
    setSelectedItem(item);
    setShowPopover(true);
  };

  return (
    <div className="data-grid">
      {showPopover && (
        <ItemDetail
          item={selectedItem}
          onClose={() => {
            setSelectedItem(null);
            setShowPopover(false);
          }}
        />
      )}
      <div className="grid-container">
        {items.length > 0 ? (
          items.map((item,index) => {
            return (
              <div
                className="grid-item"
                key={index}
                onClick={() => handleClick(item)}
              >
                <h3>{item.capsule_id ?? "Not known"}</h3>
                <p>Type: {item.type ?? "Not known"}</p>
                <p>Status: {item.status ?? "Not known"}</p>
                <p>Orginal Launch: {item.original_launch ?? "Not Known"}</p>
              </div>
            );
          })
        ) : (
          <div className="no-result">No result found!...</div>
        )}
      </div>
    </div>
  );
};
export default DataGrid;
