(this["webpackJsonpuniswap-v2-thegraph"]=this["webpackJsonpuniswap-v2-thegraph"]||[]).push([[16],{835:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return i}));var i={messages:{Accept:"Hyv\xe4ksy",Acknowledge:"Tunnustaa",Allow:"Sallia","Allow in your wallet":"Salli lompakossasi","Allow {symbol} first":["Salli ensin ",["symbol"]],"Allowance pending":"Korvaus vireill\xe4","An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Tapahtui virhe yritett\xe4ess\xe4 suorittaa t\xe4m\xe4 vaihto. Saatat joutua lis\xe4\xe4m\xe4\xe4n luistonsietokyky\xe4si. Jos se ei toimi, kaupank\xe4ynnin kohteena olevan tunnuksen kanssa saattaa olla ristiriita. Huomautus: siirto- ja uudelleentase-tunnusten maksu ei ole yhteensopiva Uniswap V3: n kanssa.","Approval pending":"Hyv\xe4ksynt\xe4 odottaa",Approve:"Hyv\xe4ksy","Approve in your wallet":"Hyv\xe4ksy lompakossasi","Approve {symbol} first":["Hyv\xe4ksy ensin ",["symbol"]],Auto:"Automaattinen","Auto Router":"Automaattinen reititin","Balance:":"Saldo:",Close:"Sulje","Confirm in your wallet":"Vahvista lompakossasi","Confirm swap":"Vahvista vaihto","Connect wallet":"Yhdist\xe4 lompakko","Connect wallet to swap":"Yhdist\xe4 lompakko vaihtaaksesi","Connecting\u2026":"Yhdist\xe4minen\u2026","Convert {0} to {1}":["Muunna ",["0"]," ",["1"],":ksi"],"Disconnect wallet":"Irrota lompakko",Dismiss:"Sulje","Enter an amount":"Sy\xf6t\xe4 summa","Error details":"Virheen tiedot","Error fetching trade":"Virhe kauppaa haettaessa","Fetching best price\u2026":"Haetaan paras hinta\u2026","High price impact":"Korkea hintavaikutus","High slippage":"Korkea luisto","High slippage increases the risk of price movement":"Suuri lipsahdus lis\xe4\xe4 hintojen liikkeiden riski\xe4","I don't have a wallet":"Minulla ei ole lompakkoa","Insufficient liquidity in the pool for your trade":"Poolissa ei ole tarpeeksi likviditeetti\xe4 kauppaasi varten","Insufficient {0} balance":["Riitt\xe4m\xe4t\xf6n ",["0"]," saldo"],"Invalid recipient":"Virheellinen vastaanottaja",Max:"Maksimi","Max slippage":"Max liukuminen","Maximum sent":"Maksimim\xe4\xe4r\xe4 l\xe4hetetty","Minimum received":"Minimi vastaanotettu","Missing dependencies":"Puuttuvat riippuvuudet","Network fee":"Verkkomaksu","No results found.":"Tuloksia ei l\xf6ytynyt.","No tokens are available on this network. Please switch to another network.":"Tunnuksia ei ole saatavilla t\xe4ss\xe4 verkossa. Vaihda toiseen verkkoon.",OFF:"OFF",ON:"ON","Output is estimated. You will receive at least {0} {1} or the transaction will revert.":["Tuotos on arvioitu. Saat v\xe4hint\xe4\xe4n ",["0"]," ",["1"]," tai tapahtuma palautuu."],"Output is estimated. You will send at most {0} {1} or the transaction will revert.":["Tuotos on arvioitu. L\xe4het\xe4t enint\xe4\xe4n ",["0"]," ",["1"]," tai tapahtuma palautuu."],"Please enter a valid slippage %":"Anna kelvollinen lipsuma %","Please refresh the page and try again.":"P\xe4ivit\xe4 sivu ja yrit\xe4 uudelleen.","Powered by the Uniswap protocol":"Toimii Uniswap-protokollalla","Price impact":"Hintavaikutus","Price updated":"Hinta p\xe4ivitetty","Recent transactions":"Viimeaikaiset tapahtumat","Reload the page":"Lataa sivu uudelleen",Reset:"Nollaa","Review swap":"Arvostelun vaihto","Search by token name or address":"Hae tunnusnimell\xe4 tai osoitteella","Select a token":"Valitse rahake",Settings:"asetukset","Slippage tolerance":"Luistonsieto","Something went wrong.":"Jotain meni pieleen.",Swap:"Vaihda","Swap confirmed":"Vaihto varmistettu","Swap details":"Vaihda tiedot","Swap failed: {0}":["Vaihto ep\xe4onnistui: ",["0"]],"Swap pending":"Vaihto vireill\xe4","Swap summary":"Yhteenveto vaihdosta",Switch:"Vaihtaa","Switch network":"Vaihda verkkoa","Switch network in your wallet":"Vaihda verkkoa lompakossasi","Switching network":"Vaihto verkkoa","The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.":"Vaihto ei tyydytt\xe4nyt Uniswap-invarianttia x*y=k. T\xe4m\xe4 tarkoittaa yleens\xe4 sit\xe4, ett\xe4 yksi vaihtamistasi rahakkeista k\xe4ytt\xe4ytyy mukautetusti siirron yhteydess\xe4.","The input token cannot be transferred. There may be an issue with the input token.":"Sy\xf6terahaketta ei voida siirt\xe4\xe4. Sy\xf6terahakkeessa voi olla ongelma.","The output token cannot be transferred. There may be an issue with the output token.":"Tulosrahaketta ei voida siirt\xe4\xe4. Tulosrahakkeessa voi olla ongelma.","The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Tulostunnusta ei voi siirt\xe4\xe4. Tulostunnuksessa voi olla ongelma. Huomautus: siirto- ja uudelleentase-tunnusten maksu ei ole yhteensopiva Uniswap V3: n kanssa.","The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.":"Tapahtumaa ei voitu l\xe4hett\xe4\xe4, koska m\xe4\xe4r\xe4aika on ohi. Tarkista, ett\xe4 tapahtumasi m\xe4\xe4r\xe4aika ei ole liian lyhyt.","This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"T\xe4m\xe4 kauppa ei onnistu hintaliikkeen vuoksi. Yrit\xe4 lis\xe4t\xe4 liukastumistoleranssia. Huomautus: siirto- ja uudelleentase-tunnusten maksu ei ole yhteensopiva Uniswap V3: n kanssa.","This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.":"T\xe4m\xe4 tapahtuma ei onnistu joko hinnanmuutoksen tai siirtopalkkion vuoksi. Yrit\xe4 nostaa luistonsietoprosenttia.","Transaction confirmed":"Kauppa vahvistettu","Transaction deadline":"Tapahtuman m\xe4\xe4r\xe4aika","Transaction pending":"Tapahtuma vireill\xe4","Transaction rejected.":"Tapahtuma hyl\xe4tty.","Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Yrit\xe4 lis\xe4t\xe4 liukastumistoleranssiasi.<0/>HUOMAA: Siirtomaksu ja uudelleenperustamistunnukset eiv\xe4t ole yhteensopivia Uniswap V3:n kanssa.","Unexpected error. Could not estimate gas for the swap.":"Odottamaton virhe. Vaihdon kaasua ei voitu arvioida.","Unexpected issue with estimating the gas. Please try again.":"Odottamaton ongelma kaasun arvioinnissa. Yrit\xe4 uudelleen.","Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":["Tuntematon virhe",["0"],". Yrit\xe4 lis\xe4t\xe4 liukastumissietokyky\xe4si. Huomaa: siirto- ja uudelleenkorotusmaksut eiv\xe4t ole yhteensopivia Uniswap V3: n kanssa."],"Unsupported network - switch to another to trade":"Ei tuettu verkko - vaihda toiseen kauppaa varten","Unwrap confirmed":"Purkaminen vahvistettu","Unwrap pending":"Purkaminen odottaa","View on Etherscan":"N\xe4kym\xe4 Etherscanissa","Your transaction will revert if it has been pending for longer than this period of time.":"Tapahtumasi palautetaan, jos se on ollut vireill\xe4 t\xe4t\xe4 pidemm\xe4n ajan.","Your transaction will revert if the price changes unfavorably by more than this percentage.":"Tapahtumasi peruuntuu, jos hinta muuttuu ep\xe4suotuisasti t\xe4t\xe4 prosenttiosuutta enemm\xe4n.",minutes:"minuuttia","{0} {1}":[["0"]," ",["1"]],"{caption}":[["caption"]],"{integrator} fee":[["integrator"]," maksu"],"{min}m {sec}s":[["min"],"m ",["sec"],"s"],"{sec}s":[["sec"],"s"]}}}}]);
//# sourceMappingURL=16.1749206b.chunk.js.map