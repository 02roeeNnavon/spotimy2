import config from "../config";
const apiHost = config.API_URL;

export async function getSongById(id) {
    const res = await fetch(`${apiHost}/api/songs/${id}` );
    return res.json();
}

export async function getAllSongs() {
    const res = await fetch(`${apiHost}/api/songs/`);
    return res.json();
}
export async function search(value,fillter){
    const res = await fetch(`${apiHost}/api/songs/search/${fillter}/${value}`)
    return res.json();
}

export async function fillter(value){
    const res = await fetch(`${apiHost}/api/songs/fillter/${value}`)
    return res.json();
}

export async function genres(){
    const res = await fetch(`${apiHost}/api/songs/genres`)
    return res.json();
}
export async function postSong(song) {
    const res = await fetch(`${apiHost}/api/addsong`, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(song)
	});
	return await res.json();
}

export async function deleteSong(id) {
    const res = await fetch(`${apiHost}/api/${id}`, {method: 'DELETE'});
	return await res.json();
}