export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const response = {
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
  };

  return res.status(200).json(response);
}
