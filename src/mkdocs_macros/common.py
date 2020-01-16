import itertools
import pathlib
import uuid


def interleave(*iterables):
    for item in zip(*iterables):
        yield from item

def unique(prefix=''):
    return f'{prefix}{uuid.uuid4().int}'

def multiline(*lines):
    return '\n'.join(str(line) for line in lines if line is not None)

def indent(text, indt=4):
    if indt == 0: return text
    prefix = indt * ' '
    lines = text.splitlines(keepends=True)
    return ''.join(interleave(itertools.repeat(prefix), lines))


def embed_file(path):
    with open(path) as file:
        return file.read()

def embed_code(path, type_=None):
    if type_ is None:
        type_ = pathlib.PurePath(path).suffix[1:]
    return multiline(
        f'```{type_}',
        f'{embed_file(path)}',
        f'```'
    )


def define_env(env):
    env.macro(unique)
    env.macro(multiline)
    env.macro(indent)
    env.macro(embed_file)
    env.macro(embed_code)
