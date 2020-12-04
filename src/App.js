import './App.css';
import Container from './components/Container';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

function App() {
  return (
    <>
      <Container>
        <Feedback />
      </Container>
      <Container>
        <Statistics />
      </Container>
    </>
  );
}

export default App;
