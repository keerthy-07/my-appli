import "./profile.css";

function Profile(props) {
  return (
    <>
      <div className="cover"></div>

      <div className="profile">
        <div className="left">
          <img src={props.image} alt="img" />
          <h2>{props.name}</h2>

          <div className="stats">
            {/* <p>Posts: {props.posts}</p>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p> */}
            <h4>{props.subtitle}</h4>
          </div>

          <p className="about">{props.about}</p>

          <h3 onClick={()=>{window.open("/resume.pdf");}}>VIEW CV </h3>
        </div>

        
          
          {/* <button className="download-btn" 
          onClick={()=>{window.open("/resume.pdf");}}>View.CV</button>
           */}
      </div>
    </>
  );
}

export default Profile;
