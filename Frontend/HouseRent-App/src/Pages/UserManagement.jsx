import { useState, useEffect } from "react";
import axios from "axios";
import Toast from "../Components/ToastMessage.jsx";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [toast, setToast] = useState({ message: "", type: "" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/getAllUser`
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const handleDelete = async () => {
    if (!userToDelete) return;

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${userToDelete}`
      );
      setUsers((prev) => prev.filter((user) => user._id !== userToDelete));
      setShowModal(false);
      setUserToDelete(null);

      if (response.status === 200) {
        showToast(
          response.data.message || "User Deleted Successfully",
          "success"
        );
        setTimeout(() => {
          window.location.reload();
        }, 1800);
      }
    } catch (error) {
      showToast(response.data.message || "Failed to delete user", "error");
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 1600);
  };

  return (
    <>
      <Toast message={toast.message} type={toast.type} />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {users.length === 0 ? (
                  <div className="px-6 py-12 text-lg text-center text-gray-600">
                    <p>No users found</p>
                  </div>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              User Name
                            </span>
                          </div>
                        </th>
                        <th className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              User Email
                            </span>
                          </div>
                        </th>
                        <th className="px-8 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Action
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr
                          key={user._id}
                          className="bg-white hover:bg-gray-50"
                        >
                          <td className="size-px whitespace-nowrap align-middle">
                            <a className="block p-6">
                              <div className="flex items-center gap-x-3">
                                <div className="grow">
                                  <span className="block text-sm text-gray-800">
                                    {user.userName}
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-middle">
                            <a className="block p-6">
                              <div className="flex items-center gap-x-3">
                                <div className="grow">
                                  <span className="block text-sm text-gray-800">
                                    {user.userEmail}
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>

                          <td className="size-px whitespace-nowrap align-middle">
                            <div className="flex">
                              <div>
                                <button
                                  className="block p-6"
                                  onClick={() => {
                                    setUserToDelete(user._id);
                                    setShowModal(true);
                                  }}
                                >
                                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-red-200 text-red-800 hover:bg-red-300 rounded-full border">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="size-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                      />
                                    </svg>
                                    Delete
                                  </span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-medium mb-4">Confirm Deletion</h2>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete this user? This action is
              irreversible.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserManagement;
