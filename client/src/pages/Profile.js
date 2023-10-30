//* This will come via the DB --> user will have user data attached as a model to their account
//* Fetch user data upon login 
import Layout from "../Layouts/Layout";
const name = "John Doe";
const Prof = {
    "details": "This is my profile description"

}

function Profile(){ 
    return( 
        <>
        <Layout>
        <h1>Welcome back, {name}</h1>
        <h3>Profile Details</h3>
        <h4>{Prof.details} </h4>
        </Layout>
        </>
    )
}

export default Profile;