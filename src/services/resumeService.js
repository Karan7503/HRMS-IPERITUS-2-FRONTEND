const BASE_URL = "http://127.0.0.1:5000";

export const getResume = async () => {
  const res = await fetch(`${BASE_URL}/resume`);
  if (!res.ok) throw new Error("Failed to fetch resume");
  return await res.json();
};

export const saveResume = async (resumeData) => {
  const res = await fetch(`${BASE_URL}/resume`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(resumeData)
  });
  
  if (!res.ok) throw new Error("Failed to save resume");
  return await res.json();
};
