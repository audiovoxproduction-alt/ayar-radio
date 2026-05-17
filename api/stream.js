export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  res.status(200).send(`
    <html>
      <body style="margin:0">
        <audio autoplay controls>
          <source src="https://c22.radioboss.fm:8213/stream" type="audio/mpeg">
        </audio>
      </body>
    </html>
  `);
}
