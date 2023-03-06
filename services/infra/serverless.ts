import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "infra",
  frameworkVersion: "3",
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    profile: "sls-espinozah-admin",
    region: "sa-east-1",
    memorySize: 256,
    timeout: 10,
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
            path: "/status",
            method: "get",
          },
        },
      ],
    },
  },
  resources: {
    Outputs: {
      profile: { Value: "${self:provider.profile}" },
      region: { Value: "${self:provider.region}" },
      memorySize: { Value: "${self:provider.memorySize}" },
      timeout: { Value: "${self:provider.timeout}" },
      httpApiId: {
        Value: { Ref: "HttpApi" },
      },
    },
  },
  plugins: ["serverless-plugin-typescript"],
};

module.exports = serverlessConfiguration;
