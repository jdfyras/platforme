import './App.css';
import TabF from './components/Famille/famille';
import Produit from './components/Produit/Produit';
import TabSF from './components/SousFamille/SousFamille';
function App() {
  return (
    <div className="App">
      <TabSF/>
      <TabF/>
      <Produit/>
    </div>
  );
}

export default App;
