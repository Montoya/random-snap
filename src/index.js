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

wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  switch (requestObject.method) {
    case 'random':
      if (requestObject.min !== undefined && requestObject.max !== undefined) {
        const min = parseInt(requestObject.min);
        const max = parseInt(requestObject.max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      return Math.random();
    case 'mystery':
      const mysteryResponse =
        answers[Math.floor(Math.random() * answers.length)];
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: `The Mysterious 🦊 Has Spoken`,
            description: `You asked: ${requestObject.question}`,
            textAreaContent: `The mysterious fox says: ${mysteryResponse}`,
          },
        ],
      });
    default:
      throw new Error('Method not found.');
  }
});
