

import './App.css';
import Body from './part1/components/Body';
import GroceryDetails from './part1/components/Card';
// import Counter from './part2/hooks/useCounter';
// import List from './part2/hooks/useList';

function App() {
  return (
    <div className="App">
      <Body/>
      <GroceryDetails/>
      {/* <List/>
     <Counter /> */}
    </div>
  );
}

export default App;
