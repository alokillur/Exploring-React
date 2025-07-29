import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'

function ListUser() {
    const[users, setUsers] = useState([]);

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const url = 'https://jsonplaceholder.typicode.com/users';
    //         const res = await fetch(url);
    //         const users = await res.json();
    //         setUsers(users);
    //     }
    //     fetchUser();
    // },[])

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url).then(res => {setUsers(res.data)}).catch(err => console.log(err))
    }, [])

    return users.map(user => <User key={users.id} user={user} />)

}

export default ListUser
