import './App.css';
import TaskTable from './Components/TaskTable/TaskTable';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const g3 = [
    { day: [3,4,5,6,7,9,11,12,13,14], task: 'Jog' },
    { day: [5,6,7,8,11,12,13, 14], task: 'Stretch' },
  ]
  const soloQ = [
    {day: [13,14], task: 'CoFree'}
  ]
  return (
    <div className="App">
      <h1>G3's February progress</h1>
      <TaskTable tasks={g3}/>
      <br/>
      <h1>Sooraj's February progress</h1>
      <TaskTable tasks={soloQ}/>
    </div>
  );
}

export default App;
