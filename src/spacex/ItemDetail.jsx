import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ item, onClose }) => {
  return (
    <div className="item-detail">
      <div className="popover">
        <div className="header">
          <h3>{item.capsule_id}</h3>
          <button onClick={onClose}>X</button>
        </div>
        <div className="popover-body">
          <table>
            <tbody>
              <tr>
                <td>Details:</td>
                <td>{item.details ?? "Not known"}</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>{item.status ?? "Not known"}</td>
              </tr>
              <tr>
                <td>Reuse Count:</td>
                <td>{item.reuse_count ?? "Not known"}</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>{item.type ?? "Not known"}</td>
              </tr>
              <tr>
                <td>Original Launch:</td>
                <td>{item.original_launch ?? "Not known"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
