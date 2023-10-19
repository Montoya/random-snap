
const getLanguage = () => navigator.userLanguage || (navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || navigator.browserLanguage || navigator.systemLanguage || 'en';

const language = getLanguage(); 

if(language.startsWith('es')) { 
  const esItems = document.querySelectorAll('span.lang-es'); 
  esItems.forEach((span) => { 
    span.style.display = 'inline'; 
  }); 
  const enItems = document.querySelectorAll('span.lang-en'); 
  enItems.forEach((span) => { 
    span.style.display = 'none'; 
  }); 
  document.getElementById('questionInput').style.width = '20rem'; 
}

if(window.ethereum===undefined) { 
  document.getElementById('connect').style.display = 'none'; 
  document.getElementById('content').style.borderWidth = '1px'; 
  document.getElementById('unavailable').style.display = 'block'; 
}
const snapId = `npm:mystery-fox`;
const snapVersion = '2.0.0'; 

const connectButton = document.getElementById('connect')
const queryText = document.getElementById('questionInput'); 
const queryButton = document.getElementById('query')

document.getElementById('fox').addEventListener('click', (e) => {
  getRandom();
})

connectButton.addEventListener('click', connect)
queryText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { 
    getAnswer()
  }
})
queryButton.addEventListener('click', getAnswer)

// here we get permissions to interact with and install the snap
async function connect () {
  let requestParams = {}; 
  requestParams[snapId] = {
    version: snapVersion
  }; 
  const result = await ethereum.request({
    method: 'wallet_requestSnaps',
    params: requestParams, 
  }); 
  
  if(result) { 
    // user is now connected, enable the dApp UI
    var elements = document.getElementsByClassName("disconnected");
    for (var i = 0; i < elements.length; i++) { 
      var el = elements.item(i); 
      el.style.display = 'none'; 
    }
    document.getElementById('content').style.borderWidth = '1px'; 
    elements = document.getElementsByClassName("connected"); 
    for (i = 0; i < elements.length; i++) { 
      var el = elements.item(i); 
      el.style.display = 'block'; 
    }
    document.getElementById('questionInput').focus(); 
  }
}

async function getRandom () {
  try {
    const response = await ethereum.request({
      method: 'wallet_invokeSnap',
      params: { 
        snapId: snapId, 
        request: { 
          method: 'random', 
        }
      }
    }); 
    alert("Result: " + response); 
  } catch (err) {
    console.error(err);
    alert('Problem happened: ' + err.message || err);
  }
}

async function getAnswer () {
  try {
    const question = document.getElementById('questionInput').value
    if(question.length > 0) { 
      const response = await ethereum.request({
        method: 'wallet_invokeSnap',
        params: { 
          snapId: snapId, 
          request: { 
            method: 'mystery', 
            params: { 
              question: question, 
            }
          }
        } 
      }); 
      document.getElementById('questionInput').value = ''; 
      document.getElementById('questionInput').focus(); 
    }
  } catch (err) {
    console.error(err); 
  }
}