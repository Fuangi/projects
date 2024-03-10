import axios from 'axios';
import { useState } from 'react';

function EoyForm() {
	const [name, setName] = useState('');
	const [level, setLevel] = useState('');
	const [specialty, setSpecialty] = useState('');
	const [topicOne, setTopicOne] = useState('');
	const [topicTwo, setTopicTwo] = useState('');
	const [supervisor, setSupervisor] = useState('');
	const [showSuccess, setShowSuccess] = useState('');
	const [loading, setIsLoading] = useState('');

	function handleAddEoyProject(e) {
		e.preventDefault();

		const data = {
			name,
			level,
			specialty,
			projectTopic1: topicOne,
			projectTopic2: topicTwo,
			projectSupervisor: supervisor,
		};

		setIsLoading('Loading...');
		axios({
			url: 'https://projects-backend-dg1d.onrender.com/projects/eoy',
			data,
			method: 'post',
		})
			.then(function (response) {
				if (response.status === 201) {
					setShowSuccess('Success!!!');
					setIsLoading('')
				}
			})
			.catch(function (error) {
					setIsLoading('')
					setShowSuccess('Failed!!! Re-submit the form');
			});
	}

	return (
		<form id="form" action="" method="post">
			<div className="input-field">
				<label htmlFor="name">Full Names</label>
				<input
					className="input"
					type="text"
					name="name"
					id="name"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="as on birth certificate"
				/>
			</div>

			<div className="field">
				<label htmlFor="internshipCompany">Level</label>
				<div className="input-field">
					<select
						name="level"
						required
						value={level}
						onChange={(e) => setLevel(e.target.value)}
					>
						<option value="Select you level">Select you level</option>
						<option value="300">300</option>
						<option value="400">400</option>
					</select>
				</div>
			</div>

			<div className="field">
				<label htmlFor="specialty">Specialty</label>
				<div className="input-field">
					<select
						name="specialty"
						required
						id="specialty"
						value={specialty}
						onChange={(e) => setSpecialty(e.target.value)}
					>
						<option value="Select you specialties">
							Select your specialty
						</option>
						<option value="SWE">Software Engineering</option>
						<option value="ITS"> Information Technology and Security </option>
						<option value="GWD"> Computer Graphics and Web design </option>
					</select>
				</div>
			</div>
			<div className="input-field">
				<label htmlFor="topic1">Proposed Project Topic 1</label>
				<input
					className="input"
					type="text"
					name="topic1"
					required
					id="topic1"
					value={topicOne}
					onChange={(e) => setTopicOne(e.target.value)}
					placeholder="Project topic"
				/>
			</div>
			<div className="input-field">
				<label htmlFor="topic2">Proposed Project Topic 2</label>
				<input
					className="input"
					type="text"
					name="topic2"
					id="topic2"
					value={topicTwo}
					onChange={(e) => setTopicTwo(e.target.value)}
					placeholder="Project topic"
				/>
			</div>
			<div className="input-field">
				<label htmlFor="supervisor">Proposed Supervisor </label>
				<input
					className="input"
					type="text"
					required
					name="supervisor"
					id="supervisor"
					value={supervisor}
					onChange={(e) => setSupervisor(e.target.value)}
					placeholder="Project topic"
				/>
			</div>
			<div className="success">{showSuccess} {loading} </div>

			<div className="btns">
				<button type="submit" className="btn" onClick={handleAddEoyProject}>
					SUBMIT
				</button>
			</div>
		</form>
	);
}

export default EoyForm;
