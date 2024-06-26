/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_CLOUDFRONT_URL: process.env.NEXT_PUBLIC_CLOUDFRONT_URL,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        AWS_REGION: process.env.AWS_REGION,
        S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        NEXT_PUBLIC_MOVIE_API_KEY: process.env.NEXT_PUBLIC_MOVIE_API_KEY
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd19cpb6med95n6.cloudfront.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
