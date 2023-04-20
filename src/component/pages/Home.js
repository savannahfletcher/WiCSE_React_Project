import React from 'react'
import "./Home.css" 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Savannah Fletcher</h2>
        <div className='prompt'>
        <p>
          A creative computer science student with a passion for tech.
          </p>
          <GitHubIcon onClick={() => window.open('https://github.com/savannahfletcher')}/>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/savannah-fletcher-a56174251/')}/>
          <YouTubeIcon onClick={() => window.open('https://www.youtube.com/channel/UCc1poGefLbdg8HR8s6o9DMA')}/>
          <EmailIcon onClick={() => window.location = 'mailto:sfletcher7772@gmail.com'}/>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        {/* </div> */}
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>C++, TypeScript, JavaScript, CSS, HTML, Java, ARM Assembly Language</span>
          </li>
          <li className="item">
            <h2>Libraries & Frameworks</h2>
            <span>React, React Native, Simple and Fast Multimedia Library (SFML)</span>
          </li>
          <li className="item">
            <h2>Coursework</h2>
            <span>Data Structures and Algorithms, Introduction to Computer Organization, Introduction to Software
Engineering</span>
          </li>
          <li className="item">
            <h2>Involvements</h2>
            <span>UF Women in Computer Science & Engineering (WiCSE), UF Open Source Club</span>
          </li>
        </ol>
      </div>
    </div>  
  )
}

export default Home