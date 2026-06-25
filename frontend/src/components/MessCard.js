import api from "../services/api";

function MessCard({
  mess,
  onDelete
}) {

  const handleDelete =
    async () => {

    try {

      await api.delete(
        `/messes/${mess.id}`
      );

      onDelete();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      <h3>{mess.name}</h3>

      <p>{mess.location}</p>

      <p>₹{mess.price}</p>

      <button
       onClick={handleDelete}
      >
       Delete
      </button>

    </div>

  );
}

export default MessCard;