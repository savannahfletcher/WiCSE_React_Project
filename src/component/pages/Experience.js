import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';

const Experience = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className ="vertical-timeline-element--education"
          date = "August 2021 - May 2025 (Expected Graduation)"
          icon = {<SchoolIcon/>}
          iconStyle = {{background: "#8198FD", color: "#FFFFFF"}}
        >
          <h3 className='vertical-timeline-element-title'>University of Florida, Gainesville FL</h3>
          <h4 className='vertical-timeline-element-subtitle'>Bachelor's Degree of Science</h4>
          <p>Computer Science, Astronomy Minor</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience