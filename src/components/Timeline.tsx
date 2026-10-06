import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2024.03 - present"
            iconStyle={{ background: "#5c7cfa", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Ph.D. Candidate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vehicle Intelligence Laboratory, Kookmin University
            </h4>
            <p>
              Perception research and national R&D project (RS-2024-00445826).
              Model design, training, ROS integration on test vehicle, and
              cross-institution technical coordination.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021.05 - 2024.02"
            iconStyle={{ background: "#5c7cfa", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              AI / Vision Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Anyractive (Hyundai Mobis Projects)
            </h4>
            <p>
              Led vision work on Hyundai Mobis advance vehicle projects (M.VISION
              HI, POP, H2GO, Humancentric): gaze tracking, gesture recognition, pedestrian
              detection, stereo object detection, and a real-time system spanning
              eight PCs.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021.03 - 2023.02"
            iconStyle={{ background: "#5c7cfa", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.S. in Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Graduate School of Software Convergence, Kookmin University
            </h4>
            <p>
              Network Application Laboratory, advised by Prof. Sanghwan Lee.
              Foundations in deep learning, computer vision, and data analysis.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
