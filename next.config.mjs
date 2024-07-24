/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'www.orangecube.art',
    //             port: '',
    //             pathname: '/orange-cube-main.png',
    //         },
    //     ],
    // },
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com'],
    },
};

export default nextConfig;
