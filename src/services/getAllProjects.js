const REPOS_URL =
  "https://api.github.com/users/HenriqueContini/repos?per_page=12&sort=created&page=1";

const NEXT_PATTERN = /(?<=<)([\S]*)(?=>; rel="Next")/i;
const PREV_PATTERN = /(?<=<)([\S]*)(?=>; rel="Prev")/i;

export default async function getAllProjects() {
  try {
    const reposResponse = await fetch(REPOS_URL);
    const linkHeader = reposResponse.headers.get("link");
    const reposData = await reposResponse.json();

    const list = reposData.map((item) => {
      return {
        name: item.name,
        url: item.html_url,
        description: item.description,
        languages_url: item.languages_url,
      };
    });

    return {
      data: list,
      ...getPrevAndNextPages(linkHeader),
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
    };
  }
}

export async function getProjectLanguages(url) {
  const response = await fetch(url);
  const result = await response.json();

  return Object.keys(result);
}

function getPrevAndNextPages(linkHeader) {
  let pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);
  let nextUrl = pagesRemaining ? linkHeader.match(NEXT_PATTERN)[0] : null;

  let prevPages = linkHeader && linkHeader.includes(`rel=\"prev\"`);
  let prevUrl = prevPages ? linkHeader.match(PREV_PATTERN)[0] : null;

  return {
    nextUrl,
    prevUrl,
  };
}
