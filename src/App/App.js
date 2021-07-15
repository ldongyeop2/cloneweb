import React, {Component} from "react";
import './App.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>WEB</h1>
                world wide web!
            </header>
        );
    }
}

class Aside extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>1. todolist</li>
                    <li>2. calculator</li>
                    <li>3. webpage</li>
                    <li>4. redux</li>
                    <li>5. scss</li>
                </ul>
            </div>
        );
    }
}


class TOC extends Component {
    render() {
        return (
            <nav>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </nav>
        );
    }
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header>
                    <Aside>
                    </Aside>
                    <TOC>
                    </TOC>
                    <TOC>
                    </TOC>
                    <TOC>
                    </TOC>
                </Header>
                <Footer></Footer>
            </div>
        );
    }
}


export default App;
