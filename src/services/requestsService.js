export async function fetchRequests() {
  const res = await fetch("http://localhost:5000/requests");
  return res.json();
}

export async function createRequest(payload) {
  const res = await fetch("http://localhost:5000/requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  return res.json();
}


export async function updateRequest(id, payload) {
  const res = await fetch(`http://localhost:5000/requests/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  return res.json();
}

export async function deleteRequest(id) {
  const res = await fetch(`http://localhost:5000/requests/${id}`, {
    method: "DELETE"
  });

  return res.json();
}