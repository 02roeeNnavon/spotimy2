export async function getSongById(id) {
    const res = await fetch(`http://${window.location.hostname}:3001/api/songs/${id}` );
    return res.json();
}

export async function getAllSongs() {
    const res = await fetch(`http://${window.location.hostname}:3001/api/songs/`);
    return res.json();
}

export async function postSong(song) {
    const res = await fetch(`http://${window.location.hostname}:3001/api`, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(song)
	});
	return await res.json();
}

export async function deleteSong(id) {
    const res = await fetch(`http://${window.location.hostname}:3001/api/${id}`, {method: 'DELETE'});
	return await res.json();
}