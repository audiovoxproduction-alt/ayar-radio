export default async function handler(req, res) {
  const command =
    req.body?.request?.command?.toLowerCase?.().trim() || "";

  const helpText =
    "Это навык Айар Радио. Здесь можно узнать информацию о радиостанции, сайте и способах прослушивания. " +
    "Скажите: помощь, что ты умеешь, сайт радио или как слушать.";

  const welcomeText =
    "Добро пожаловать в навык Айар Радио. Это онлайн-радиостанция из Республики Саха Якутия. " +
    "Я могу рассказать о станции и подсказать, где её слушать. " +
    "Скажите: помощь, что ты умеешь, сайт радио или как слушать.";

  if (
    command.includes("помощь") ||
    command.includes("что ты умеешь") ||
    command.includes("что умеешь")
  ) {
    return res.status(200).json({
      version: "1.0",
      response: {
        text: helpText,
        end_session: false
      }
    });
  }

  if (
    command.includes("сайт") ||
    command.includes("где слушать") ||
    command.includes("как слушать") ||
    command.includes("слушать")
  ) {
    return res.status(200).json({
      version: "1.0",
      response: {
        text:
          "Айар Радио можно слушать на официальном сайте irradio.online. Также эфир доступен через интернет-поток радиостанции.",
        end_session: false
      }
    });
  }

  return res.status(200).json({
    version: "1.0",
    response: {
      text: welcomeText,
      end_session: false
    }
  });
}
