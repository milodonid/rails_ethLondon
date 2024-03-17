		if (item.TRANSACTION_POSITION === "first") 
		{
				item.eventTitle                 =   'Open position';
				item.lusdChange                 =   "positive";
				item.ethChange                  =   "negative";
				     openTroveTime              =   item.timeStampTime;
				     openTroveDate              =   item.timeStampDate;
			openTrove_DEBT                    =   item.DEBT; 
			openTrove_COLLATERAL              =   item.COLLATERAL;
			openTrove_collateralRatio         =   parseFloat(((item.COLLATERAL * item.PRICE_ETH_USD) / item.DEBT) * 100).toFixed(2) ;
			openTrove_TRANSFER_LUSD           =   item.TRANSFER_LUSD;
			openTrove_FEE_LUSD                =   item.FEE_LUSD;
      item.text                         =   "<p>In this transaction the borrower opens a position by depositing <span class=ethColor>" + formatEthBalance(item.COLLATERAL) +  "&nbsp;ETH</span> (&dollar;" + formatBalance(item.COLLATERAL_USD_VALUE) + ") collateral, which serves as security for a loan of <span class=lusdColor>" + formatBalance(item.TRANSFER_LUSD) + "&nbsp;LUSD</span>. Additionally, a <span class=lusdColor>200&nbsp;LUSD</span> <a href=https://docs.liquity.org/faq/borrowing#do-i-have-to-pay-fees-as-a-borrower target=_blank>liquidation reserve&nbsp;<span class=externalLinkArrow>&#8594;</span></a> is allocated to safeguard against potential liquidation events; it is returned to the borrower on repayment of the debt.";
      item.TRANSFER_ETH                 =   -1 * item.TRANSFER_ETH;
		}
		else if (item.TRANSACTION_POSITION !== "first"  )
		{
      // LUSD ONLY
			if (item.TRANSFER_LUSD < 0 && item.TRANSFER_ETH === 0)
			{
					item.eventTitle               =   "Repay"; 
					item.main_template            =   "main_lusd_event_Template"
					item.text                     =   "<p>The borrower repays <span class=lusdColor>" + formatBalance(item.TRANSFER_LUSD) + "&nbsp;LUSD</span> of their debt."; 
					item.lusdChange               =   "negative";
					item.ethChange                =   "no-change";
					item.text_tx_fee              =   "";
//           item.TRANSFER_LUSD            =   -1 * item.TRANSFER_LUSD;
			} 
			if (item.TRANSFER_LUSD > 0 && item.TRANSFER_ETH === 0)
			{
					item.eventTitle               =   "Borrow"; 
					item.main_template            =   "main_lusd_event_Template"
					item.text                     =   "<p>The borrower borrows an additional <span class=lusdColor>" + formatBalance(item.TRANSFER_LUSD) + "&nbsp;LUSD</span>."; 
					item.lusdChange               =   "positive";
					item.ethChange                =   "no-change";
 			} 
			// ETH ONLY
			if (item.TRANSFER_LUSD === 0 && item.TRANSFER_ETH < 0)
			{
					item.eventTitle               =   "Deposit"; 
					item.main_template            =   "main_eth_event_Template"
					item.text                     =   "<p>The borrower increases their collateral by depositing  <span class=ethColor>" + formatEthBalance(-1 * item.TRANSFER_ETH) + "&nbsp;ETH</span> (&dollar;"  + formatBalance(item.TRANSFER_ETH_USD_VALUE) + ") into their Trove."; 
					item.lusdChange               =   "no-change";
					item.ethChange                =   "negative";
					item.text_tx_fee							=   "";
//           item.TRANSFER_ETH             =   -1 * item.TRANSFER_ETH;
			} 
			if (item.TRANSFER_LUSD === 0 && item.TRANSFER_ETH > 0)
					{
					item.eventTitle               =   "Withdraw"; 
					item.main_template            =   "main_eth_event_Template"
					item.text                     =   "<p>The borrower withdraws <span class=ethColor>" + formatEthBalance(item.TRANSFER_ETH) + "&nbsp;ETH</span> (&dollar;"  + formatBalance(item.TRANSFER_ETH_USD_VALUE) + ") collateral. The collateral securing the loan is now <span class=ethColor>" +  formatBalance(item.COLLATERAL) + "&nbsp;ETH</span> (&dollar;" + formatBalance(item.COLLATERAL_USD_VALUE) + ")."; 
					item.ethChange                =   "positive";
					item.text_tx_fee              =   "";
			}                                                                                                                                                                                           
      // LUSD & ETH
			if (item.TRANSFER_LUSD > 0 && item.TRANSFER_ETH > 0)
					{
					item.eventTitle               =   "Withdraw &amp; Borrow"; 
					item.main_template            =   "main_two_events_Template"
					item.text                     =   "<p>Withdraw &amp; Borrow TEXT coming soon&hellip;"; 
					item.lusdChange               =   "positive";
					item.ethChange                =   "positive";
			}                                                                                                                                                                                           
			else if (item.TRANSFER_LUSD > 0 && item.TRANSFER_ETH < 0)
					{
					item.eventTitle               =   "Deposit &amp; Borrow"; 
					item.main_template            =   "main_two_events_Template"
					item.lusdChange               =   "positive";
					item.ethChange                =   "negative";
					item.text                     =   "<p>The borrower deposits a further <span class=ethColor>" + formatEthBalance(-1 * item.TRANSFER_ETH) + "&nbsp;ETH</span> (&dollar;"  + formatBalance(item.TRANSFER_ETH_USD_VALUE) + ") collateral and increases their borrowed amount by <span class=lusdColor>" + formatBalance(item.TRANSFER_LUSD) + "&nbsp;LUSD</span>. The collateral securing the loan is now <span class=ethColor>" +  formatBalance(item.COLLATERAL) + "&nbsp;ETH</span> (&dollar;" + formatBalance(item.COLLATERAL_USD_VALUE) + ")."; 
          item.TRANSFER_ETH             =   -1 * item.TRANSFER_ETH;
			}                                                                                                                                                                                           
			else if (item.TRANSFER_LUSD < 0 && item.TRANSFER_ETH > 0)
					{
					item.eventTitle               =   "Withdraw &amp; Repay"; 
					item.main_template            =   "main_two_events_Template"
					item.lusdChange               =   "negative";
					item.ethChange                =   "positive";
					item.text                     =   "<p>The borrower withdraws <span class=ethColor>" + formatEthBalance(item.TRANSFER_ETH) + "&nbsp;ETH</span> (&dollar;"  + formatBalance(item.TRANSFER_ETH_USD_VALUE) + ") collateral. The collateral securing the loan is now <span class=ethColor>" +  formatBalance(item.COLLATERAL) + "&nbsp;ETH</span> (&dollar;" + formatBalance(item.COLLATERAL_USD_VALUE) + "). The borrower simultaneously repays <span class=lusdColor>" + formatBalance(item.TRANSFER_LUSD) + "&nbsp;LUSD</span> of their debt."; 
					item.text_tx_fee							=   "";
          item.TRANSFER_LUSD            =   -1 * item.TRANSFER_LUSD;
			}                                                                                                                                                                                           
			else if (item.TRANSFER_LUSD < 0 && item.TRANSFER_ETH < 0)
					{
					item.eventTitle               =   "Withdraw &amp; Repay "; 
					item.main_template            =   "main_two_events_Template"
					item.lusdChange               =   "negative";
					item.ethChange                =   "negative";
					item.text                     =   "<p><h1>CHECK</h1>The borrower deposits a further <span class=ethColor>" + formatEthBalance(-1 * item.TRANSFER_ETH) + "&nbsp;ETH</span> (&dollar;"  + formatBalance(item.TRANSFER_ETH_USD_VALUE) + ") collateral and reduces their borrowed amount by <span class=lusdColor>" + formatBalance(item.TRANSFER_LUSD) + "&nbsp;LUSD</span>. The collateral securing the loan is now <span class=ethColor>" +  formatBalance(item.COLLATERAL) + "&nbsp;ETH</span> (&dollar;" + formatBalance(item.COLLATERAL_USD_VALUE) + ")."; 
					item.text_tx_fee							=   "";
//           item.TRANSFER_LUSD            =   -1 * item.TRANSFER_LUSD;
			}                                                                                                                                                                                           
			else if (item.TRANSFER_LUSD === 0 && item.TRANSFER_ETH === 0)
					{ // no transaction
					item.eventTitle               =   "Borrow &amp; Deposit "; 
					item.main_template            =   "main_two_events_Template" // 'empty' template
					item.lusdChange               =   "no-change";
					item.ethChange                =   "no-change";
					item.text                     =   "<h1>Debug: Zero / Zero  item.TRANSFER_LUSD === 0 && item.TRANSFER_ETH === 0</h1>"; 
					item.text_tx_fee							=   "";
			}                                                                                                                                                                                            
		}

		
		if (item.OPERATION) 
		{
      item.txInfo_header                =   "<div class=eventTime><div class=clockIcon></div><div>" + item.timeStampDate + " " + item.timeStampTime + "</div></div>" + 
                                            "<div class=dollarValue><div class=usdIcon>  </div><div>1 ETH = " + formatUsd(item.PRICE_ETH_USD) + "</div></div>"; 
      item.text_tx_gas                  =   "<div class=gasInset><div class=gasIconContainer><div class=gasIcon></div></div><div class=gasInsetContent><p>A <span class=ethColor>" + formatGasBalance(item.GAS_PRICE * item.GAS_USED) + " ETH</span> (&dollar;" + formatBalance(item.PRICE_ETH_USD * (item.GAS_PRICE * item.GAS_USED)) + ") network fee is charged for this transaction. Fees vary depending on network conditions.</p></div></div> ";
      item.text_tx_meta                 =   "<p><a href=https://etherscan.io/tx/" + item.TX_HASH + " target=_blank></p><p>View on etherscan.io block explorer<span class=externalLinkArrow>&#8594;</span></a></p>";
		}
		if (item.OPERATION) 
		{
      item.text_tx_fee                  =   "A fee of <span class=lusdColor>" + formatBalance(item.FEE_LUSD) + "&nbsp;LUSD</span> is charged against the value of the loan and added to the debt. At the conclusion of this transaction the outstanding debt is <span class=lusdColor>" +  formatBalance(item.DEBT - 200) +  "&nbsp;LUSD</span>.</p>";
		}
		else if (item.TRANSACTION_POSITION === "last" )
		{
				item.eventTitle                 =   "Close Trove" ;
				item.main_template              =   "main_two_events_Template"
				item.lusdChange                 =   "negative";
				item.ethChange                  =   "positive";
        item.text                       =   `<p>In this transaction the borrower closes their position by withdrawing <span class=ethColor>` + formatEthBalance(item.TRANSFER_ETH) + `&nbsp;ETH</span> (&dollar;` + formatBalance(item.TRANSFER_ETH_USD_VALUE) + `) collateral and repaying their <span class="lusdColor">` + formatBalance(item.TRANSFER_LUSD) + `&nbsp;LUSD</span> debt (including all fees). The <span class="lusdColor">200&nbsp;LUSD</span> <a href="https://docs.liquity.org/faq/borrowing#do-i-have-to-pay-fees-as-a-borrower" target="_blank">liquidation reserve&nbsp;<span class="externalLinkArrow">&#8594;</span></a> is cancelled.`;
        item.text_tx_fee                =   "</p>";
		}
		if (item.OPERATION){
		 const collateralRatio             =    parseFloat(((item.COLLATERAL * item.PRICE_ETH_USD) / item.DEBT) * 100).toFixed(2) ;
			item.collateralRatio             =    collateralRatio/1 + "&percnt;";
				 if (collateralRatio < 120){item.collateralRatioRiskFactor = "highCollRatioRisk"}
		else if (collateralRatio < 210){item.collateralRatioRiskFactor = "mediumCollRatioRisk"}
		else if (collateralRatio)      {item.collateralRatioRiskFactor = "lowCollRatioRisk"}
		}

		if (item.OPERATION === "liquidate"){ 
				item.eventTitle                 =   "Liquidation"; 
				item.main_template              =   "main_two_events_Template"
				item.lusdChange                 =   "no-change";
				item.ethChange                  =   "no-change";
        item.text                       =   "<p>The borrower's <span class=ethColor>" + formatEthBalance(item.LIQUIDATED_COLLATERAL) + "&nbsp;ETH</span> (&dollar;"  + formatUsd(item.LIQUIDATED_COLLATERAL * item.PRICE_ETH_USD) + ") collateral and <span class=lusdColor>" + formatBalance(item.LIQUIDATED_DEBT) + "&nbsp;LUSD</span> debt are <a href=https://docs.liquity.org/faq/stability-pool-and-liquidations#what-are-liquidations target=_blank title='What are liquidations'>liquidated <span class=externalLinkArrow>&#8594;</span></a>.";
        item.text_tx_fee                =   "</p>";
        item.text_tx_gas                =   "";
				item.collateralRatio    =    "";
		}

		if (item.TRANSACTION_POSITION === "last") {
			item.mostRecentTx_time = item.timeStampTime;
			item.mostRecentTx_date = item.timeStampDate;
item.openTrove_DEBT            = 	openTrove_DEBT            
item.openTrove_COLLATERAL      = 	openTrove_COLLATERAL      
item.openTrove_collateralRatio = 	openTrove_collateralRatio 
item.openTrove_TRANSFER_LUSD   = 	openTrove_TRANSFER_LUSD   
item.openTrove_FEE_LUSD        = 	openTrove_FEE_LUSD        
		}
