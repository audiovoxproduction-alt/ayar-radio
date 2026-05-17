export default async function handler(req, res) {
  res.status(200).json({
    response: {
      text: "Включаю Айар Радио",
      directives: {
        audio_player: {
          item: {
            stream: {
              url: "https://c22.radioboss.fm:8213/stream"
            }
          }
        }
      },
      end_session: true
    },
    version: "1.0"
  });
}
