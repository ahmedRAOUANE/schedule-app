const env = process.env.NEXT_PUBLIC_ENV;

const experimentalFeatures = [
    {
        name: "schedule-page",
        enabled: env === "development",
    }
];

export const isFeatureEnabled = (feature: string) => 
    experimentalFeatures.find((f) => f.name === feature)?.enabled;
