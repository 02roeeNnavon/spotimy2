const apiHost = 'localhost:3000';

export async function loginUser(user) {
    const res = await fetch(`http://${apiHost}/api/songs/login`, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(user)
	});
	return await res.json();
}

export async function createUser(user) {
    const res = await fetch(`http://${apiHost}/api/songs/register`, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(user)
	});
	return await res.json();
}