const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && Boolean(repoName);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? `/${repoName}` : '',
  assetPrefix: isGitHubPagesBuild ? `/${repoName}/` : ''
};

export default nextConfig;
