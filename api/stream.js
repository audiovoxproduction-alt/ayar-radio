export default async function handler(req, res) {
  const streamUrl = "https://c22.radioboss.fm:8213/live";

  const response = await fetch(streamUrl);

  res.setHeader("Content-Type", "audio/mpeg");
  res.setHeader("Access-Control-Allow-Origin", "*");

  response.body.pipe(res);
}
