import avatar1 from "../../avatar1.png";
import a1 from "../../components/a1.webp";
import b2 from "../../components/b2.png";
import c3 from "../../components/c3.jpg";
import Head from "../../components/header/head";
import Box from "../../components/gridbox/box";
import Foot from "../../components/footer/foot";
import Discoverbox from "../../components/gridbox/dicovercard";
// import Form from "../../components/form/form";
// import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import "../../App.css";
import Profile from "../../components/profile/profile";
import "./home.css";
import Form from "../../components/form/form";
import Socialbar from "../../components/socialbar/socialbar";
import About from "../../components/aboutme/aboutme";




function Home() {
  const boxes = [
    {
      img: a1,
      title: "Instagram Clone",
      description:
        "A full-featured instagram clone with authentication and follow system",
    },
    {
      img: b2,
      title: "Portfolio",
      description:
        "My personal portfolio website built with React and Tailwind CSS.",
    },

    {
      img: c3,
      title: "Weather App",
      description:
        "Shows live weather using API and turn it into a useful analysis..",
    },
  ];

  return (
    <>
      <nav className="head">
        <Head
          logo="MR_JACK"
          home="HOME"
          about="ABOUT"
          contact="CONTACT"
          docs="DOCS"
        />
      </nav>
      
       <Socialbar/>
      <Profile
        image={avatar1}
        name="KEERTHY VASAN"
        // posts="323"
        // followers="3.5k"
        // following="260"
        subtitle="| Python FullStack Developer"
        about="I build modern,responsive and user-friendly web applications using React, Django and other technologies."
      />
      <br></br>

      <About />
      <h1 className="check">Featured Projects</h1>
      <Grid container spacing={4}>
        {boxes.map((box,index) => (
          <Grid 
          key={index}
          size={{ lg: 3, md: 6, xs: 12, sm: 6 }}>
            <Box
              img={box.img}
              title={box.title}
              description={box.description}
            />
          </Grid>
        ))}
        <Grid size={{ lg: 3, md: 6, xs: 12, sm: 6 }}>
          <Discoverbox />
        </Grid>
      </Grid>
      <Form />
      <Foot
        company="GitHub |"
        about="LinkedIn |"
        team="Instagram |"
        product="Email |"
        blog="What's App |"
        pric="FaceBook |"
      />
      {/* <div>
        <Button label="login" btnType="Secondary" customStyle="after" />
        <Button label="block"  />        

      {/* <Button label="follow" className='extra'/> */}
      {/* </div>   */} */
      {/* <div className="head1"></div>
      <div className="container">
        <div className="profile-card">
          <img src={avatar1} alt="profile" className="profile-img" />
          <div className="profile-name">
            <h1>Emma Roberts</h1>
            <div className="posts">
              <span>
                <strong>323</strong>Posts
              </span>
              <span>
                <strong>3.5k</strong>Followers
              </span>
              <span>
                <strong>323</strong>Following
              </span>
            </div>
            <p className="parah">
              A wordsmith who believes in the power of language to shape our
              world, inspire change, and connect us all. I bring a unique
              perspective to the writing, blending the knowledge and experiences
              into thought-provoking narratives.
            </p>
            <a href="/" className="more">
              MORE ABOUT ME &rarr;
            </a>
          </div>
        </div>
      </div> */}
      {/* 
      <div className="box">
        <Box
          image={m4}
          title="Hydrogen-Powered Vehicles"
          description="This article delves into hydrogen fuel cells and their environmental benefits."
        />

        <Box
          image={blog}
          title="Mental Health in the Digital Age"
          description="This article explores social media usage and mental health."
        />

        <Box
          image={blogg}
          title="Mars Colonization and Beyond"
          description="This article takes readers on a journey through space exploration."
        />
       
      </div> */}
      {/* <div className="box" > */}
      {/* <div size={{ lg: 2, md: 6, xs: 12, sm: 6 }}>
        <Form data={Forms} />
      </div> */}
      {/* </div> */}
      {/* <div className="foot"> */}
      {/* </div> */}
    </>
  );
}

export default Home;
