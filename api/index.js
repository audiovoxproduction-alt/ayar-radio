export default async function handler(req, res) {
  return res.status(200).json({
    response: {
      text: "Включаю Айар Радио",
      directives: {
        start_audio_player: {
          item: {
            stream: {
              url: "https://c22.radioboss.fm:8213/;"
            }
          }
        }
      },
      end_session: true
    },
    version: "1.0"
  });
}
