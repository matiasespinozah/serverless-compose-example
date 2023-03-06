const COMMOM_PARAMS = {
  profile: "${infra.profile}",
  httpApiId: "${infra.httpApiId}",
  region: "${infra.region}",
  memorySize: "${infra.memorySize}",
  timeout: "${infra.timeout}",
};

const COMMOM_DEPENDS = ["infra"];

module.exports = {
  services: {
    infra: {
      path: "services/infra",
    },
    hello: {
      path: "services/hello",
      params: {
        ...COMMOM_PARAMS,
      },
      dependsOn: [...COMMOM_DEPENDS],
    },
  },
};
