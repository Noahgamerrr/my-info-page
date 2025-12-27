import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true
  },
  output: process.env.GITHUB_PAGES ? "export" : "standalone",
  basePath: "/my-info-page"
};

export default withFlowbiteReact(nextConfig);