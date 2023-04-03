import React from "react";

//#region UserCard
const Skill = ({ skill: { name, level } }) => {
  return (
    <div className="userSkillstyle">
      {name}: {level}
    </div>
  );
};
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => (
    <Skill skill={skill} key={skill.name} />
  ));
  console.log({ skillsList });
  return <div>{skillsList}</div>;
};
function UserCard(props) {
  return (
    <div className="userContainer">
      <img
        src={props.person.photo}
        alt={props.person.getFullName()}
        className="userPicturestyle"
      />
      <h1 className="userNamestyle">{props.person.getFullName()}</h1>
      <p className="userTitlestyle">{props.person.jobTitle}</p>
      <h3 className="userSkillsheaderstyle">skills</h3>
      <div className="flex-container">
        <Skills skills={props.person.skills} />
      </div>
      <div className="userJoinedstyle">Joined on {props.person.joined}</div>
    </div>
  );
}

//#endregion

export default UserCard;
