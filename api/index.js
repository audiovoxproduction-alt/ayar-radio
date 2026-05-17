export default async function handler(req, res) {
  return res.status(200).json({
    version: "1.0",
    response: {
      text: "Айар Радио работает",
      end_session: true
    }
  });
}
