/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "pickbazarlaravel.s3.ap-southeast-1.amazonaws.com",
            },
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "m.media-amazon.com",
            },
            {
                protocol: "https",
                hostname: "static.vecteezy.com",
            },
        ],
    },

    async rewrites() {
        return [
            {
                source: '/api/:slug',
                destination: `${process.env.SERVERHOST}/api/:slug`,
            },
        ]
    },
};

export default nextConfig;
