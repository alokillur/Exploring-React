import "./User.css"

const h1Styled = {
    backgroundColor : 'yellow',
    padding: '5px'
}

const User = ({user}) => {
    return (
        <div className="container">
            <h1 style={h1Styled}>Name: {user.name}</h1>
            <h2 style={{background: 'blue', padding:'5px', color:'white'
            }}>Email: {user.email}</h2>
            <p>City: {user.address.city}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}

export default User
