import type { NextConfig } from 'next'

const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/jayin'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  ...(isGithubPages && {
    basePath: repoBasePath,
    assetPrefix: repoBasePath,
  }),
}

export default nextConfig
