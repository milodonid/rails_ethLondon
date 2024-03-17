import os
import csv

address = os.environ.get('address')

file_root = "../dev.rails.run/data/"
filename = f"{file_root}0x{address}.csv"
rows_without_empty = []

with open(filename, "r") as file:
    reader = csv.reader(file)
    header = next(reader)
    rows_without_empty.append(header)

    for row in reader:
        # Check if the row is not empty
        if any(row):
            rows_without_empty.append(row)

# Sort the rows by the first column
rows_without_empty.sort(key=lambda x: x[0])

with open(filename, "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(rows_without_empty)

# Remove trailing newline at the end of the file
with open(filename, 'rb+') as file:
    file.seek(-2, os.SEEK_END)
    file.truncate()

print(f"............... 07_remove_empties_and_sort.py")
