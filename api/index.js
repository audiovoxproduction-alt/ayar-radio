export default async function handler(req, res) {
  return res.status(200).json({
    response: {
      text: "Запускаю Айар Радио",
      tts: "Запускаю Айар Радио",
      directives: [
        {
          type: "AudioPlayer.Play",
          play_direction: "forward",
          item: {
            stream: {
              url: "https://c22.radioboss.fm:8213/radio.mp3"
            }
          }
        }
      ],
      end_session: false
    },
    version: "1.0"
  });
}
