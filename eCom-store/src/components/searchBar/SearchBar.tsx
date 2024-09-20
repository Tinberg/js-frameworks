import { Form } from "react-bootstrap";
import { SearchBarProps } from "../../types/SearchBarTypes";

function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <Form.Group className="mb-4">
      <Form.Control
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Form.Group>
  );
}

export default SearchBar;
