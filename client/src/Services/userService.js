import config  from "../config";
const apiHost = config.API_URL;

export async function loginUser(user) {
  const res = await fetch(`${apiHost}/api/songs/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await res.json();
}

export async function createUser(user) {
  const res = await fetch(`${apiHost}/api/songs/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await res.json();
}
