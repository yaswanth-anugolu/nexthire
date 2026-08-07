import { Box } from "@mui/material";

import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";

const AdminLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#F8FAFC",
        }}
      >
        <Navbar />

        <Box
          sx={{
            p: 4,
            flex: 1,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;