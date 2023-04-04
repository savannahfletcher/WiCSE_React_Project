import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';

const Experience = () => {
  return (
    <div>
      <VerticalTimeline lineColor="#3e497a">
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

        <VerticalTimelineElement
          className ="vertical-timeline-element--work"
          date = "January 2023 - April 2023"
          icon = {<CodeIcon/>}
          iconStyle = {{background: "#8198FD", color: "#FFFFFF"}}
        >
          <h3 className='vertical-timeline-element-title'>Software Engineering Project</h3>
          <h4 className='vertical-timeline-element-subtitle'>Front-end Developer</h4>
          <p>Developing the front-end of a UF Computer Science community website, UF ChompSci, with TypeScript through React.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className ="vertical-timeline-element--work"
          date = "May 2023 - August 2023"
          icon = {<WorkIcon/>}
          iconStyle = {{background: "#8198FD", color: "#FFFFFF"}}
        >
          <h3 className='vertical-timeline-element-title'>Google</h3>
          <h4 className='vertical-timeline-element-subtitle'>Incoming STEP Intern</h4>
          <p>Will be developing front-end for visualizer tools of Google MediaPipe (ML integration tools)</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience