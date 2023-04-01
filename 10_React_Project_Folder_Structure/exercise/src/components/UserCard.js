import React, { Component, useState, useEffect } from "react";

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
class UserCard extends React.Component {
  render() {
    return (
      <div className="userContainer">
        <img
          src={this.props.person.photo}
          alt={this.props.person.getFullName()}
          className="userPicturestyle"
        />
        <h1 className="userNamestyle">{this.props.person.getFullName()}</h1>
        <p className="userTitlestyle">{this.props.person.jobTitle}</p>
        <h3 className="userSkillsheaderstyle">skills</h3>
        <div className="flex-container">
          <Skills skills={this.props.person.skills} />
        </div>
        <div className="userJoinedstyle">
          Joined on {this.props.person.joined}
        </div>
      </div>
    );
  }
}
//#endregion

export default UserCard;
