import React from 'react'
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
          <GitHubIcon onClick={() => window.open('https://github.com/savannahfletcher')}/>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/savannah-fletcher-a56174251/')}/>
          <YouTubeIcon onClick={() => window.open('https://www.youtube.com/channel/UCc1poGefLbdg8HR8s6o9DMA')}/>
          <EmailIcon onClick={() => window.location = 'mailto:sfletcher7772@gmail.com'}/>
      </div>
    </div>
  )
}

export default Footer