const EVENTS_URL =
  "https://api.github.com/users/HenriqueContini/events?per_page=4";

export default async function getWorkingOn() {
  try {
    const eventsResponse = await fetch(EVENTS_URL);
    const eventsData = await eventsResponse.json();

    const filteredData = eventsData.filter(
      (item) => item.type == "PushEvent" || item.type == "CreateEvent"
    );

    if (filteredData.length <= 0) throw new Error("Empty data");

    const repoResponse = await fetch(filteredData[0].repo.url);
    const repoData = await repoResponse.json();

    return {
      repoName: repoData.name,
      repoUrl: repoData.html_url,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
}
