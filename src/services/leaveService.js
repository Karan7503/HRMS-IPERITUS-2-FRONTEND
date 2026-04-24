export async function fetchLeaves() {
    const res = await fetch("http://localhost:5000/leave", {
        cache: "no-store" // 🔥 prevents stale data
    });

    const data = await res.json();
    return data.records;
}


export async function applyLeave(payload) {

    const res = await fetch("http://localhost:5000/leave", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    // 🔥 DEBUG
    console.log("STATUS:", res.status);

    if (!res.ok) {
        const text = await res.text(); // read raw response
        console.error("Server error:", text);
        throw new Error("Server error");
    }

    return res.json();
}

export async function updateLeave(id, payload) {
    const res = await fetch(`http://localhost:5000/leave/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    return res.json();
}


export async function deleteLeave(id) {
    const res = await fetch(`http://localhost:5000/leave/${id}`, {
        method: "DELETE"
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
    }

    return res.json();
}