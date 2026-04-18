const API = "http://localhost:5000";

export async function fetchRequests() {
  const res = await fetch(`${API}/requests`);
  
  if (!res.ok) {
    throw new Error("requests fetch failed");
  }

  return res.json();
}

export async function createRequest(data) {
  const res = await fetch(`${API}/requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("failed to create request");
  }

  return res.json();
}
