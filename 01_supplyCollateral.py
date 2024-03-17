import requests
import time
import os
import csv

address = os.environ.get('address')

topicX = f"0x000000000000000000000000{address}"
full_address = f"0x{address}"

# SupplyCollateral

urlSupplyCollateral = f"https://api.etherscan.io/api?module=logs&action=getLogs&topic0=0xa3b9472a1399e17e123f3c2e6586c23e504184d504de59cdaa2b375e880c6184&topic0_1_opr=and&topic1=0xB323495F7E4148BE5643A4EA4A8221EEF163E4BCCFDEDC2A6F4696BAACBC86CC&topic0_3_opr=and&topic3={topicX}&offset=10000&page=1&apikey=EXAMPLE_API_KEY"

responseSupplyCollateral = requests.get(urlSupplyCollateral)
dataSupplyCollateral = responseSupplyCollateral.json().get("result", [])
file_root = "../dev.rails.run/data/"
filename = f"{file_root}0x{address}.csv"

if dataSupplyCollateral:
		with open(filename, "w", newline="") as file:
				writer = csv.writer(file)

				for item in dataSupplyCollateral:
						BLOCK_NUMBER = int(item["blockNumber"], 16)
						TIMESTAMP = int(item["timeStamp"], 16) * 1000
						WALLET_ADDRESS = full_address
						TX_HASH = item["transactionHash"]
						OPERATION = "supplyCollateral"
						PRICE_wstETH_USDC = "0"
						TRANSFER_wstETH = (int(item["data"], 16) / 1e18) * -1
						TRANSFER_USDC = "0"
						COLLATERAL = "0"
						DEBT = "0"
						LIQUIDATED_DEBT = "0"
						LIQUIDATED_COLLATERAL = "0"
						wstETH_BALANCE = "0"
						USDC_BALANCE = "0"
						TRANSFER_wstETH_USD_VALUE = "0"
						COLLATERAL_USD_VALUE = "0"
						wstETH_BALANCE_USD_VALUE = "0"
						TRANSACTION_POSITION = ""



						row = (
								BLOCK_NUMBER,
								WALLET_ADDRESS,
								TIMESTAMP,
								TX_HASH,
								OPERATION,
								PRICE_wstETH_USDC,
								TRANSFER_wstETH,
								TRANSFER_USDC,
								COLLATERAL,
								DEBT,
								LIQUIDATED_COLLATERAL,
								LIQUIDATED_DEBT,
								wstETH_BALANCE,
								USDC_BALANCE,
								TRANSFER_wstETH_USD_VALUE,
								COLLATERAL_USD_VALUE,
								wstETH_BALANCE_USD_VALUE,
								TRANSACTION_POSITION,
								)

						writer.writerow(row)


