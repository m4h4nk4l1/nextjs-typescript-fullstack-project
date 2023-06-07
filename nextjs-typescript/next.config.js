/** @type {import('next').NextConfig} */
import { join } from 'path';

const nextConfig = {
    experimental: {
        appDir:true
    },
    sassOptions: {
        includePaths: [join(__dirname, 'styles')],
      },
}

export default nextConfig
