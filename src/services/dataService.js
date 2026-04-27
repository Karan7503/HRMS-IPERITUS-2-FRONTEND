const BASE_URL = "http://127.0.0.1:5000";

export const getEmployeeData = async () => {
  const res = await fetch(`${BASE_URL}/employee-data`);
  if (!res.ok) throw new Error("Failed to fetch employee data");
  return await res.json();
};

export const saveEmployeeData = async (payload) => {
  const res = await fetch(`${BASE_URL}/employee-data`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error("Failed to save employee data");
  return await res.json();
};
