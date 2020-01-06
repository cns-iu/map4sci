import json

# Utility
def _multiline(*lines):
  return '\n'.join(map(str, filter(lambda val: val is not None, lines)))


# Reg
def declare_variables(variables, macro):
  # Common functionality
  if 'source_prefix' not in variables:
    variables['source_prefix'] = ''

  @macro
  def source_tag(type_, path, prefix = True):
    prefix = variables['source_prefix'] if prefix else ''
    return f'([Source { type_ } File]({ prefix }{ path }))'

  counter = -1
  @macro
  def unique(prefix = ''):
    nonlocal counter
    counter += 1
    return f'{ prefix }{ counter }'

  # Sql functionality
  @macro
  def format_sql(sql):
    return f'```sql\n{ sql }\n```'

  @macro
  def include_sql(file, source = True, prefix = True):
    with open(file) as text:
      return _multiline(
        format_sql(text.read()),
        source_tag('SQL', file, prefix) if source else None
      )

  # Mav Embed functionality
  variables['mav_embed_script_tags'] = _multiline(
    '<script src="https://cdn.jsdelivr.net/npm/@dvl-fw/mav-embed@0.3.2/main-es5.js" nomodule></script>',
    '<script src="https://cdn.jsdelivr.net/npm/@dvl-fw/mav-embed@0.3.2/main-es2015.js" type="module"></script>'
  )

  @macro
  def include_mav_embed_project(id, href):
    return f'<mav-project id="{ id }" href="{ href }"></mav-project>'

  @macro
  def include_mav_embed_vis(pid, index = 0, height = '500px'):
    return _multiline(
      f'<div style="height: { height }; margin: 20px">',
      f'  <mav-visualization project="#{ pid }" index="{ index }"></mav-visualization>',
      f'</div>'
    )

  @macro
  def include_mav_embed_legend(pid, orientation = 'horizontal', advanced = True):
    advanced_str = str(bool(advanced)).lower()
    return _multiline(
      f'<div style="height: 300px; overflow-x: scroll">',
      f'  <mav-legend project="#{ pid }" orientation="{ orientation }" advanced="{ advanced_str }"></mav-legend>',
      f'</div>'
    )

  @macro
  def include_mav_embed(href, index = 0, height = '500px', orientation = 'horizontal', advanced = True, source = True, prefix = False):
    pid = unique('mav-embed-proj-id')
    return _multiline(
      include_mav_embed_project(pid, href),
      include_mav_embed_vis(pid, index, height),
      include_mav_embed_legend(pid, orientation, advanced),
      source_tag('Project YML', href, prefix) if source else None
    )

  # Vega functionality
  variables['vega_script_tags'] = _multiline(
    '<script src="https://cdn.jsdelivr.net/npm/vega@5"></script>'
    '<script src="https://cdn.jsdelivr.net/npm/vega-lite@4"></script>'
    '<script src="https://cdn.jsdelivr.net/npm/vega-embed@6"></script>'
  )

  @macro
  def include_vega(spec, opt = None):
    vid = unique('vega-embed-id')
    json_spec = json.dumps(spec, separators=(',', ':'))
    opts = { 'rendered': 'canvas', 'actions': False, **(opt or {}) }
    json_opts = json.dumps(opts, separators=(',', ':'))

    return _multiline(
      f'<div id="{ vid }"></div>',
      f'<script type="text/javascript">',
      f'  vegaEmbed("#{ vid }", JSON.parse(\'{ json_spec }\'), JSON.parse(\'{ json_opts }\'));',
      f'</script>'
    )

  @macro
  def include_vega_ext(url, opt = None):
    vid = unique('vega-embed-id')
    opts = { 'renderer': 'canvas', 'actions': False, **(opt or {}) }
    json_opts = json.dumps(opts, separators=(',', ':'))

    return _multiline(
      f'<div id="{ vid }"></div>',
      f'<script type="text/javascript">',
      f'  vegaEmbed("#{ vid }", "{ url }", JSON.parse(\'{ json_opts }\'));',
      f'</script>'
    )
