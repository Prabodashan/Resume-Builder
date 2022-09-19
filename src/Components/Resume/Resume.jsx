import React, { useEffect, useState } from "react";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";
import styles from "./Resume.module.css";

const Resume = (props) => {
  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const workExpSection = (
    <div key={"workexp"} className={`${styles.section} ${styles.workExp}`}>
      <div className={styles.sectionTitle}>Work Experience</div>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.title}>Full Stack Developer</p>
          <p className={styles.subTitle}>Company Name</p>
          <div className={styles.date}>
            <Calendar /> 2021/07/02 - 2022/07/07
          </div>
          <a href="#" className={styles.link}>
            <Paperclip /> https://dadadad.com/adada/ssf
          </a>
          <p className={styles.date}>
            <MapPin /> Remote
          </p>
          <ul className={styles.points}>
            <li className={styles.point}>It is point one</li>
            <li className={styles.point}>It is point two</li>
            <li className={styles.point}>It is point three</li>
            <li className={styles.point}>It is point four</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const projectSection = (
    <div key={"project"} className={`${styles.section} ${styles.project}`}>
      <div className={styles.sectionTitle}>project</div>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.title}>Project 1</p>
          <a href="#" className={styles.link}>
            <Paperclip /> https://dadadad.com/adada/ssf
          </a>
          <a href="#" className={styles.link}>
            <GitHub /> https://github.com/adada/ssf
          </a>
          <p className={styles.overview}>this project is a dummy project </p>
          <ul className={styles.points}>
            <li className={styles.point}>It is point one</li>
            <li className={styles.point}>It is point two</li>
            <li className={styles.point}>It is point three</li>
            <li className={styles.point}>It is point four</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const educationSection = (
    <div key={"education"} className={`${styles.section} ${styles.education}`}>
      <div className={styles.sectionTitle}>education</div>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.title}>BSE</p>
          <p className={styles.subTitle}>University Name</p>
          <div className={styles.date}>
            <Calendar /> 017/02/14 - 2022/07/02
          </div>
        </div>
      </div>
    </div>
  );
  const achievementSection = (
    <div
      key={"achievement"}
      className={`${styles.section} ${styles.achievement}`}
    >
      <div className={styles.sectionTitle}>achievement</div>
      <div className={styles.content}>
        <ul className={styles.numbered}>
          <li>achievement one</li>
          <li>achievement two</li>
          <li>achievement three</li>
          <li>achievement four</li>
        </ul>
      </div>
    </div>
  );
  const summarySection = (
    <div key={"summary"} className={`${styles.section} ${styles.summary}`}>
      <div className={styles.sectionTitle}>summary</div>
      <div className={styles.content}>
        <div className={styles.overview}>this is a dummy summary </div>
      </div>
    </div>
  );
  const otherSection = (
    <div key={"other"} className={`${styles.section} ${styles.other}`}>
      <div className={styles.sectionTitle}>other</div>
      <div className={styles.content}>
        <div className={styles.overview}>this is a dummy other </div>
      </div>
    </div>
  );

  useEffect(() => {
    setColumns([
      [projectSection, educationSection, summarySection],
      [workExpSection, achievementSection, otherSection],
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>Name</p>
        <p className={styles.subHeading}>Blockchain developer</p>

        <div className={styles.links}>
          <a className={styles.link}>
            <AtSign /> Email@gmail.com
          </a>
          <a className={styles.link}>
            <Phone /> 134567890
          </a>
          <a className={styles.link}>
            <Linkedin /> https://linddddkedin.in/answer
          </a>
          <a className={styles.link}>
            <GitHub /> https://gitdddddhub.in/answer
          </a>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.col1}>{columns[0]}</div>
        <div className={styles.col2}>{columns[1]}</div>
      </div>
    </div>
  );
};

export default Resume;
