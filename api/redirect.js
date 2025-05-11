export default function handler(req, res) {
  // Base64 dari link tujuan (contoh: https://example.com)
  const encoded = 'aHR0cHM6Ly96ZXByYS1tYWludGVuYW5jZS52ZXJjZWwuYXBw';
  const decodedUrl = Buffer.from(encoded, 'base64').toString('utf-8');

  res.writeHead(302, {
    Location: decodedUrl
  });
  res.end();
}
