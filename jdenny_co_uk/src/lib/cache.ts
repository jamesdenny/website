export async function revalidateProjects() {
  // This function can be called by a GitHub webhook to revalidate the projects page
  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/revalidate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.REVALIDATION_SECRET,
        path: '/projects',
      }),
    });
  } catch (error) {
    console.error('Error revalidating projects:', error);
  }
}
