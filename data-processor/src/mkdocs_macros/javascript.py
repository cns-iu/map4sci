from src.mkdocs_macros import common


class Raw(str):
    def __repr__(self):
        return self

class Identifier(Raw):
    pass


def to_js(obj):
    if obj is True:
        return 'true'
    elif obj is False:
        return 'false'
    elif isinstance(obj, (tuple, list)):
        return '[' + ', '.join(map(to_js, obj)) + ']'
    elif isinstance(obj, dict):
        return '{ ' + ', '.join('"' + str(k) + '": ' + to_js(v) for k, v in obj.items()) + ' }'
    elif isinstance(obj, Raw):
        return obj
    else:
        return '"' + obj + '"'


def start():
    return '<script type="text/javascript">'

def end():
    return '</script>'


def include(path):
    return f'<script src="{path}"></script>'

def embed(path, idnt=2):
    return common.multiline(
        start(),
        common.indent(common.embed_file(path), idnt),
        end()
    )


def define_env(env):
    env.variables['Raw'] = Raw
    env.variables['Identifier'] = Identifier
    env.macro(to_js)
    env.macro(start)
    env.macro(end)
    env.macro(include)
    env.macro(embed)
