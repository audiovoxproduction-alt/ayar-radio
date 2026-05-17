export default async function handler(req, res) {
  return res.status(200).json({
    version: "1.0",
    response: {
      text: "Запускаю Айар Радио",
      end_session: true,
      directives: {
        start_audio_player: {
          item: {
            stream: {
              url: "https://c22.radioboss.fm:8213/stream"
            },
            metadata: {
              title: "Айар Радио",
              subtitle: "Онлайн радио"
            }
          }
        }
      }
    }
  });
}
