import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true
  }
};

export default withFlowbiteReact(nextConfig);