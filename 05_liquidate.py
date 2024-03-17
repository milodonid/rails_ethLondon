import requests
import time
import os
import csv

address = os.environ.get('address')

topicX = f"0x000000000000000000000000{address}"
full_address = f"0x{address}"

# SupplyCollateral

urlLiquidate = f"https://api.etherscan.io/api?module=logs&action=getLogs&topic0=0xa4946ede45d0c6f06a0f5ce92c9ad3b4751452d2fe0e25010783bcab57a67e41&topic0_1_opr=and&topic1=0xB323495F7E4148BE5643A4EA4A8221EEF163E4BCCFDEDC2A6F4696BAACBC86CC&topic0_2_opr=and&topic2={topicX}&offset=10000&page=1&apikey=EXAMPLE_API_KEY"
responseLiquidate = requests.get(urlLiquidate)
dataLiquidate = responseLiquidate.json().get("result", [])
file_root = "../dev.rails.run/data/"
filename = f"{file_root}0x{address}.csv"

if dataLiquidate:
		with open(filename, "a", newline="") as file:
				writer = csv.writer(file)

				for item in dataLiquidate:
						BLOCK_NUMBER = int(item["blockNumber"], 16)
						TIMESTAMP = int(item["timeStamp"], 16) * 1000
						WALLET_ADDRESS = full_address
						TX_HASH = item["transactionHash"]
						OPERATION = "Liquidate"
						PRICE_wstETH_USDC = ""
						TRANSFER_wstETH = (int(item["data"], 16) / 1e18) * -1
						TRANSFER_USDC = ""
						DEBT = ""
						COLLATERAL = ""
						LIQUIDATED_DEBT = ""
						LIQUIDATED_COLLATERAL = ""
						wstETH_BALANCE = ""
						USDC_BALANCE = ""
						TRANSFER_wstETH_USD_VALUE = ""
						COLLATERAL_USD_VALUE = ""
						wstETH_BALANCE_USD_VALUE = ""



						row = (
								BLOCK_NUMBER,
								WALLET_ADDRESS,
								TIMESTAMP,
								TX_HASH,
								OPERATION,
								PRICE_wstETH_USDC,
								TRANSFER_wstETH,
								TRANSFER_USDC,
								COLLATERAL						,
								DEBT,
								wstETH_BALANCE,
								USDC_BALANCE,
								LIQUIDATED_DEBT,
								LIQUIDATED_COLLATERAL,
								TRANSFER_wstETH_USD_VALUE,
								COLLATERAL_USD_VALUE,
								wstETH_BALANCE_USD_VALUE,
								)

						writer.writerow(row)


