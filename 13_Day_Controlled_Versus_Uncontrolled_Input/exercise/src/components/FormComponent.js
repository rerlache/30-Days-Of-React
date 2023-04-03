import React, { useState } from "react";
import "../assets/styles/index.css";
import CustomInput from "./CustomInput";

const options = [
  { value: "", label: "--- Select Country ----" },
  { value: "Finland", label: "Finland" },
  { value: "Austria", label: "Austria" },
  { value: "Germany", label: "Germany" },
  { value: "Swiss", label: "Swiss" },
];

const skillsList = [
  {id: 0, name: "html", checked: false },
  {id: 1, name: "css", checked: false },
  {id: 2, name: "react", checked: false },
  {id: 3, name: "javascript", checked: false },
  {id: 4, name: "c#", checked: false },
];

const countryDropDownOptions = options.map(({ value, label }) => (
  <option value={value} key={value}>
    {label}
  </option>
));

function FormComponent() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [tel, setTel] = useState("");
  let [dateOfBirth, setDateOfBirth] = useState("");
  let [favoriteColor, setFavoriteColor] = useState("");
  let [weight, setWeight] = useState("");
  let [country, setCountry] = useState("");
  let [bio, setBio] = useState("");
  let [gender, setGender] = useState("");
  let [skills, setSkills] = useState(skillsList);
  let [file, setFile] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setSkills(
        skills.map((skill) => {
          if (skill.name === name) {
            return { ...skill, checked: checked };
          } else {
            return skill
          }
        })
      );
    } else if (type === "file") {
      console.log(type, "check here");
      setFile({ [name]: e.target.files[0] });
    }
    switch (name) {
      case "firstname":
        setFirstName((firstName = value));
        break;
      case "lastname":
        setLastName((lastName = value));
        break;
      case "email":
        setEmail((email = value));
        break;
      case "tel":
        setTel((tel = value));
        break;
      case "dateofbirth":
        setDateOfBirth((dateOfBirth = value));
        break;
      case "favoritecolor":
        setFavoriteColor((favoriteColor = value));
        break;
      case "weight":
        setWeight((weight = value));
        break;
      case "country":
        setCountry((country = value));
        break;
      case "bio":
        setBio((bio = value));
        break;
      case "gender":
        setGender((gender = value));
        break;
      case "file":
        setFile((file = value));
        break;
      default:
        break;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const person = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phone: tel,
      birthdate: dateOfBirth,
      favoritecolor: favoriteColor,
      weight: weight,
      country: country,
      bio: bio,
      gender: gender,
      skills: skills,
    };
    console.log(person);
  }
  return (
    <div>
      <h3>User information Input</h3>
      <form>
        <CustomInput
          inputtype="text"
          idtext="firstname"
          placetext="First name"
          value={firstName}
          onChange={handleChange}
        />
        <CustomInput
          inputtype="text"
          idtext="lastname"
          placetext="Last name"
          value={lastName}
          onChange={handleChange}
        />
        <CustomInput
          inputtype="email"
          idtext="email"
          placetext="E-Mail"
          value={email}
          onChange={handleChange}
        />
        <CustomInput
          inputtype="text"
          idtext="tel"
          placetext="Telephone"
          value={tel}
          onChange={handleChange}
        />
        <CustomInput
          inputtype="date"
          idtext="dateofbirth"
          placetext="Birthday"
          value={dateOfBirth}
          onChange={handleChange}
        />
        <CustomInput
          inputtype="text"
          idtext="favoritecolor"
          placetext="Favorite Color"
          value={favoriteColor}
          onChange={handleChange}
        />
        <CustomInput
          inputtype="text"
          idtext="weight"
          placetext="Weight"
          value={weight}
          onChange={handleChange}
        />
        <div>
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={handleChange}
          >
            {countryDropDownOptions}
          </select>
        </div>
        <CustomInput
          inputtype="textblock"
          idtext="bio"
          placetext="Bio"
          value={bio}
          onChange={handleChange}
        />
        <div>
          <p>Gender</p>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              key="gender-female"
              onChange={handleChange}
              checked={gender === "Female"}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              key="gender-male"
              onChange={handleChange}
              checked={gender === "Male"}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="Other"
              key="gender-other"
              onChange={handleChange}
              checked={gender === "Other"}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div>
          <p>Select your skills</p>
          {skillsList.map((skill) => {
            return (
              <div>
                <input
                  type="checkbox"
                  id={skill.name}
                  name={skill.name}
                  key={skill.name}
                  onChange={handleChange}
                />
                <label htmlFor={skill.name}>{skill.name}</label>
              </div>
            );
          })}
        </div>
        <CustomInput
          inputtype="file"
          idtext="file"
          placetext="File"
          value={file}
        />

        <div>
          <button onClick={handleSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
