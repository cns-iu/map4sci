import jsonlines
import random
import pathlib

def randomize_layout(input: pathlib.Path, output: pathlib.Path) -> None:
    with jsonlines.open(input) as reader, jsonlines.open(output, mode='w') as writer:
        for obj in reader:
            obj["x"] = get_random_coordinate()
            obj["y"] = get_random_coordinate()
            writer.write(obj)

def get_random_coordinate() -> float:
    number = random.randint(-99999999, 99999999)
    number = number / 10**random.randint(1, 8)
    return number
