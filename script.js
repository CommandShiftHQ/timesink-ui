const url = "https://timesink-api.herokuapp.com";

function loadNewData() {
    fetch(url)
    .then(blob => blob.json())
    .then((data) => {
      const message = data.post;
      const authorName = data.author.name;
      const profilePicture = data.author.picture;

      if(message.startsWith('http')) {
          const iframe = document.createElement('iframe')
          iframe.setAttribute('src', message);
          iframe.setAttribute('width', '480');
          iframe.setAttribute('height', '400');
          iframe.setAttribute('frameborder', '0');
          let messageContainer = document.createElement('div');
          messageContainer.setAttribute('class', 'msg-container');

          messageContainer.appendChild(iframe);
          const container = document.querySelector('#container');
          container.appendChild(messageContainer)
          console.log('this is a gif... ', message)
        // do gif stuff
      } else {
        const container = document.querySelector('#container');
        let messageContainer = document.createElement('div');
        messageContainer.setAttribute('class', 'msg-container');
        const messageNode = document.createTextNode(`${message} ~ ${authorName}`);
        messageContainer.appendChild(messageNode); 
        container.appendChild(messageContainer);
      }
    })
}

window.onload = function() {
    const actionButton = document.querySelector('#give-me-cats-and-kanye');

    actionButton.addEventListener('click', () => {
        loadNewData();
    })
}

loadNewData()