import React from 'react';

class Repos extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
        .then(response => response.json())
        .then(
            repos => {
                this.setState({
                    repos: repos
                });
            }
        );
    }
    render() {
        if (!this.state.repos) {
            return (
                <div className="repos-page"> 
                    <h3> Projets de USERNAME </h3> 
                </div>
            );
        }
    }
};

export default Repos;