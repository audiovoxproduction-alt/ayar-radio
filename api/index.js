export default async function handler(req, res) {
  // Разрешаем кросс-доменные запросы от консоли Яндекса
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Отвечаем на предварительный OPTIONS-запрос (CORS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Формируем правильный ответ для Алисы
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

  // Отправляем ответ
  return res.status(200).json(response);
}
