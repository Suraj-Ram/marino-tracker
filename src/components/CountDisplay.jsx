import { Paper } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function CountDisplay({
    name,
    count,
    subtext
}) {
  return (
    <Paper sx={{p: 2}}>
      <Typography component="h2" variant="h7" color="primary" gutterBottom>
        {name}
      </Typography>
      <Typography component="p" variant="h5">
        {count}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {subtext}
      </Typography>
    </Paper>
  );
}

export default CountDisplay;
