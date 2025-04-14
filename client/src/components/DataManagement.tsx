// src/components/DataManagement.tsx
import React, { useState } from "react";
import {
  useGetAllDataQuery,
  useCreateDataMutation,
  useUpdateDataMutation,
  useDeleteDataMutation,
} from "../store/services/dataApi";
import { useGetProfileQuery } from "../store/services/authApi";

const DataManagement: React.FC = () => {
  const { data: profile } = useGetProfileQuery();
  const { data: allData, isLoading } = useGetAllDataQuery();
  const [createData] = useCreateDataMutation();
  const [updateData] = useUpdateDataMutation();
  const [deleteData] = useDeleteDataMutation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const isSuperadmin = profile?.role === "superadmin";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateData({
          id: editingId,
          data: { title, description },
        }).unwrap();
        setEditingId(null);
      } else {
        await createData({ title, description }).unwrap();
      }
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error("Failed to save data:", err);
    }
  };

  const handleEdit = (data: {
    _id: string;
    title: string;
    description: string;
  }) => {
    setTitle(data.title);
    setDescription(data.description);
    setEditingId(data._id);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteData(id).unwrap();
    } catch (err) {
      console.error("Failed to delete data:", err);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setEditingId(null);
  };

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="data-management-container">
      <h2>Data Management</h2>

      {isSuperadmin && (
        <div className="data-form">
          <h3>{editingId ? "Edit Data" : "Create New Data"}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit">{editingId ? "Update" : "Create"}</button>
              {editingId && (
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      <div className="data-list">
        <h3>All Data</h3>
        {allData && allData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                {isSuperadmin && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {allData.map((item) => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  {isSuperadmin && (
                    <td>
                      <button onClick={() => handleEdit(item)}>Edit</button>
                      <button onClick={() => handleDelete(item._id)}>
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </div>
  );
};

export default DataManagement;
