//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';

function App() {
    return ( <div className = "App" >
        {/*<Greet name='Diana' heroName="Batman" >
            <button>Don't touch me</button>
        </Greet>
        <Greet name='John' heroName="Superman" />
        <Welcome name='Diana' heroName="Batman">
            <h6>This is heading under me</h6>
        </Welcome>
        <Message></Message>
        <Counter/>*/}
        <ParentComponent></ParentComponent>
        </div>
    );
}

export default App;
