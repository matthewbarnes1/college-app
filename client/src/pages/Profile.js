//* This will come via the DB --> user will have user data attached as a model to their account
//* Fetch user data upon login 

const name = "John Doe";
const Prof = {
    "details": "This is my profile description"

}

function Profile(){ 
    return( 
        <>
        <h1>Welcome back, {name}</h1>
        <h3>Profile Details</h3>
        <h4>{Prof.details} </h4>
        </>
    )
}

export default Profile;