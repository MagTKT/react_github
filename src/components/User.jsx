import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
        
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

        if (!this.state.user) {
            return (<div className="user-page">LOADING...</div>);
        }

        const user = this.state.user;
        const repos= this.state.repos;

        return (
            <div className="user-page">
                <div className="user-info">
                    <Link className="user-info__text" to={`/user/${user.login}`}>
                        <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h2 className="user-info__title">{user.login} ({user.name})</h2>
                        <p className="user-info__bio">{user.bio}</p>
                    </Link>

                </div>
                
                <div className="repos-page"> 
                    <h3> Projets de {user.name} </h3> 
                    <Link className="user-info__text" to={`/repos/${repos.name}`}></Link>
                    
                </div>
                
            </div>
        );
    }
};

export default User;