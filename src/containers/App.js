import React, {Component} from 'react';
import SearchBoxComponent from "../components/SearchBoxComponent";
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'

class App extends Component {

    constructor(props) {
        super(props);
        console.log('1');
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchBarChange = (event) => {
        this.setState({searchField: event.target.value})
    };

    render() {
        const {robots, searchField} = this.state;
        const {onSearchBarChange} = this;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if (robots.length === 0) {
            return (
                <div className={'tc'}>
                    <h1>Loading ...</h1>
                </div>
            )
        } else {
            return (
                <div className={'tc'}>
                    <h1 className={'f1'}>Robo Friends</h1>
                    <SearchBoxComponent onSearchBarChange={onSearchBarChange}/>
                    <Scroll>
                        <CardList Robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(robots => this.setState({robots: robots}));
    }
}

export default App