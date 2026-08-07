import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

import {
  School,
  Add,
  Grade,
  CalendarMonth,
  LocationOn,
} from "@mui/icons-material";

const dummyEducation = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    specialization: "Artificial Intelligence & Machine Learning",
    college: "Vignan University",
    location: "Andhra Pradesh",
    cgpa: "8.90 CGPA",
    start: "2023",
    end: "2027",
  },
  {
    id: 2,
    degree: "Intermediate",
    specialization: "MPC",
    college: "Narayana Junior College",
    location: "Guntur",
    cgpa: "95%",
    start: "2021",
    end: "2023",
  },
  {
    id: 3,
    degree: "SSC",
    specialization: "State Board",
    college: "Sri Chaitanya School",
    location: "Tenali",
    cgpa: "10 CGPA",
    start: "2019",
    end: "2021",
  },
];

const emptyFormData = {
  degree: "",
  specialization: "",
  college: "",
  location: "",
  cgpa: "",
  start: "",
  end: "",
};

const Education = () => {
  const [education, setEducation] = useState(dummyEducation);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(emptyFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpen = () => {
    setFormData(emptyFormData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddEducation = () => {
    if (!formData.degree || !formData.college) return;

    setEducation((prev) => [
      ...prev,
      {
        ...formData,
        id: Date.now(),
      },
    ]);
    handleClose();
  };

  return (
    <DashboardLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight="bold">
            Education
          </Typography>

          <Typography color="text.secondary" mt={1}>
            Showcase your academic qualifications.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          onClick={handleOpen}
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.5,
          }}
        >
          Add Education
        </Button>
      </Box>

      <Grid container spacing={3}>
        {education.map((item) => (
          <Grid key={item.id} size={{ xs: 12 }}>
            <Card
              sx={{
                borderRadius: 5,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 8,
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Avatar
                      sx={{
                        width: 65,
                        height: 65,
                        bgcolor: "#4F46E5",
                      }}
                    >
                      <School />
                    </Avatar>

                    <Box>
                      <Typography variant="h5" fontWeight="bold">
                        {item.degree}
                      </Typography>

                      <Typography color="primary" fontWeight="bold">
                        {item.specialization}
                      </Typography>

                      <Typography color="text.secondary" sx={{ mt: 1 }}>
                        {item.college}
                      </Typography>
                    </Box>
                  </Box>

                  <Chip
                    icon={<Grade />}
                    label={item.cgpa}
                    color="success"
                  />
                </Box>

                <Grid container spacing={2} sx={{ mt: 3 }}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <CalendarMonth color="action" />
                      <Typography>
                        {item.start} - {item.end}
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <LocationOn color="action" />
                      <Typography>{item.location}</Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                  <Chip
                    label={item.degree}
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    label={item.specialization}
                    variant="outlined"
                  />
                  <Chip
                    label={item.cgpa}
                    color="success"
                    variant="outlined"
                  />
                </Stack>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 2,
                    mt: 4,
                  }}
                >
                  <Button variant="outlined">Edit</Button>
                  <Button variant="contained" color="error">
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {education.length === 0 && (
          <Grid size={{ xs: 12 }}>
            <Card
              sx={{
                borderRadius: 5,
                py: 8,
                textAlign: "center",
              }}
            >
              <CardContent>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 3,
                    bgcolor: "#EEF2FF",
                  }}
                >
                  <School
                    sx={{
                      color: "#4F46E5",
                      fontSize: 45,
                    }}
                  />
                </Avatar>

                <Typography variant="h4" fontWeight="bold">
                  No Education Added
                </Typography>

                <Typography color="text.secondary" mt={1} mb={4}>
                  Add your educational qualifications to strengthen your
                  profile.
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<Add />}
                  size="large"
                  onClick={handleOpen}
                  sx={{
                    borderRadius: 3,
                    px: 4,
                  }}
                >
                  Add Education
                </Button>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>

      {/* Add Education Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Add Education</DialogTitle>

        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="College / University"
                name="college"
                value={formData.college}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Start Year"
                name="start"
                value={formData.start}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="End Year"
                name="end"
                value={formData.end}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="CGPA / Percentage"
                name="cgpa"
                value={formData.cgpa}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddEducation}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
};

export default Education;