import type { NextConfig } from 'next';
import mdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // 他の設定があればここに追加
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
};

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins, rehypePluginsなど必要に応じて追加
  },
});

export default withMDX(nextConfig);
