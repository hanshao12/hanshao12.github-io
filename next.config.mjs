const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const hasCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && Boolean(repoName) && !hasCustomDomain;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? `/${repoName}` : '',
  assetPrefix: isGitHubPagesBuild ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPagesBuild ? `/${repoName}` : ''
  }
};

export default nextConfig;
