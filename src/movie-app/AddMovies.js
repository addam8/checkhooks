import { useState } from "react";
import Modal from "react-modal";

const AddMovies = ({ addNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [seasons, setSeasons] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handelSubmit = () => {
    let newMovie = {
      name,
      type,
      image,
      date,
      seasons,
      rating,
      description
    };
    addNewMovie(newMovie);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="">Add Movie</button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <label>Date</label>
          <input type="text" onChange={(e) => setDate(e.target.value)} />
          <label>Image</label>
          <input type="text" onChange={(e) => setImage(e.target.value)} />
          <label>Type</label>
          <input type="text" onChange={(e) => setType(e.target.value)} />
          <label>Season</label>
          <input type="text" onChange={(e) => setSeasons(e.target.value)} />
          <label>Rating</label>
          <input type="text" onChange={(e) => setRating(e.target.value)} />
          <label>Movie Summary</label>
          <textarea
            type="text"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <button className="Modal-btn" onClick={handelSubmit}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};
export default AddMovies;
