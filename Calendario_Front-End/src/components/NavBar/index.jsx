import { AppBar, Box, Button, Link, Typography } from "@mui/material";



export function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        height: "50px",
        backgroundColor: "#ffffff",
        boxShadow: "none",
        px: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        
        <Typography
          variant="h6"
          sx={{ color: "black", fontWeight: "bold", userSelect: "none" }}
        >
          calendario.com
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Link
            href="#"
            underline="none"
            sx={{ color: "black", textTransform: "none" }}
          >
            Registro
          </Link>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            borderRadius: "20px",
            textTransform: "none",
            px: 3,
            py: 1,
            fontWeight: "bold",
            fontSize: "0.9rem",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          Iniciar Sesión
        </Button>
        </Box>
      </Box>
    </AppBar>
  );
}
