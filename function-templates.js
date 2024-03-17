function openSection_tx_count_1_Template(item) { return ` 
<section class="${item.OPERATION} inspect tx_count_1 ${item.TX_HASH}">
	<div class="section content active ${item._0_transactionPosition} ">
		`;} function openSection_tx_count_2_Template(item) { return ` 
		<section class="${item.OPERATION} inspect tx_count_2 ${item.TX_HASH}">
			<div class="section content active ${item._0_transactionPosition} ">
				`;} function close_article_Template(item) { return ` 
			</article> 
			`;} function article_title_Template(item) {return ` 
		</div>
		<div class="summaryBox">
			<header>
				<div class="header content">
					<div>
						<h3>
							Wallet Balance 
						</h3>
					</div>
					<div> 
						${item.mostRecentTx_date} ${item.mostRecentTx_time}
					</div>
				</div>
			</header>
			<main> 
			<div class="ethBox">
				<div class="table_Icon">
					<span class="icon"></span> 
				</div>
				<div class="balance">
					<span class="content ethToggle">${formatEthBalance(item.ETH_BALANCE)}<em>wstETH</em></span> 
					<span class="content usdToggle">${formatUsd(item.ETH_BALANCE_USD_VALUE)}<em>wstETH denominated in USD</em></span> 
				</div>
			</div>
			<div class="lusdBox">
				<div class="table_Icon">
					<span class="icon"></span> 
				</div>
				<div class="balance">
					<span class="lusdBalance">${formatBalance(item.LUSD_BALANCE)}<em>LUSD</em></span> 
				</div>
			</div>
		</div>
		</main> 
	</div>
</figure>
<div class="introBox">
	<div class="introBox content">
		<div class="stickyPanel">
			<div class="summaryBox">
				<div class="header content">
					<div class="clock">
					</div>
					<div>
						<h3>
							Transactions <span class=display-320>below</span> beginning 
						</h3>
					</div>
				</div>
				<div class="date">
					<div>
						${item.mostRecentTx_date}<span>${item.mostRecentTx_time}</span> 
					</div>
				</div>
			</div>
		</div>
	</div>
</div>




`;} function header_Template(item) { return ` 
<header class="${item.hello}">
	<div class="header content">
	</div>
</header>
<main>
<div class="main content">
	`;} function inner_Pre_Pre_Template(item) { return ` 
	<div class="eventTitle  ">
		<span class="eventTitleText ">${item.eventTitle}</span> 
	</div>
	`;} function inner_Pre_Template(item) {return ` 
	<div class="rail lusd">
	</div>
	<div class="rail eth">
	</div>
	<div class="link">
	</div>
	<div class="transfer_Icon">
		<span class="icon"></span> 
	</div>
	<div class="rail_Icon">
		<span class="icon"></span> 
	</div>
	`;} function inner_Suf_Template(item) {return ` 
	<div class="collateralRatio">
		<span class="collateralRatioPercentage ${item.collateralRatioRiskFactor}"> ${item.collateralRatio} </span> 
	</div>
	`;} function inner_LUSD_Template(item) {return ` ${inner_Pre_Template(item)} 
	<div class="transacted">
		<span class="transactedAmount">${formatBalance(item.TRANSFER_LUSD)}</span> 
	</div>
	${liquityDebt_Template(item)} 
	${inner_Suf_Template(item)} `;} function inner_ETH_Template(item) {return ` ${inner_Pre_Template(item)} 
	<div class="trove_Background ">
	</div>
	<div class="transacted">
		<span class="transactedAmount ethToggle">${formatEthBalance(item.TRANSFER_ETH)}</span> 
    <span class="transactedAmount usdToggle">${formatUsd(item.TRANSFER_ETH_USD_VALUE)}</span> 
	</div>
	<div class="trove_Content ">
		<span class="troveBalance ethToggle">${formatEthBalance(item.COLLATERAL)}</span> 
					<span class="troveBalance usdToggle">${formatUsd(item.COLLATERAL_USD_VALUE)}</span> 
	</div>
	<div class="trove_Label">
		<span class="trove_highlightable">Collateral</span> 
	</div>
	${inner_Suf_Template(item)} `;} 


function main_two_events_Template(item) {return ` 
	<div class="row ethTx ${item.ethChange} tx_1">
		${inner_Pre_Pre_Template(item)} ${inner_ETH_Template(item)} 
	</div>
	<div class="row lusdTx ${item.lusdChange} tx_2">
		${inner_LUSD_Template(item)} 
	</div>
	`;}
 
 #bbinclude "template-redeemCollateralFull.html"
 #bbinclude "template-redeemCollateralPartial.html"
 #bbinclude "template-liquidate.html"
 #bbinclude "template-claimCollateral.html"
 #bbinclude "template-redeem.html"



function liquityDebt_Template(item) {return ` 
	<div class="debt_Background">
	</div>
	<div class="debt_Icon">
		<span class="icon"></span> 
	</div>
	<div class="debt_Content"> 
		<span>${formatBalance(item.DEBT)}</span> 
	</div>
	<div class="debt_Label">
		<span class=debt_highlightable>Debt</span> 
	</div>
`;} 

function main_lusd_event_Template(item) {return ` 
	<div class="row lusdTx ${item.lusdChange} tx_1">
		${inner_Pre_Pre_Template(item)} ${inner_LUSD_Template(item)} 
	</div>
	`;} function main_eth_event_Template(item) {return ` 
	<div class="row ethTx ${item.ethChange} tx_1">
		${inner_Pre_Pre_Template(item)} ${inner_ETH_Template(item)} 
	</div>
	`;}
function main_ethGainWithdrawn_event_Template(item) {return ` <h1>Unidentified Transactions</h1>		`;}

function footer_Template(item) { return ` 
	</div>
	</main> 
	<footer>
		<div class="footer content">
			<div class="balanceWrapper">
				<div class="lusdBalance">
					<span class="content">${formatBalance(item.LUSD_BALANCE)}</span> 
				</div>
				<div class="ethBalance">
					<span class="content ethToggle">${formatEthBalance(item.ETH_BALANCE)}</span> 
					<span class="content usdToggle">${formatUsd(item.ETH_BALANCE_USD_VALUE)}</span> 
				</div>
			</div>
			<div class="accordion">
				<div class="accordion-header">
					<div class="accordion-spacer">
					</div>
					<div class="accordion-chevron">
					</div>
				</div>
				<div class="accordion-content txInfo">
					<div class="txInfo_header">
						<div class="txInfo_header_content">
							${item.txInfo_header}
						</div>
					</div>
					<div class="txInfo_main">
						${item.text} ${item.text_tx_fee} ${item.text_tx_gas} ${item.text_tx_meta} 
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>
</section>
`;} 