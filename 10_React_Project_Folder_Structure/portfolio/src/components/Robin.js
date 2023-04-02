import userPhoto from "../assets/images/robin.jpg";
function Robin() {
  const robin = {
    firstName: "Robin",
    lastName: "Erlacher",
    title: "Junior Developer",
    birthDate: "02.10.1986",

    getFullName() {
      return this.firstName + " " + this.lastName;
    },
  };
  return (
    <div className="user-card">
      <div className="user-card-header">
        <img className="user-photo" src={userPhoto} alt={robin.getFullName()} />
        <h1 className="user-name">{robin.getFullName()}</h1>
      </div>
      <h3>{robin.title}</h3>
      Born: {robin.birthDate}
      <br />
      <strong>Skills:</strong>
    </div>
  );
}

export default Robin;
