export default function departmentRow({ department }) {
  return (
    <div className="departmentRow">
      <h2>
        <img src={department.coverimage} />
        {book.title}
      </h2>
      <h3>{department.author}</h3>
      {department.description}
    </div>
  );
}
