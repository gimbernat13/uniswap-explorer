(this["webpackJsonpuniswap-v2-thegraph"]=this["webpackJsonpuniswap-v2-thegraph"]||[]).push([[32],{851:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var a={messages:{Accept:"\u041f\u0440\u0438\u0445\u0432\u0430\u0442\u0438",Acknowledge:"\u041f\u0440\u0438\u0437\u043d\u0430\u0442\u0438",Allow:"\u0414\u043e\u0437\u0432\u043e\u043b\u0438","Allow in your wallet":"\u0414\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u0435 \u0443 \u0441\u0432\u043e\u043c \u043d\u043e\u0432\u0447\u0430\u043d\u0438\u043a\u0443","Allow {symbol} first":["\u041f\u0440\u0432\u043e \u0434\u043e\u0437\u0432\u043e\u043b\u0438 ",["symbol"]],"Allowance pending":"\u0414\u043e\u0434\u0430\u0442\u0430\u043a \u043d\u0430 \u0447\u0435\u043a\u0430\u045a\u0443","An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u0414\u043e\u0448\u043b\u043e \u0458\u0435 \u0434\u043e \u0433\u0440\u0435\u0448\u043a\u0435 \u043f\u0440\u0438\u043b\u0438\u043a\u043e\u043c \u043f\u043e\u043a\u0443\u0448\u0430\u0458\u0430 \u0438\u0437\u0432\u0440\u0448\u0435\u045a\u0430 \u043e\u0432\u0435 \u0437\u0430\u043c\u0435\u043d\u0435. \u041c\u043e\u0436\u0434\u0430 \u045b\u0435\u0442\u0435 \u043c\u043e\u0440\u0430\u0442\u0438 \u043f\u043e\u0432\u0435\u045b\u0430\u0442\u0438 \u0442\u043e\u043b\u0435\u0440\u0430\u043d\u0446\u0438\u0458\u0443 \u043a\u043b\u0438\u0437\u0430\u045a\u0430. \u0410\u043a\u043e \u0442\u043e \u043d\u0435 \u0443\u0441\u043f\u0435, \u043c\u043e\u0436\u0434\u0430 \u043f\u043e\u0441\u0442\u043e\u0458\u0438 \u043d\u0435\u043a\u043e\u043c\u043f\u0430\u0442\u0438\u0431\u0438\u043b\u043d\u043e\u0441\u0442 \u0441\u0430 \u0442\u043e\u043a\u0435\u043d\u043e\u043c \u043a\u043e\u0458\u0438\u043c \u0442\u0440\u0433\u0443\u0458\u0435\u0442\u0435. \u041d\u0430\u043f\u043e\u043c\u0435\u043d\u0430: \u043d\u0430\u043a\u043d\u0430\u0434\u0430 \u0437\u0430 \u0442\u043e\u043a\u0435\u043d\u0435 \u0437\u0430 \u043f\u0440\u0435\u043d\u043e\u0441 \u0438 \u043f\u0440\u0435\u0431\u0430\u0437\u0443 \u043d\u0438\u0458\u0435 \u043a\u043e\u043c\u043f\u0430\u0442\u0438\u0431\u0438\u043b\u043d\u0430 \u0441\u0430 \u0423\u043d\u0438\u0441\u0432\u0430\u043f \u04123.","Approval pending":"\u041e\u0434\u043e\u0431\u0440\u0435\u045a\u0435 \u0447\u0435\u043a\u0430\u045a\u0443",Approve:"\u041e\u0434\u043e\u0431\u0440\u0438","Approve in your wallet":"\u041e\u0434\u043e\u0431\u0440\u0438\u0442\u0435 \u0443 \u0441\u0432\u043e\u043c \u043d\u043e\u0432\u0447\u0430\u043d\u0438\u043a\u0443","Approve {symbol} first":["\u041f\u0440\u0432\u043e \u043e\u0434\u043e\u0431\u0440\u0438 ",["symbol"]],Auto:"\u0410utomatski","Auto Router":"\u0410\u0443\u0442\u043e \u0420\u043e\u0443\u0442\u0435\u0440","Balance:":"\u0421\u0442\u0430\u045a\u0435:",Close:"\u0417\u0430\u0442\u0432\u043e\u0440\u0438","Confirm in your wallet":"\u041f\u043e\u0442\u0432\u0440\u0434\u0438\u0442\u0435 \u0443 \u0441\u0432\u043e\u043c \u043d\u043e\u0432\u0447\u0430\u043d\u0438\u043a\u0443","Confirm swap":"\u041f\u043e\u0442\u0432\u0440\u0434\u0438\u0442\u0435 \u0437\u0430\u043c\u0435\u043d\u0443","Connect wallet":"\u041f\u043e\u0432\u0435\u0436\u0438\u0442\u0435 \u043d\u043e\u0432\u0447\u0430\u043d\u0438\u043a","Connect wallet to swap":"\u041f\u043e\u0432\u0435\u0436\u0438\u0442\u0435 \u043d\u043e\u0432\u0447\u0430\u043d\u0438\u043a \u0437\u0430 \u0437\u0430\u043c\u0435\u043d\u0443","Connecting\u2026":"\u041f\u043e\u0432\u0435\u0437\u0438\u0432\u0430\u045a\u0435\u2026","Convert {0} to {1}":["\u041f\u0440\u0435\u0442\u0432\u043e\u0440\u0438\u0442\u0435 ",["0"]," \u0443 ",["1"]],"Disconnect wallet":"\u0418\u0441\u043a\u0459\u0443\u0447\u0438\u0442\u0435 \u043d\u043e\u0432\u0447\u0430\u043d\u0438\u043a",Dismiss:"\u041e\u0434\u0431\u0430\u0446\u0438","Enter an amount":"\u0423\u043d\u0435\u0441\u0438\u0442\u0435 \u0438\u0437\u043d\u043e\u0441","Error details":"\u0414\u0435\u0442\u0430\u0459\u0438 \u043e \u0433\u0440\u0435\u0448\u0446\u0438","Error fetching trade":"\u0413\u0440\u0435\u0448\u043a\u0430 \u043f\u0440\u0438 \u043f\u0440\u0435\u0443\u0437\u0438\u043c\u0430\u045a\u0443 \u0442\u0440\u0433\u043e\u0432\u0438\u043d\u0435","Fetching best price\u2026":"\u0414\u043e\u0445\u0432\u0430\u045b\u0430\u045a\u0435 \u043d\u0430\u0458\u0431\u043e\u0459\u0435 \u0446\u0435\u043d\u0435\u2026","High price impact":"\u0412\u0438\u0441\u043e\u043a \u0443\u0442\u0438\u0446\u0430\u0458 \u043d\u0430 \u0446\u0435\u043d\u0443","High slippage":"\u0412\u0438\u0441\u043e\u043a\u043e \u043a\u043b\u0438\u0437\u0430\u045a\u0435","High slippage increases the risk of price movement":"\u0412\u0438\u0441\u043e\u043a\u043e \u043a\u043b\u0438\u0437\u0430\u045a\u0435 \u043f\u043e\u0432\u0435\u045b\u0430\u0432\u0430 \u0440\u0438\u0437\u0438\u043a \u043e\u0434 \u043a\u0440\u0435\u0442\u0430\u045a\u0430 \u0446\u0435\u043d\u0430","I don't have a wallet":"\u041d\u0435\u043c\u0430\u043c \u043d\u043e\u0432\u0447\u0430\u043d\u0438\u043a","Insufficient liquidity in the pool for your trade":"\u041d\u0435\u0434\u043e\u0432\u043e\u0459\u043d\u0430 \u043b\u0438\u043a\u0432\u0438\u0434\u043d\u043e\u0441\u0442 \u0443 \u0444\u043e\u043d\u0434\u0443 \u0437\u0430 \u0432\u0430\u0448\u0443 \u0442\u0440\u0433\u043e\u0432\u0438\u043d\u0443","Insufficient {0} balance":["\u041d\u0435\u0434\u043e\u0432\u043e\u0459\u043d\u043e ",["0"]," \u043d\u0430 \u0441\u0442\u0430\u045a\u0443"],"Invalid recipient":"\u041d\u0435\u0432\u0430\u0436\u0435\u045b\u0438 \u043f\u0440\u0438\u043c\u0430\u043b\u0430\u0446",Max:"\u041c\u0430\u043a\u0441","Max slippage":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u043d\u043e \u043a\u043b\u0438\u0437\u0430\u045a\u0435","Maximum sent":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u043d\u043e \u043f\u043e\u0441\u043b\u0430\u0442\u043e","Minimum received":"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u043d\u043e \u043f\u0440\u0438\u043c\u0459\u0435\u043d\u043e","Missing dependencies":"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0458\u0443 \u0437\u0430\u0432\u0438\u0441\u043d\u043e\u0441\u0442\u0438","Network fee":"\u041c\u0440\u0435\u0436\u043d\u0430 \u043d\u0430\u043a\u043d\u0430\u0434\u0430","No results found.":"\u041d\u0435\u043c\u0430 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442\u0430.","No tokens are available on this network. Please switch to another network.":"\u041d\u0435\u043c\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u0442\u043e\u043a\u0435\u043d\u0430 \u043d\u0430 \u043e\u0432\u043e\u0458 \u043c\u0440\u0435\u0436\u0438. \u041f\u0440\u0435\u0452\u0438\u0442\u0435 \u043d\u0430 \u0434\u0440\u0443\u0433\u0443 \u043c\u0440\u0435\u0436\u0443.",OFF:"\u0418\u0421\u041a",ON:"\u0423\u041a\u0409","Output is estimated. You will receive at least {0} {1} or the transaction will revert.":["\u0418\u0437\u043b\u0430\u0437 \u0458\u0435 \u043f\u0440\u043e\u0446\u0435\u045a\u0435\u043d. \u0414\u043e\u0431\u0438\u045b\u0435\u0442\u0435 \u043d\u0430\u0458\u043c\u0430\u045a\u0435 ",["0"]," ",["1"]," \u0438\u043b\u0438 \u045b\u0435 \u0441\u0435 \u0442\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0430 \u0432\u0440\u0430\u0442\u0438\u0442\u0438."],"Output is estimated. You will send at most {0} {1} or the transaction will revert.":["\u0418\u0437\u043b\u0430\u0437 \u0458\u0435 \u043f\u0440\u043e\u0446\u0435\u045a\u0435\u043d. \u041f\u043e\u0441\u043b\u0430\u045b\u0435\u0442\u0435 \u043d\u0430\u0458\u0432\u0438\u0448\u0435 ",["0"]," ",["1"]," \u0438\u043b\u0438 \u045b\u0435 \u0441\u0435 \u0442\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0430 \u0432\u0440\u0430\u0442\u0438\u0442\u0438."],"Please enter a valid slippage %":"\u0423\u043d\u0435\u0441\u0438\u0442\u0435 \u0432\u0430\u0436\u0435\u045b\u0438 % \u043a\u043b\u0438\u0437\u0430\u045a\u0430","Please refresh the page and try again.":"\u041e\u0441\u0432\u0435\u0436\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438 \u043f\u043e\u043a\u0443\u0448\u0430\u0458\u0442\u0435 \u043f\u043e\u043d\u043e\u0432\u043e.","Powered by the Uniswap protocol":"\u041f\u043e\u043a\u0440\u0435\u045b\u0435 \u0423\u043d\u0438\u0441\u0432\u0430\u043f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b","Price impact":"\u0423\u0442\u0438\u0446\u0430\u0458 \u043d\u0430 \u0446\u0435\u043d\u0443","Price updated":"\u0426\u0435\u043d\u0430 \u0458\u0435 \u0430\u0436\u0443\u0440\u0438\u0440\u0430\u043d\u0430","Recent transactions":"\u041d\u0435\u0434\u0430\u0432\u043d\u0435 \u0442\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0435","Reload the page":"\u041f\u043e\u043d\u043e\u0432\u043e \u0443\u0447\u0438\u0442\u0430\u0458 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",Reset:"\u0420\u0435\u0441\u0435\u0442\u043e\u0432\u0430\u0442\u0438","Review swap":"\u0417\u0430\u043c\u0435\u043d\u0430 \u043f\u0440\u0435\u0433\u043b\u0435\u0434\u0430","Search by token name or address":"\u041f\u0440\u0435\u0442\u0440\u0430\u0436\u0443\u0458\u0442\u0435 \u043f\u043e \u0438\u043c\u0435\u043d\u0443 \u0438\u043b\u0438 \u0430\u0434\u0440\u0435\u0441\u0438 \u0442\u043e\u043a\u0435\u043d\u0430","Select a token":"\u0418\u0437\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0435\u0442\u043e\u043d",Settings:"\u041f\u043e\u0434\u0435\u0448\u0430\u0432\u0430\u045a\u0430","Slippage tolerance":"\u041a\u043b\u0438\u0437\u043d\u0430 \u0442\u043e\u043b\u0435\u0440\u0430\u043d\u0446\u0438\u0458\u0430","Something went wrong.":"\u041d\u0435\u0448\u0442\u043e \u0458\u0435 \u043a\u0440\u0435\u043d\u0443\u043b\u043e \u043d\u0430\u043e\u043f\u0430\u043a\u043e.",Swap:"\u0420\u0430\u0437\u043c\u0435\u043d\u0438","Swap confirmed":"\u0417\u0430\u043c\u0435\u043d\u0430 \u043f\u043e\u0442\u0432\u0440\u0452\u0435\u043d\u0430","Swap details":"\u0417\u0430\u043c\u0435\u043d\u0438 \u0434\u0435\u0442\u0430\u0459\u0435","Swap failed: {0}":["\u0417\u0430\u043c\u0435\u043d\u0430 \u043d\u0438\u0458\u0435 \u0443\u0441\u043f\u0435\u043b\u0430: ",["0"]],"Swap pending":"\u0417\u0430\u043c\u0435\u043d\u0430 \u0458\u0435 \u043d\u0430 \u0447\u0435\u043a\u0430\u045a\u0443","Swap summary":"\u0420\u0435\u0437\u0438\u043c\u0435 \u0437\u0430\u043c\u0435\u043d\u0435",Switch:"\u0421\u0432\u0438\u0442\u0446\u0445","Switch network":"\u041f\u0440\u0435\u0431\u0430\u0446\u0438\u0442\u0435 \u043c\u0440\u0435\u0436\u0443","Switch network in your wallet":"\u041f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u043c\u0440\u0435\u0436\u0443 \u0443 \u0441\u0432\u043e\u043c \u043d\u043e\u0432\u0447\u0430\u043d\u0438\u043a\u0443","Switching network":"\u041f\u0440\u0435\u0431\u0430\u0446\u0438\u0432\u0430\u045a\u0435 \u043c\u0440\u0435\u0436\u0435","The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.":"Uniswap \u043d\u0435\u043f\u0440\u043e\u043c\u0435\u043d\u0459\u0438\u0432\u0430 x*y=k \u043d\u0438\u0458\u0435 \u0438\u0441\u043f\u043e\u0448\u0442\u043e\u0432\u0430\u043d\u0430 \u0440\u0430\u0437\u043c\u0435\u043d\u043e\u043c. \u0422\u043e \u043e\u0431\u0438\u0447\u043d\u043e \u0437\u043d\u0430\u0447\u0438 \u0434\u0430 \u0458\u0435\u0434\u0430\u043d \u043e\u0434 \u0442\u043e\u043a\u0435\u043d\u0430 \u043a\u043e\u0458\u0435 \u0437\u0430\u043c\u0435\u045a\u0443\u0458\u0435\u0442\u0435 \u0443\u043a\u0459\u0443\u0447\u0443\u0458\u0435 \u043f\u0440\u0438\u043b\u0430\u0433\u043e\u0452\u0435\u043d\u043e \u043f\u043e\u043d\u0430\u0448\u0430\u045a\u0435 \u043f\u0440\u0438\u043b\u0438\u043a\u043e\u043c \u043f\u0440\u0435\u043d\u043e\u0441\u0430.","The input token cannot be transferred. There may be an issue with the input token.":"\u0422\u043e\u043a\u0435\u043d \u0437\u0430 \u0443\u043d\u043e\u0441 \u043d\u0438\u0458\u0435 \u043c\u043e\u0433\u0443\u045b\u0435 \u043f\u0440\u0435\u043d\u0435\u0442\u0438. \u041c\u043e\u0436\u0434\u0430 \u043f\u043e\u0441\u0442\u043e\u0458\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441\u0430 \u0443\u043b\u0430\u0437\u043d\u0438\u043c \u0442\u043e\u043a\u0435\u043d\u043e\u043c.","The output token cannot be transferred. There may be an issue with the output token.":"\u0418\u0437\u043b\u0430\u0437\u043d\u0438 \u0442\u043e\u043a\u0435\u043d \u0441\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435 \u043f\u0440\u0435\u043d\u0435\u0442\u0438. \u041c\u043e\u0436\u0434\u0430 \u043f\u043e\u0441\u0442\u043e\u0458\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441\u0430 \u0438\u0437\u043b\u0430\u0437\u043d\u0438\u043c \u0442\u043e\u043a\u0435\u043d\u043e\u043c.","The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u0418\u0437\u043b\u0430\u0437\u043d\u0438 \u0442\u043e\u043a\u0435\u043d \u0441\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435 \u043f\u0440\u0435\u043d\u0435\u0442\u0438. \u041c\u043e\u0436\u0434\u0430 \u043f\u043e\u0441\u0442\u043e\u0458\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441\u0430 \u0438\u0437\u043b\u0430\u0437\u043d\u0438\u043c \u0442\u043e\u043a\u0435\u043d\u043e\u043c. \u041d\u0430\u043f\u043e\u043c\u0435\u043d\u0430: \u043d\u0430\u043a\u043d\u0430\u0434\u0430 \u0437\u0430 \u0442\u043e\u043a\u0435\u043d\u0435 \u0437\u0430 \u043f\u0440\u0435\u043d\u043e\u0441 \u0438 \u043f\u0440\u0435\u0431\u0430\u0437\u0443 \u043d\u0438\u0458\u0435 \u043a\u043e\u043c\u043f\u0430\u0442\u0438\u0431\u0438\u043b\u043d\u0430 \u0441\u0430 \u0423\u043d\u0438\u0441\u0432\u0430\u043f \u04123.","The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.":"\u0422\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0430 \u043d\u0438\u0458\u0435 \u043c\u043e\u0433\u043b\u0430 \u0431\u0438\u0442\u0438 \u043f\u043e\u0441\u043b\u0430\u0442\u0430 \u0458\u0435\u0440 \u0458\u0435 \u0440\u043e\u043a \u0438\u0441\u0442\u0435\u043a\u0430\u043e. \u041c\u043e\u043b\u0438\u043c\u043e \u0432\u0430\u0441 \u0434\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u0435 \u0434\u0430 \u0432\u0430\u0448 \u0440\u043e\u043a \u0437\u0430 \u0442\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0443 \u043d\u0438\u0458\u0435 \u043f\u0440\u0435\u043d\u0438\u0437\u0430\u043a.","This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u041e\u0432\u0430 \u0442\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0430 \u043d\u0435\u045b\u0435 \u0443\u0441\u043f\u0435\u0442\u0438 \u0437\u0431\u043e\u0433 \u043a\u0440\u0435\u0442\u0430\u045a\u0430 \u0446\u0435\u043d\u0430. \u041f\u043e\u043a\u0443\u0448\u0430\u0458\u0442\u0435 \u0434\u0430 \u043f\u043e\u0432\u0435\u045b\u0430\u0442\u0435 \u0442\u043e\u043b\u0435\u0440\u0430\u043d\u0446\u0438\u0458\u0443 \u043d\u0430 \u043a\u043b\u0438\u0437\u0430\u045a\u0435. \u041d\u0430\u043f\u043e\u043c\u0435\u043d\u0430: \u043d\u0430\u043a\u043d\u0430\u0434\u0430 \u0437\u0430 \u0442\u043e\u043a\u0435\u043d\u0435 \u0437\u0430 \u043f\u0440\u0435\u043d\u043e\u0441 \u0438 \u043f\u0440\u0435\u0431\u0430\u0437\u0443 \u043d\u0438\u0458\u0435 \u043a\u043e\u043c\u043f\u0430\u0442\u0438\u0431\u0438\u043b\u043d\u0430 \u0441\u0430 \u0423\u043d\u0438\u0441\u0432\u0430\u043f \u04123.","This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.":"\u041e\u0432\u0430 \u0442\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0430 \u043d\u0435\u045b\u0435 \u0443\u0441\u043f\u0435\u0442\u0438 \u0438\u043b\u0438 \u0437\u0431\u043e\u0433 \u043a\u0440\u0435\u0442\u0430\u045a\u0430 \u0446\u0435\u043d\u0430 \u0438\u043b\u0438 \u0437\u0431\u043e\u0433 \u043d\u0430\u043a\u043d\u0430\u0434\u0435 \u0437\u0430 \u043f\u0440\u0435\u043d\u043e\u0441. \u041f\u043e\u043a\u0443\u0448\u0430\u0458\u0442\u0435 \u0434\u0430 \u043f\u043e\u0432\u0435\u045b\u0430\u0442\u0435 \u043a\u043b\u0438\u0437\u043d\u0443 \u0442\u043e\u043b\u0435\u0440\u0430\u043d\u0446\u0438\u0458\u0443.","Transaction confirmed":"\u0422\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0430 \u043f\u043e\u0442\u0432\u0440\u0452\u0435\u043d\u0430","Transaction deadline":"\u041a\u0440\u0430\u0458\u045a\u0438 \u0440\u043e\u043a \u0437\u0430 \u0442\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0443","Transaction pending":"\u0422\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0430 \u0458\u0435 \u043d\u0430 \u0447\u0435\u043a\u0430\u045a\u0443","Transaction rejected.":"\u0422\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0430 \u0458\u0435 \u043e\u0434\u0431\u0438\u0458\u0435\u043d\u0430.","Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u041f\u043e\u043a\u0443\u0448\u0430\u0458\u0442\u0435 \u0434\u0430 \u043f\u043e\u0432\u0435\u045b\u0430\u0442\u0435 \u0442\u043e\u043b\u0435\u0440\u0430\u043d\u0446\u0438\u0458\u0443 \u043d\u0430 \u043a\u043b\u0438\u0437\u0430\u045a\u0435.<0/>\u041d\u0410\u041f\u041e\u041c\u0415\u041d\u0410: \u041d\u0430\u043a\u043d\u0430\u0434\u0430 \u0437\u0430 \u0442\u043e\u043a\u0435\u043d\u0435 \u0437\u0430 \u043f\u0440\u0435\u043d\u043e\u0441 \u0438 \u043f\u043e\u043d\u043e\u0432\u043d\u0443 \u0431\u0430\u0437\u0443 \u043d\u0438\u0441\u0443 \u043a\u043e\u043c\u043f\u0430\u0442\u0438\u0431\u0438\u043b\u043d\u0438 \u0441\u0430 \u0423\u043d\u0438\u0441\u0432\u0430\u043f \u04123.","Unexpected error. Could not estimate gas for the swap.":"\u041d\u0435\u043e\u0447\u0435\u043a\u0438\u0432\u0430\u043d\u0430 \u0433\u0440\u0435\u0448\u043a\u0430. \u041d\u0438\u0458\u0435 \u043c\u043e\u0433\u0443\u045b\u0435 \u043f\u0440\u043e\u0446\u0435\u043d\u0438\u0442\u0438 \u0433\u0430\u0441 \u0437\u0430 \u0437\u0430\u043c\u0435\u043d\u0443.","Unexpected issue with estimating the gas. Please try again.":"\u041d\u0435\u043e\u0447\u0435\u043a\u0438\u0432\u0430\u043d\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441\u0430 \u043f\u0440\u043e\u0446\u0435\u043d\u043e\u043c \u0433\u0430\u0441\u0430. \u041c\u043e\u043b\u0438\u043c \u0432\u0430\u0441, \u043f\u043e\u043a\u0443\u0448\u0430\u0458\u0442\u0435 \u043f\u043e\u043d\u043e\u0432\u043e.","Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":["\u041d\u0435\u043f\u043e\u0437\u043d\u0430\u0442\u0430 \u0433\u0440\u0435\u0448\u043a\u0430",["0"],". \u041f\u043e\u043a\u0443\u0448\u0430\u0458\u0442\u0435 \u043f\u043e\u0432\u0435\u045b\u0430\u0442\u0438 \u0442\u043e\u043b\u0435\u0440\u0430\u043d\u0446\u0438\u0458\u0443 \u043a\u043b\u0438\u0437\u0430\u045a\u0430. \u041d\u0430\u043f\u043e\u043c\u0435\u043d\u0430: \u043d\u0430\u043a\u043d\u0430\u0434\u0430 \u0437\u0430 \u0442\u043e\u043a\u0435\u043d\u0435 \u0437\u0430 \u043f\u0440\u0435\u043d\u043e\u0441 \u0438 \u043f\u043e\u043d\u043e\u0432\u043d\u0443 \u043d\u0430\u0434\u043e\u0433\u0440\u0430\u0434\u045a\u0443 \u043d\u0438\u0458\u0435 \u043a\u043e\u043c\u043f\u0430\u0442\u0438\u0431\u0438\u043b\u043d\u0430 \u0441\u0430 \u0423\u043d\u0438\u0441\u0432\u0430\u043f \u04123."],"Unsupported network - switch to another to trade":"\u041d\u0435\u043f\u043e\u0434\u0440\u0436\u0430\u043d\u0430 \u043c\u0440\u0435\u0436\u0430 - \u043f\u0440\u0435\u0452\u0438\u0442\u0435 \u043d\u0430 \u0434\u0440\u0443\u0433\u0443 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0442\u0440\u0433\u043e\u0432\u0430\u043b\u0438","Unwrap confirmed":"\u041e\u0434\u043c\u043e\u0442\u0430\u0432\u0430\u045a\u0435 \u043f\u043e\u0442\u0432\u0440\u0452\u0435\u043d\u043e","Unwrap pending":"\u041e\u0434\u043c\u043e\u0442\u0430\u0432\u0430\u045a\u0435 \u0458\u0435 \u043d\u0430 \u0447\u0435\u043a\u0430\u045a\u0443","View on Etherscan":"\u041f\u043e\u0433\u043b\u0435\u0434 \u043d\u0430 \u0415\u0442\u0445\u0435\u0440\u0441\u0446\u0430\u043d-\u0443","Your transaction will revert if it has been pending for longer than this period of time.":"\u0412\u0430\u0448\u0430 \u0442\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0430 \u045b\u0435 \u0431\u0438\u0442\u0438 \u0432\u0440\u0430\u045b\u0435\u043d\u0430 \u0430\u043a\u043e \u0458\u0435 \u0431\u0438\u043b\u0430 \u043d\u0430 \u0447\u0435\u043a\u0430\u045a\u0443 \u0434\u0443\u0436\u0435 \u043e\u0434 \u043e\u0432\u043e\u0433 \u0432\u0440\u0435\u043c\u0435\u043d\u0441\u043a\u043e\u0433 \u043f\u0435\u0440\u0438\u043e\u0434\u0430.","Your transaction will revert if the price changes unfavorably by more than this percentage.":"\u0412\u0430\u0448\u0430 \u0442\u0440\u0430\u043d\u0441\u0430\u043a\u0446\u0438\u0458\u0430 \u045b\u0435 \u0441\u0435 \u0432\u0440\u0430\u0442\u0438\u0442\u0438 \u0430\u043a\u043e \u0441\u0435 \u0446\u0435\u043d\u0430 \u043d\u0435\u043f\u043e\u0432\u043e\u0459\u043d\u043e \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u0437\u0430 \u0432\u0438\u0448\u0435 \u043e\u0434 \u043e\u0432\u043e\u0433 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u0430.",minutes:"\u043c\u0438\u043d\u0443\u0442\u0430","{0} {1}":[["0"]," ",["1"]],"{caption}":[["caption"]],"{integrator} fee":[["integrator"]," \u043d\u0430\u043a\u043d\u0430\u0434\u0430"],"{min}m {sec}s":[["min"],"\u043c ",["sec"],"\u0441"],"{sec}s":[["sec"],"\u0441"]}}}}]);
//# sourceMappingURL=32.fc651f3b.chunk.js.map