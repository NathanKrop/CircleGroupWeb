/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/get-involved", destination: "/work-with-us", permanent: true },
      { source: "/programs/mentorship", destination: "/programs/career-readiness", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
};
export default nextConfig;
