import React, { Component } from 'react'
import * as axios from "axios";
import styles from './Users.module.css';
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

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => { this.props.setUsers(response.data.items) })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        console.log(this.props.pageSize); 
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {
                        pages.map((p,i) => {
                            return <span key={i} className={this.props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
                        }
                        )
                    }
                </div>
                {this.props.users.map((u, i) =>
                    <div key={i}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo} />
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