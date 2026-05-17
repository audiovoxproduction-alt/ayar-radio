export default async function handler(req, res) {
  res.writeHead(302, {
    Location: "https://c22.radioboss.fm:8213/stream"
  });

  res.end();
}
