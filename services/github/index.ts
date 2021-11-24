import { GITHUB_API } from "../../constants/api";

async function getContributors(repoName: string) {
  const response = await fetch(
    `${GITHUB_API.baseUrl}${GITHUB_API.repos}/${repoName}/${GITHUB_API.contributors}`
  );
  return await response.json();
}

async function getUser(userName: string) {
  const response = await fetch(
    `${GITHUB_API.baseUrl}${GITHUB_API.users}/${userName}`
  );
  return await response.json();
}

export default {
  getContributors,
  getUser
};
