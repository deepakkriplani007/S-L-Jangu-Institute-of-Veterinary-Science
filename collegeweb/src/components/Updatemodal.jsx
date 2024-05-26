import React, { useState } from "react";
import "./upload.css";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
const Updatemodal = ({ onClose, project, update, setUpdate }) => {
  const host = import.meta.env.VITE_REACT_APP_HOST;

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [formData, setFormData] = useState({
    date: formatDate(project?.date),
    name: project?.name,
    present: project?.present,
    holiday: project?.holiday,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const obj = {
        date: formData.date,
        name: formData.name,
        present: formData.present,
        holiday: formData.holiday,
      };
      // formData.append("photo",file);
      // formData.append("name",authorName);
      console.log(obj);

      const res = await axios.post(`${host}/attend/update/${project._id}`, obj);
      console.log(res);
      if (res.status == 200) {
        onClose(); // Close the modal after submission
        setUpdate(!update);
      }
    } catch (error) {
      console.error("Error :", error);
    }
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="flex justify-end  ">
          <button className="text-2xl hover:text-[#d56b01] " onClick={onClose}>
            <IoMdClose />
          </button>
        </div>

        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="rounded-md bg-blue-100 text-xl border-2 border-blue-500  placeholder-purple-400 focus:text-violet-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </th>
              <td className="px-4 py-4">
                <input
                  placeholder="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-md w-32 bg-blue-100 text-xl border-2 border-blue-500  placeholder-blue-500 focus:text-violet-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
              <td className="px-6 py-4">
                <select
                  className="rounded-md bg-blue-100 text-xl border-2 border-blue-500  placeholder-blue-500 focus:text-violet-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="present"
                  name="present"
                  value={formData.present}
                  onChange={handleChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <select
                  className="rounded-md bg-blue-100 text-xl border-2 border-blue-500  placeholder-blue-500 focus:text-violet-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="holiday"
                  name="holiday"
                  value={formData.holiday}
                  onChange={handleChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </td>
              <td className=" px-6 py-4">
                <button type="submit" className="bg-blue-500">
                  Update
                </button>
              </td>
            </tr>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updatemodal;
