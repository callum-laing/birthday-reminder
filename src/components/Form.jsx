import "./Form.css";

export default function Form() {
  return (
    <div>
      <form className="birthdayForm">
        <label>Name:</label>
        <input name="name" placeholder="Name" />

        <label>Birthday:</label>
        <input type="date" name="date" aria-label="Date" />

        <label for="present-ideas">Gift:</label>
        <input type="text" name="ideaInput" placeholder="Nintendo" />

        <input type="submit" value="Submit" className="submitForm" />
      </form>
    </div>
  );
}
