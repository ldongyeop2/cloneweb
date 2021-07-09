import './App.css';
import '/Component/header';
import '/Component/footer';
import '/Component/article';
import '/Component/aside';
import React, {Component} from "react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header></header>
                <aside></aside>
                <main>
                    <article></article>
                    <article></article>
                    <article></article>
                </main>
                <footer></footer>
            </div>
        );
    }
}


export default App;
