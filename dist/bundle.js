(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

const answers = ['Certainly', 'Without a doubt', 'Absolutely yes', 'You betcha', 'Confirmed', 'I think so', 'It is likely', 'Consensus is yes', 'Unlikely', 'Unconfirmed', 'Not looking good', 'Doubtful', 'Unsure, ask again later...', 'Hard to say, ask again later...', 'Undetermined, ask again later...', 'Unclear, ask again later...'];
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
      const mysteryResponse = answers[Math.floor(Math.random() * answers.length)];
      return wallet.request({
        method: 'snap_confirm',
        params: [{
          prompt: `The Mysterious 🦊 Has Spoken`,
          description: `You asked: ${requestObject.question}`,
          textAreaContent: `The mysterious fox says: ${mysteryResponse}`
        }]
      });

    default:
      throw new Error('Method not found.');
  }
});

},{}]},{},[1]);