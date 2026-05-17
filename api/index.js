export default async function handler(req, res) {
  return res.status(200).json({
    response: {
      text: "Запускаю Айар Радио",
      directives: {
        start_audio_player: {
          item: {
            stream: {
              url: "https://ayar-radio.vercel.app/api/stream"
            }
          }
        }
      },
      end_session: true
    },
    version: "1.0"
  });
}
