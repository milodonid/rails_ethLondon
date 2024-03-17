import requests
import time
import os
import csv

address = os.environ.get('address')

topicX = f"0x000000000000000000000000{address}"
full_address = f"0x{address}"

# RepayDebt
time.sleep(2)

urlRepayDebt = f"https://api.etherscan.io/api?module=logs&action=getLogs&topic0=0x52acb05cebbd3cd39715469f22afbf5a17496295ef3bc9bb5944056c63ccaa09&topic0_1_opr=and&topic1=0xB323495F7E4148BE5643A4EA4A8221EEF163E4BCCFDEDC2A6F4696BAACBC86CC&topic0_3_opr=and&topic3={topicX}&offset=10000&page=1&apikey=EXAMPLE_API_KEY"

responseRepayDebt = requests.get(urlRepayDebt)
dataRepayDebt = responseRepayDebt.json().get("result", [])
file_root = "../dev.rails.run/data/"
filename = f"{file_root}0x{address}.csv"



if dataRepayDebt:
		with open(filename, "a", newline="") as file:
				writer = csv.writer(file)

				for item in dataRepayDebt:
						BLOCK_NUMBER = int(item["blockNumber"], 16)
						TIMESTAMP = int(item["timeStamp"], 16) * 1000
						WALLET_ADDRESS = full_address
						TX_HASH = item["transactionHash"]
						OPERATION = "repayDebt"
						PRICE_wstETH_USDC = "0"
						TRANSFER_wstETH = "0"
						TRANSFER_USDC = (int(item["data"][0:66], 16)) / 1000000 * -1
						COLLATERAL = "0"
						DEBT = "0"
						LIQUIDATED_DEBT = "0"
						LIQUIDATED_COLLATERAL = "0"
						wstETH_BALANCE = "0"
						USDC_BALANCE = "0"
						TRANSFER_wstETH_USD_VALUE = "0"
						COLLATERAL_USD_VALUE = "0"
						wstETH_BALANCE_USD_VALUE = "0"



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
								LIQUIDATED_DEBT,
								LIQUIDATED_COLLATERAL,
								wstETH_BALANCE,
								USDC_BALANCE,
								TRANSFER_wstETH_USD_VALUE,
								COLLATERAL_USD_VALUE,
								wstETH_BALANCE_USD_VALUE,
								)

						writer.writerow(row)

