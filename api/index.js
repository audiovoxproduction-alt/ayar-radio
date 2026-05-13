export default function handler(req, res) {
  res.status(200).json({
    version: "1.0",
    response: {
      text: "Включаю Айар Радио",
      end_session: false,
      directives: [
        {
          type: "AudioPlayer.Play",
          stream: {
            url: "https://c22.radioboss.fm:8213/stream",
            token: "ayar-radio",
            offset_ms: 0
          }
        }
      ]
    }
  });
}
