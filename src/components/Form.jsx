import "./Form.css";

export default function Form() {
  return (
    <div>
      <form className="birthdayForm">
        {" "}
        <label>
          Name:
          <input name="name" placeholder="Name" />
        </label>
        <br />
        <label>
          Birthday:
          <input type="date" name="date" aria-label="Date" />
        </label>
        <br />
        <label>
          Present ideas:
          <input type="text" name="ideaInput" placeholder="Nintendo" />
          <input type="submit" value="Add idea" className="ideaInput" />
        </label>
        <input type="submit" value="Submit" className="submitForm" />
      </form>
    </div>
  );
}
