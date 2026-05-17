export default async function handler(req, res) {
  return res.status(200).json({
    version: "1.0",
    response: {
      text: "Включаю Айар Радио",
      directives: [
        {
          type: "AudioPlayer.Play",
          audio_item: {
            stream: {
              url: "https://c22.radioboss.fm:8213/stream",
              offset_ms: 0
            }
          }
        }
      ],
      end_session: true
    }
  });
}
