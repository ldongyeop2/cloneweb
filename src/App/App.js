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
                    <TOC>
                    </TOC>
                </Header>
            </div>
        );
    }
}


export default App;
