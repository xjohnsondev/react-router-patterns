import { useState } from "react";

const NewColorForm = ({addColor}) => {
  const INITIAL_STATE = {
    color: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData.color);
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
        id='color'
        type="text"
        name="color"
        placeholder="Color"
        value={formData.color}
        onChange={handleChange}
        />
        <button>Submit</button>
    </form>
  )
};

export default NewColorForm;
