import React from 'react';

class Repos extends React.Component {
    constructor() {
        super();
        this.state = {repos: [],};
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
        console.log(this.state.repos)
        console.log('cou')
        if (!this.state.repos) {
            return (
                <div className="repos-page"> 
                    <h3>aucun repos a montrer</h3>
                </div>
            );
        }

        return (
            <div className="repos-page">
                <div className="repos-info">
                    <h2 className="pages-info__name">
                        {this.state.repos.login} 
                        {this.state.repos.name}
                    </h2>
                </div>
            </div>
            
        )}
};

export default Repos;