import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "hello",
  frameworkVersion: "3",
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    profile: "${param:profile}",
    region: "${param:region}" as any,
    memorySize: "${param:memorySize}" as any,
    timeout: "${param:timeout}" as any,
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  package: { individually: true },
  functions: {
    status: {
      handler: "src/index.handler",
      events: [
        {
          httpApi: {
            path: "/hello",
            method: "get",
          },
        },
      ],
    },
  },
  plugins: ["serverless-plugin-typescript"],
};

module.exports = serverlessConfiguration;
