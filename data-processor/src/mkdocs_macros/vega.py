import json

from src.mkdocs_macros import common, javascript as js


DEFAULT_VEGA_OPTIONS = { 'renderer': 'canvas', 'actions': True }


def options_to_javascript(opts):
    return js.to_js({ **DEFAULT_VEGA_OPTIONS, **(opts or {}) })

def create_vega_script(source, opts):
    elem_id = common.unique('vega-elem-')
    sopts = options_to_javascript(opts)
    content = common.indent(f'vegaEmbed("#{elem_id}", {source}, {sopts});', 2)
    return common.multiline(
        f'<div id="{elem_id}"></div>',
        js.start(),
        content,
        js.end()
    )


def header():
    return common.multiline(
        js.include('https://cdn.jsdelivr.net/npm/vega@5.4.0'),
        js.include('https://cdn.jsdelivr.net/npm/vega-lite@3.3.0'),
        js.include('https://cdn.jsdelivr.net/npm/vega-embed@4.2.0')
    )

def include(path, opts=None):
    return create_vega_script(f'"{path}"', opts)

def embed(path, opts=None):
    with open(path) as file:
        return create_vega_script(file.read(), opts)


def define_env(env):
    env.macro(header)
    env.macro(include)
    env.macro(embed)
