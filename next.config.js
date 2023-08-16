/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // url: 'http://localhost:3000/api',
    // url: 'http://studio-stunnit.vercel.app/api',
    url: 'https://admin.studiostunnit.com',
    EMAIL_FROM:"sstunnit@gmail.com",
    SMTP_URL:"smtp://sstunnit@gmail.com:vgovrrcrobvqfghn@smtp.gmail.com"
  }
}
// https://studio-stunnit.vercel.app/
module.exports = nextConfig
