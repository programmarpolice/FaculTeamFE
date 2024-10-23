export function ProfessorDetails({ professor }) {
  return (
    <div className="ProfessorDetails">
      <h2>
        <img src={professor.profile} />
        {professor.name}
      </h2>
      <h3>Email:{professor.email}</h3>
      <h3>Phone: {professor.phone}</h3>
      <p>{professor.bio}</p>
    </div>
  );
}
