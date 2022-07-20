const answers = [
  'Certainly',
  'Without a doubt',
  'Absolutely yes',
  'You betcha',
  'Confirmed',
  'I think so',
  'It is likely',
  'Consensus is yes',
  'Unlikely',
  'Unconfirmed',
  'Not looking good',
  'Doubtful',
  'Unsure, ask again later...',
  'Hard to say, ask again later...',
  'Undetermined, ask again later...',
  'Unclear, ask again later...',
];

module.exports.onRpcRequest = async ({ origin, request }) => {
  switch (request.method) {
    case 'random':
      if (request.min !== undefined && request.max !== undefined) {
        const min = parseInt(request.min, 10);
        const max = parseInt(request.max, 10);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      return Math.random();
    case 'mystery':
      let mysteryResponse = answers[Math.floor(Math.random() * answers.length)];
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: `The Mysterious 🦊 Has Spoken`,
            description: `You asked: ${request.question}`,
            textAreaContent: `The mysterious fox says: ${mysteryResponse}`,
          },
        ],
      });
    default:
      throw new Error('Method not found.');
  }
};
