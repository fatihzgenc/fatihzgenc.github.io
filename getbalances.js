address3 = "https://api.blockchain.com/v3/exchange/accounts/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa/BTC"
address2 = 'https://api.blockchain.com/v3/exchange/12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX/primary/BTC'
address1 = 'https://api.blockchain.com/q/addressbalance/12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX'

fetch(address1)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
