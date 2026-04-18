const API = "http://localhost:5000";


export async function fetchAttendance(filters) {

  let url = `${API}/attendance`;


  if (filters?.start && filters?.end) {

    url += `?start=${filters.start}&end=${filters.end}`;

  }


  const res = await fetch(url);


  if (!res.ok) {

    throw new Error("attendance fetch failed");

  }


  return res.json();

}