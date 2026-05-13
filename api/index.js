export default function handler(req, res) {
  const text = req.body.request.command.toLowerCase();

  // ПОМОЩЬ
  if (
    text.includes("помощь") ||
    text.includes("что ты умеешь")
  ) {
    return res.status(200).json({
      version: "1.0",
      response: {
        text:
          "Это навык онлайн радио Айар Радио. Скажите: включи Айар Радио — и начнется воспроизведение музыкального эфира.",
        end_session: false
      }
    });
  }

  // ПРИВЕТСТВИЕ
  if (text === "" || text.includes("запусти")) {
    return res.status(200).json({
      version: "1.0",
      response: {
        text:
          "Добро пожаловать в Айар Радио! Скажите: включи Айар Радио — чтобы начать прослушивание онлайн радио.",
        end_session: false
      }
    });
  }

  // ЗАПУСК РАДИО
  if (
    text.includes("включи") ||
    text.includes("айар")
  ) {
    return res.status(200).json({
      version: "1.0",
      response: {
        text: "Включаю Айар Радио",
        end_session: true,
        directives: {
          start_stream: {
            url: "https://c22.radioboss.fm:8213/stream"
          }
        }
      }
    });
  }

  // ЕСЛИ НЕ ПОНЯЛА
  return res.status(200).json({
    version: "1.0",
    response: {
      text:
        "Я могу включить Айар Радио. Скажите: включи Айар Радио.",
      end_session: false
    }
  });
}
