import csv
import os

address = os.environ.get('address')
file_root = "../dev.rails.run/data/"
filename = f"{file_root}0x{address}.csv"

with open(filename, 'r', newline='') as csv_file:
    csv_reader = csv.reader(csv_file)
    rows = list(csv_reader)

# Modify the last row to add "last" to the last element
if rows:
    first_row = rows[0]
    first_row[16] = "first" 
    last_row = rows[-1]
    last_row[16] = "last"

# Write the modified data back to the same file
with open(filename, 'w', newline='') as csv_output:
    csv_writer = csv.writer(csv_output)
    csv_writer.writerows(rows)

print("............... edit_TRANSACTION_POSITION.py")
