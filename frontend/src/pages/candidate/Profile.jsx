import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import api from "../../api/axios";

import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  MenuItem,
  Alert,
  CircularProgress,
} from "@mui/material";

const Profile = () => {

  const [profile, setProfile] = useState({
    headline: "",
    bio: "",
    date_of_birth: "",
    gender: "",
    current_location: "",
    preferred_location: "",
    experience_level: "FRESHER",
    current_job_title: "",
    current_company: "",
    expected_salary: "",
    notice_period: "",
    portfolio_url: "",
    github_url: "",
    linkedin_url: "",
    leetcode_url: "",
  });

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {

    try {

      const response = await api.get(
        "profiles/candidate/"
      );

      setProfile({
        ...response.data,
        date_of_birth:
          response.data.date_of_birth || "",
        expected_salary:
          response.data.expected_salary || "",
      });

    } catch (err) {

      setError(
        "Unable to load profile."
      );

    } finally {

      setLoading(false);

    }

  };

  const handleChange = (event) => {

    setProfile({
      ...profile,
      [event.target.name]:
        event.target.value,
    });

  };

  const handleSave = async () => {
    const payload = {
    ...profile,
    expected_salary: profile.expected_salary 
      ? Number(profile.expected_salary) 
      : null,
    };
    try {

      setSaving(true);

      setSuccess("");

      setError("");

      await api.patch(
        "profiles/candidate/",
        profile
      );

      setSuccess(
        "Profile updated successfully."
      );

    } catch {

      setError(
        "Unable to update profile."
      );

    } finally {

      setSaving(false);

    }

  };
  if (loading) {
    return (
      <DashboardLayout>
        <CircularProgress />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={4}
      >
        My Profile
      </Typography>

      {success && (
        <Alert
          severity="success"
          sx={{ mb: 3 }}
        >
          {success}
        </Alert>
      )}

      {error && (
        <Alert
          severity="error"
          sx={{ mb: 3 }}
        >
          {error}
        </Alert>
      )}

      <Card sx={{ borderRadius: 4 }}>
        <CardContent>

          <Grid container spacing={3}>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Headline"
                name="headline"
                value={profile.headline}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Bio"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                type="date"
                label="Date of Birth"
                name="date_of_birth"
                value={profile.date_of_birth}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                select
                label="Gender"
                name="gender"
                value={profile.gender}
                onChange={handleChange}
              >
                <MenuItem value="">
                  Select
                </MenuItem>

                <MenuItem value="Male">
                  Male
                </MenuItem>

                <MenuItem value="Female">
                  Female
                </MenuItem>

                <MenuItem value="Other">
                  Other
                </MenuItem>
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Current Location"
                name="current_location"
                value={profile.current_location}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Preferred Location"
                name="preferred_location"
                value={profile.preferred_location}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                select
                label="Experience Level"
                name="experience_level"
                value={profile.experience_level}
                onChange={handleChange}
              >
                <MenuItem value="FRESHER">
                  Fresher
                </MenuItem>

                <MenuItem value="JUNIOR">
                  Junior
                </MenuItem>

                <MenuItem value="MID">
                  Mid-Level
                </MenuItem>

                <MenuItem value="SENIOR">
                  Senior
                </MenuItem>
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Current Job Title"
                name="current_job_title"
                value={profile.current_job_title}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Current Company"
                name="current_company"
                value={profile.current_company}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                type="number"
                label="Expected Salary"
                name="expected_salary"
                value={profile.expected_salary}
                onChange={handleChange}
              />
            </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Notice Period"
                name="notice_period"
                value={profile.notice_period}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Portfolio URL"
                name="portfolio_url"
                value={profile.portfolio_url}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="GitHub URL"
                name="github_url"
                value={profile.github_url}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="LinkedIn URL"
                name="linkedin_url"
                value={profile.linkedin_url}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="LeetCode URL"
                name="leetcode_url"
                value={profile.leetcode_url}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleSave}
                disabled={saving}
                sx={{
                  mt: 2,
                  borderRadius: 3,
                  px: 5,
                  py: 1.5,
                }}
              >
                {saving ? (
                  <CircularProgress
                    size={24}
                    color="inherit"
                  />
                ) : (
                  "Save Changes"
                )}
              </Button>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Profile;