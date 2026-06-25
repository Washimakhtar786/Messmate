import React, { useEffect, useState } from "react";
import api from "../services/api";

function MessList({
  refresh,
  searchTerm,
  darkMode
}) {

  const [messes, setMesses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [editingId, setEditingId] =
    useState(null);

  const [editForm, setEditForm] =
    useState({
      name: "",
      location: "",
      price: "",
    });

  const fetchMesses = async () => {
    try {

      const res =
        await api.get("/messes");

      setMesses(res.data);

    } catch (err) {

      console.log(err);

    }

    setLoading(false);
  };

  useEffect(() => {

    fetchMesses();

  }, [refresh]);

  const handleDelete = async (id) => {

    try {

      await api.delete(
        `/messes/${id}`
      );

      setMesses(
        messes.filter(
          (mess) =>
            mess.id !== id
        )
      );

    } catch (err) {

      alert("Delete Failed");

    }

  };

  const startEdit = (mess) => {

    setEditingId(mess.id);

    setEditForm({
      name: mess.name,
      location: mess.location,
      price: mess.price,
    });

  };

  const handleUpdate = async (id) => {

    try {

      const res =
        await api.put(
          `/messes/${id}`,
          editForm
        );

      setMesses(
        messes.map((mess) =>
          mess.id === id
            ? res.data
            : mess
        )
      );

      setEditingId(null);

      alert(
        "Mess Updated Successfully"
      );

    } catch (err) {

      alert("Update Failed");

    }

  };

  const filteredMesses =
    messes.filter((mess) =>
      mess.name
        .toLowerCase()
        .includes(
          (searchTerm || "")
            .toLowerCase()
        )
    );

  if (loading) {

    return (

      <div
        className={`
          text-center
          mt-10
          text-lg
          ${
            darkMode
              ? "text-white"
              : "text-black"
          }
        `}
      >
        Loading...
      </div>

    );
  }

  return (

    <div>

      <h2 className="text-3xl font-bold mb-6">
        Mess Listings
      </h2>

      {filteredMesses.length === 0 && (

        <div
          className={`
            rounded-xl
            shadow
            p-8
            text-center

            ${
              darkMode
                ? "bg-slate-800 text-gray-300"
                : "bg-white text-gray-500"
            }
          `}
        >
          No Mess Found
        </div>

      )}

      <div className="grid md:grid-cols-3 gap-6">

        {filteredMesses.map(
          (mess) => (

            <div
              key={mess.id}
              className={`
                rounded-2xl
                shadow-lg
                p-5
                hover:shadow-xl
                transition

                ${
                  darkMode
                    ? "bg-slate-800 text-white"
                    : "bg-white"
                }
              `}
            >

              {editingId ===
              mess.id ? (

                <>

                  <input
                    type="text"
                    value={
                      editForm.name
                    }
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        name:
                          e.target.value,
                      })
                    }
                    className={`
                      w-full
                      border
                      p-2
                      rounded
                      mb-2

                      ${
                        darkMode
                          ? "bg-slate-700 border-slate-600 text-white"
                          : "bg-white"
                      }
                    `}
                  />

                  <input
                    type="text"
                    value={
                      editForm.location
                    }
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        location:
                          e.target.value,
                      })
                    }
                    className={`
                      w-full
                      border
                      p-2
                      rounded
                      mb-2

                      ${
                        darkMode
                          ? "bg-slate-700 border-slate-600 text-white"
                          : "bg-white"
                      }
                    `}
                  />

                  <input
                    type="number"
                    value={
                      editForm.price
                    }
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        price:
                          e.target.value,
                      })
                    }
                    className={`
                      w-full
                      border
                      p-2
                      rounded
                      mb-4

                      ${
                        darkMode
                          ? "bg-slate-700 border-slate-600 text-white"
                          : "bg-white"
                      }
                    `}
                  />

                  <button
                    onClick={() =>
                      handleUpdate(
                        mess.id
                      )
                    }
                    className="
                      w-full
                      bg-green-500
                      hover:bg-green-600
                      text-white
                      py-2
                      rounded-lg
                      mb-2
                    "
                  >
                    Update
                  </button>

                  <button
                    onClick={() =>
                      setEditingId(
                        null
                      )
                    }
                    className="
                      w-full
                      bg-gray-500
                      hover:bg-gray-600
                      text-white
                      py-2
                      rounded-lg
                    "
                  >
                    Cancel
                  </button>

                </>

              ) : (

                <>

                  <h3
                    className={`
                      text-xl
                      font-bold

                      ${
                        darkMode
                          ? "text-white"
                          : "text-gray-800"
                      }
                    `}
                  >
                    {mess.name}
                  </h3>

                  <p
                    className={`
                      mt-2

                      ${
                        darkMode
                          ? "text-gray-300"
                          : "text-gray-600"
                      }
                    `}
                  >
                    📍 {mess.location}
                  </p>

                  <p className="text-green-500 font-bold mt-2 text-lg">
                    ₹{mess.price}
                  </p>

                  <div className="flex gap-2 mt-5">

                    <button
                      onClick={() =>
                        startEdit(
                          mess
                        )
                      }
                      className="
                        flex-1
                        bg-blue-500
                        hover:bg-blue-600
                        text-white
                        py-2
                        rounded-lg
                      "
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          mess.id
                        )
                      }
                      className="
                        flex-1
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        py-2
                        rounded-lg
                      "
                    >
                      Delete
                    </button>

                  </div>

                </>

              )}

            </div>

          )
        )}

      </div>

    </div>

  );
}

export default MessList;