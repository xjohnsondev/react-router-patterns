import { useState } from "react";
import NewColorForm from "./NewColorForm";
import './ColorNav.css'

const ColorNav = ({addColor}) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="nav">
      <h2>Welcome to the Color Factory</h2>
      {showForm ? (
        <div>
        <NewColorForm addColor={addColor} />
        </div>
      ) : (
        <div>
          <h3 onClick={() => setShowForm(true)} className="form-open">Add a color</h3>
        </div>
      )}
    </div>
  );
};

export default ColorNav;
