import "./Form.css";

export default function Form() {
	return (
		<div>
			<form className="birthdayForm" onSubmit={handleSubmit}>
				<div className="input">
					<label>Name:</label>
					<input name="name" placeholder="John Smith" required />
				</div>
				<div className="input">
					<label>Birthday:</label>
					<input type="date" name="date" aria-label="Date" required />
				</div>
				<div className="input">
					<label htmlFor="ideaInput">Gift:</label>
					<input type="text" name="ideaInput" placeholder="Nintendo" required />
				</div>
				<input type="submit" value="Submit" className="submitButton" />
			</form>
		</div>
	);

	function handleSubmit(event) {
		event.preventDefault();
		// Add your submit logic here
		console.log("Form submitted!");

		// Get the form data
		const formData = new FormData(event.target);
		const name = formData.get("name");
		const date = formData.get("date");
		const gift = formData.get("ideaInput");

		// Validate form data
		if (!name || !date || !gift) {
			alert("Please fill in all fields");
			return;
		}

		// Store the form data in local storage
		const data = {
			name,
			date,
			gift,
		};
		localStorage.setItem("formData", JSON.stringify(data));
	}
}
