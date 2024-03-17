function generateHTML(item) {

  if (item.TRANSACTION_POSITION === "first" ) {
				 if (item.TRANSACTION_POSITION === "last") {
					
					return (
					'<article><figure><div class="figure content">' + `<div class="legend"><div class=""><span class="">USDC</span></div><div class=""><span class="">waETH</span></div><div class=""><span class="appTitle">Morpho</span></div></div>` + openSection_tx_count_2_Template(item) +
					header_Template(item) +
					main_two_events_Template(item) +
					footer_Template(item) +
					article_title_Template(item) +
					close_article_Template(item));
				} else {
					return ( '<article><figure><div class="figure content">' + `<div class="legend"><div class=""><span class="">USDC</span></div><div class=""><span class="">wstETH</span></div><div class=""><span class="appTitle">Morpho</span></div></div>` +
					openSection_tx_count_2_Template(item) +
					header_Template(item) +
					main_two_events_Template(item) +
					footer_Template(item)
		    );}
		  }    

       if (item.OPERATION === "liquidate") {
				 if (item.TRANSACTION_POSITION === "last") {
					 
					return (
					openSection_tx_count_2_Template(item) +
					header_Template(item) +
					main_liquidate_Template(item) +
					footer_Template(item) +
					article_title_Template(item) + 
					close_article_Template(item));
				} else {
					return (
					openSection_tx_count_2_Template(item) +
					header_Template(item) +
					main_liquidate_Template(item) +
					footer_Template(item));
				}
			}

       if (item.main_template === "main_two_events_Template") {
				 if (item.TRANSACTION_POSITION === "last") {
					
					return (
					openSection_tx_count_2_Template(item) +
					header_Template(item) +
					main_two_events_Template(item) +
					footer_Template(item) +
					article_title_Template(item) +
					close_article_Template(item));
				} else {
					return (
					openSection_tx_count_2_Template(item) +
					header_Template(item) +
					main_two_events_Template(item) +
					footer_Template(item));
				}
			}

      else if (item.main_template === "main_lusd_event_Template") {
				 if (item.TRANSACTION_POSITION === "last") {
					
					return (
					openSection_tx_count_1_Template(item) +
					header_Template(item) +
					main_lusd_event_Template(item) +
					footer_Template(item) +
					article_title_Template(item) +
					close_article_Template(item));
				} else {
					return (
					openSection_tx_count_1_Template(item) +
					header_Template(item) +
					main_lusd_event_Template(item) +
					footer_Template(item));
				}
			}

       if (item.main_template === "main_eth_event_Template") {
				 if (item.TRANSACTION_POSITION === "last") {
					
					return (
					openSection_tx_count_1_Template(item) +
					header_Template(item) +
					main_eth_event_Template(item) +
					footer_Template(item) +
					article_title_Template(item) +
					close_article_Template(item));
				} else {
					return (
					openSection_tx_count_1_Template(item) +
					header_Template(item) +
					main_eth_event_Template(item) +
					footer_Template(item));
				}
			}
	}