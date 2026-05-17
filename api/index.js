export default async function handler(req, res) {
  return res.status(200).json({
    version: "1.0",
    response: {
      text: "Включаю Айар Радио",
      end_session: true
    },
    directives: {
      audio_player: {
        item: {
          stream: {
            url: "https://c22.radioboss.fm:8213/;"
          }
        }
      }
    }
  });
}
