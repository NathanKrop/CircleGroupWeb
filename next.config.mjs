/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/team", destination: "/#team", permanent: true },
      { source: "/programs", destination: "/#our-work", permanent: true },
      { source: "/programs/:slug*", destination: "/#our-work", permanent: true },
      { source: "/partners", destination: "/#partners", permanent: true },
      { source: "/work-with-us", destination: "/#work-with-us", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/stories", destination: "/#our-work", permanent: true },
      { source: "/research", destination: "/#our-work", permanent: true },
      { source: "/policies", destination: "/#about", permanent: true },
      { source: "/get-involved", destination: "/#work-with-us", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
};
export default nextConfig;
