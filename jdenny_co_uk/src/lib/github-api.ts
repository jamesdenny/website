export async function getTaggedProjects() {
  try {
    const response = await fetch(
      `https://api.github.com/users/jamesdenny/repos?sort=updated&per_page=50`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && { 'Authorization': `token ${process.env.GITHUB_TOKEN}` })
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }
    
    const repos = await response.json();
    return repos.filter((repo: any) => repo.topics.includes('portfolio'));
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
}

export async function getProjectReadme(repoName: string) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/jamesdenny/${repoName}/readme`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && { 'Authorization': `token ${process.env.GITHUB_TOKEN}` })
        },
        next: { revalidate: 3600 }
      }
    );
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    // Decode base64 content
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    return content;
  } catch (error) {
    console.error('Error fetching README:', error);
    return null;
  }
}
