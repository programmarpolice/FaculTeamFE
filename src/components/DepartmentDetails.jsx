export function DepartmentDetails({ department }) {
  return (
    <div className="DepartmentDetails">
      <h2>
        <img src={department.banner} />
        {department.name}
      </h2>
      <h3>Address:{department.address}</h3>
      <h3>Phone: {department.phone}</h3>
      <p>{department.description}</p>
    </div>
  );
}
