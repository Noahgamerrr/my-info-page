import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true
  },
  output: "export",
  basePath: "/my-info-page"
};

export default withFlowbiteReact(nextConfig);