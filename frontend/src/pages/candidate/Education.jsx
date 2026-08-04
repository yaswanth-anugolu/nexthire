import { useState, useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import api from "../../api/axios";

import {
  Typography,
  Card,
  CardContent,
  Button,
  Alert,
  CircularProgress,
  Stack,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  IconButton,
  Divider,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SchoolIcon from "@mui/icons-material/School";

const EDUCATION_LEVELS = [
  { value: "SSC", label: "SSC" },
  { value: "INTERMEDIATE", label: "Intermediate" },
  { value: "DIPLOMA", label: "Diploma" },
  { value: "BACHELORS", label: "Bachelor's" },
  { value: "MASTERS", label: "Master's" },
  { value: "PHD", label: "PhD" },
];

const initialFormState = {
  education_level: "BACHELORS",
  institution_name: "",
  degree: "",
  field_of_study: "",
  grade: "",
  start_date: "",
  end_date: "",
  currently_studying: false,
  description: "",
};

const Education = () => {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchEducations();
  }, []);

  const fetchEducations = async () => {
    try {
      setLoading(true);
      const response = await api.get("education/");
      setEducations(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load education details.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData(initialFormState);
    setError("");
    setOpenModal(true);
  };

  const handleOpenEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      education_level: item.education_level || "BACHELORS",
      institution_name: item.institution_name || "",
      degree: item.degree || "",
      field_of_study: item.field_of_study || "",
      grade: item.grade || "",
      start_date: item.start_date || "",
      end_date: item.end_date || "",
      currently_studying: item.currently_studying || false,
      description: item.description || "",
    });
    setError("");
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingId(null);
    setFormData(initialFormState);
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    const payload = {
      ...formData,
      end_date: formData.currently_studying ? null : formData.end_date || null,
    };

    try {
      if (editingId) {
        await api.patch(`education/${editingId}/`, payload);
        setSuccess("Education record updated successfully.");
      } else {
        await api.post("education/", payload);
        setSuccess("Education record added successfully.");
      }
      handleCloseModal();
      fetchEducations();
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data
          ? JSON.stringify(err.response.data)
          : "Failed to save education record."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this education entry?")) {
      return;
    }

    try {
      await api.delete(`education/${id}/`);
      setSuccess("Education entry deleted successfully.");
      fetchEducations();
    } catch (err) {
      console.error(err);
      setError("Failed to delete education entry.");
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <Box display="flex" justifyContent="center" my={5}>
          <CircularProgress />
        </Box>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" fontWeight="bold">
          Education
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenAdd}
        >
          Add Education
        </Button>
      </Stack>

      {success && (
        <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSuccess("")}>
          {success}
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError("")}>
          {error}
        </Alert>
      )}

      {educations.length === 0 ? (
        <Card sx={{ borderRadius: 3, p: 3, textAlign: "center" }}>
          <Typography color="text.secondary">
            No education history added yet. Click "Add Education" to start.
          </Typography>
        </Card>
      ) : (
        <Stack spacing={2}>
          {educations.map((item) => (
            <Card key={item.id} sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <SchoolIcon color="primary" fontSize="large" />
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {item.institution_name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {item.degree} {item.field_of_study ? `in ${item.field_of_study}` : ""} ({item.education_level})
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.start_date} – {item.currently_studying ? "Present" : item.end_date || "N/A"}
                        {item.grade ? ` | Grade: ${item.grade}` : ""}
                      </Typography>
                    </Box>
                  </Stack>

                  <Box>
                    <IconButton color="primary" onClick={() => handleOpenEdit(item)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Stack>

                {item.description && (
                  <>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body2">{item.description}</Typography>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}

      {/* Add / Edit Dialog Modal */}
      <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle fontWeight="bold">
          {editingId ? "Edit Education" : "Add Education"}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Stack spacing={2.5}>
              <TextField
                select
                label="Education Level"
                name="education_level"
                value={formData.education_level}
                onChange={handleChange}
                required
                fullWidth
              >
                {EDUCATION_LEVELS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                label="Institution Name"
                name="institution_name"
                value={formData.institution_name}
                onChange={handleChange}
                required
                fullWidth
              />

              <TextField
                label="Degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                fullWidth
                placeholder="e.g. B.Tech / B.S."
              />

              <TextField
                label="Field of Study"
                name="field_of_study"
                value={formData.field_of_study}
                onChange={handleChange}
                fullWidth
                placeholder="e.g. Computer Science"
              />

              <TextField
                label="Grade / CGPA"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                fullWidth
              />

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  type="date"
                  label="Start Date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                  fullWidth
                />

                {!formData.currently_studying && (
                  <TextField
                    type="date"
                    label="End Date"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                )}
              </Stack>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.currently_studying}
                    onChange={handleChange}
                    name="currently_studying"
                  />
                }
                label="I am currently studying here"
              />

              <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={handleCloseModal}>Cancel</Button>
            <Button type="submit" variant="contained" disabled={saving}>
              {saving ? <CircularProgress size={24} /> : "Save"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </DashboardLayout>
  );
};

export default Education;