import { useGetDepartmentsQuery } from "./departmentSlice";
import { useNavigate } from "react-router-dom"; //exported as an object(not default)
import BookRow from "./BookRow";

import Navbar from "../layout/Navbar";

export default function BookList() {
  const navigate = useNavigate();
  const { data: books = [], isLoading, error } = useGetBooksQuery();

  if (isLoading) {
    return <p>Loading books...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!books.length) {
    return <p>There are no books.</p>;
  }

  return (
    <>
      <ul>
        {books.map((b) => (
          <li
            onClick={() => {
              navigate(`/book-details/${b.id}`);
            }}
            key={b.id}
          >
            <BookRow book={b} />
          </li>
        ))}
      </ul>
    </>
  );
}
