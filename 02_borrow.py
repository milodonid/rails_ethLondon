import time
import requests
import os
import csv

address = os.environ.get('address')

topicX = f"0x000000000000000000000000{address}"
full_address = f"0x{address}"
time.sleep(2)

urlBorrow = f"https://api.etherscan.io/api?module=logs&action=getLogs&topic0=0x570954540bed6b1304a87dfe815a5eda4a648f7097a16240dcd85c9b5fd42a43&topic0_1_opr=and&topic1=0xB323495F7E4148BE5643A4EA4A8221EEF163E4BCCFDEDC2A6F4696BAACBC86CC&topic0_2_opr=and&topic2={topicX}&topic0_3_opr=and&topic3={topicX}&offset=10000&page=1&apikey=EXAMPLE_API_KEY"

responseBorrow = requests.get(urlBorrow)
dataBorrow = responseBorrow.json().get("result", [])
file_root = "../dev.rails.run/data/"
filename = f"{file_root}0x{address}.csv"

# Read existing CSV data
existing_data = []
if os.path.exists(filename):
    with open(filename, "r") as file:
        reader = csv.reader(file)
        existing_data = list(reader)

# Update existing rows with new data
for item in dataBorrow:
    TX_HASH = item["transactionHash"]
    for row in existing_data:
        if row and row[3] == TX_HASH:
            row[7] = int(item["data"][67:130], 16) / 1000000
            row[4] = "supplyAndBorrow"
            break
    else:  # If TX_HASH not found, add new row
        BLOCK_NUMBER = int(item["blockNumber"], 16)
        TIMESTAMP = int(item["timeStamp"], 16) * 1000
        WALLET_ADDRESS = full_address
        TX_HASH = item["transactionHash"]
        OPERATION = "borrow"
        PRICE_wstETH_USDC = "0"
        TRANSFER_wstETH = "0"
        TRANSFER_USDC = int(item["data"][67:130], 16) / 1000000
        COLLATERAL = "0"
        DEBT = "0"
        wstETH_BALANCE = "0"
        USDC_BALANCE = "0"
        LIQUIDATED_DEBT = "0"
        LIQUIDATED_COLLATERAL = "0"
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
            wstETH_BALANCE,
            USDC_BALANCE,
            LIQUIDATED_DEBT,
            LIQUIDATED_COLLATERAL,
            TRANSFER_wstETH_USD_VALUE,
            COLLATERAL_USD_VALUE,
            wstETH_BALANCE_USD_VALUE,
        )
        existing_data.append(row)

# Write all data back to the CSV file
with open(filename, "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(existing_data)
