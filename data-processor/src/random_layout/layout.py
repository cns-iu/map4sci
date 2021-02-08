import jsonlines

def randomize_layout(input, output) -> None:
    with jsonlines.open(input) as reader, jsonlines.open(output, mode='w') as writer:
        for obj in reader:
            # assign random position
            # ensure they are spread somewhat
            writer.write(obj)

# read json file, for each object create random coordinates
# write that into a new file
# input and output files should be arguments
# create test file ndjson; each line should be empty object 20 or so.
# { x: 0, y:0 }