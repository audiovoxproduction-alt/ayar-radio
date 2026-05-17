export default async function handler(req, res) {
  return res.status(200).json({
    response: {
      text: "Включаю Айар Радио",
      end_session: true,
      directives: {
        start_account_linking: {}
      }
    },
    version: "1.0"
  });
}
