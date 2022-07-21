import React, { Component } from 'react'
import * as axios from "axios";
import s from './Users.module.css';
import userPhoto from '../../Assets/Images/nophoto.jpg'

export default class UsersC extends Component {
/*    constructor(props) {
        super(props);
        if (this.props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => { this.props.setUsers(response.data.items) })
        }
    }*/

    componentDidMount(){       
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => { this.props.setUsers(response.data.items) })       
    }

    render() {
        return (
            <div>
                {this.props.users.map((u, i) =>
                    <div key={i}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo} />
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                            </div>
                        </span>

                        <span>
                            <span>
                                <div>
                                    {u.name}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {'u.location.country'}
                                </div>
                                <div>
                                    {'u.location.city'}
                                </div>
                            </span>
                        </span>
                    </div>
                    )
                }
            </div>
        )
    }
}