import logo from './logo.svg';
import './App.css';
//@ts-ignore
import PressAndHold from './component/PressAndHold';

function App() {
  return (
    <div className="App">
            <h1>Press and hold Mouse button - React</h1>
        {/* <Test bgColor="bgColor" /> */}
      <PressAndHold />
    </div>
  );
}

export default App;
