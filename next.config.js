/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/GroupNewTab',
        destination: 'https://chrome.google.com/webstore/detail/group-tab-saver-new-tab/aoficjpojclhhkpfgmeeenmknpnbagak',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
