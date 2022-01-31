const search = document.getElementById("search");
const matchlist = document.getElementById("matchlist");

const searchapmt = async (searchText) => {
  const res = await fetch("./appointments.json");
  const apmt = await res.json();
};

let matches = apmt.filter((apmt) => {
  const regex = new RegExp(`^${searchText}`, "gi");
  return apmt.name.match(regex) || apmt.abbr.match(regex);
});
if (searchText.length === 0) {
  matches = [];
}

search.addEventListener("input", () => searchapmt(search.value));
