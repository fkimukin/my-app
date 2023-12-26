
import './App.css';
import { Grid, Paper } from '@mui/material';

function App() {
  return (
    <div className="App">
    <Grid container >
  <Grid item xs={3}>
  <Paper
                sx={{
                  height: 1000,
                  width: 300,
                  backgroundColor: '#fff',
                }}
              />
  </Grid>
  <Grid item xs={10}>
  <Paper
                sx={{
                  height: 1000,
                  width: '100%',
                  backgroundColor: '#1A2027',
                }}
              />
  </Grid>
</Grid>
    </div>
  );
}

export default App;
