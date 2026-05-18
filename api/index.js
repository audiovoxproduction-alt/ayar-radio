export default async function handler(req, res) {
  return res.status(200).json({
    version: "1.0",
    response: {
      text: "Добро пожаловать в Айар Радио.",
      end_session: false
    }
  });
}
