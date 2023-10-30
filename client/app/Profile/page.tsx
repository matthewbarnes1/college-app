const Test_Profile = { 
    Name: "John Doe",
    Bio: "Hey, I'm John, I love to fish and hike",
    Studying: "Computer Science"
}

export default function Profile(){
    return(
        <>
        <h1>This is the Profile</h1>
        <div className="profile">
            <h3>Name</h3>
            <div className="profile_details">
                <p>{Test_Profile.Bio}</p>
                <p>Studying: {Test_Profile.Studying}</p>
            </div>
            <div className="profile_clubs">
            </div>
        </div>
        </>
)
}

