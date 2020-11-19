import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.state = {repos: []};
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
            return (<div className="user-page"> Aucun nom d'utilisateur </div>);
        }

        const user = this.state.user;

        return (
            <div className="user-page">
                <div className="user-info">
                    <Link className="user-info__text" to={`/user/${user.login}`}>
                        <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h2 className="user-info__title">{user.login} ({user.name})</h2>
                        <p className="user-info-t">{user.bio}</p>
                        <p className="user-info-t">{user.location}</p>
                        <p className="user-info-t">{user.compagny}</p>
                    </Link>
                </div>
                <section>
                    {this.state.repos.map((repo) => (
                        <a href={repo.html_url}>
                            <li>{repo.name}</li>
                        </a>
                    ))}
                </section>
            </div>
        )
    }
};

export default User;
