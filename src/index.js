import { panel, text, divider } from '@metamask/snaps-ui';

const uiText = {
  header: { 
    en: 'The Mysterious 🦊 Has Spoken', 
    es: 'El 🦊  Misterioso Dice'
  },
  youasked: { 
    en: 'You asked:', 
    es: 'Usted preguntó:'
  },
  says: { 
    en: 'The fox says:',
    es: 'El zorro respondió:'
  }
}; 

const answers = [
  {
    en: 'Certainly',
    es: 'Ciertamente'
  },
  {
    en: 'Without a doubt',
    es: 'Sin duda'
  },
  {
    en: 'Absolutely',
    es: 'Absolutamente'
  },
  {
    en: 'You betcha',
    es: 'Tu lo sabes'
  },
  {
    en: 'Confirmed', 
    es: 'Confirmado'
  },
  {
    en: 'I think so',
    es: 'Creo que sí'
  },
  {
    en: 'It is likely',
    es: 'Es probable'
  },
  {
    en: 'Consensus is yes',
    es: 'Hay acuerdo'
  },
  {
    en: 'Unlikely',
    es: 'Improbable'
  },
  {
    en: 'Unconfirmed',
    es: 'Sin confirmación'
  },
  {
    en: 'Not looking good',
    es: 'No parece bueno'
  },
  {
    en: 'Doubtful',
    es: 'Dudoso'
  }, 
  {
    en: 'Unsure, ask again later...',
    es: 'No estoy seguro, pregúntame más tarde...'
  },
  {
    en: 'Hard to say, ask again later...',
    es: 'Es dificil decir, pregúntame más tarde...'
  },
  {
    en: 'Undetermined, ask again later...',
    es: 'No hay indicación, pregúntame más tarde...'
  },
  {
    en: 'Unclear, ask again later...',
    es: 'No es claro, pregúntame más tarde...'
  }
];

const getLocale = async function() { 
  const locale = await snap.request({ method: 'snap_getLocale' });
  switch(locale) { 
    case 'es': 
    case 'es_419': 
      return 'es'; 
      break;
    default: 
      return 'en'; 
      break; 
  }
}; 

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
      const locale = await getLocale();
      const mysteryResponse = answers[Math.floor(Math.random() * answers.length)][locale];
      const question = request.params.question.trim();
      return snap.request({
        method: 'snap_dialog',
        params: {
          type: 'alert',  
          content: panel([
            text(`**${uiText.header[locale]}**`),
            divider(), 
            text(uiText.youasked[locale]), 
            text(`_${question}_`),
            divider(),
            text(uiText.says[locale]),
            text(`**${mysteryResponse}**`),
          ]), 
        },
      });
    default:
      throw new Error('Method not found.');
  }
};
