import React, { useState } from "react";

function App() {
	const [state, setState] = useState("");

	const names = [
		{ id: "a", name: "Devin" },
		{ id: "b", name: "Gabe" },
		{ id: "c", name: "Kim" },
	];

	return (
		<div>
			<label htmlFor="input-field">Name</label>
			<input
				id="input-field"
				type="text"
				placeholder="Name"
				value={state}
				onChange={(e) => setState(e.target.value)}></input>

			{state !== "" && <p>Name - {state}</p>}

			<hr />

			<ul>
				{names.map((data) => (
					<div key={data.id}>
						<li>{data.name}</li>
					</div>
				))}
			</ul>
		</div>
	);
}

export default App;
