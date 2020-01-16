from src.mkdocs_macros import common, javascript, vega, back_compat

class SubEnvironment:
    def __init__(self, name, parent):
        self.name = name
        self.parent = parent
        self.variables = self.parent.variables[name] = {}

    @property
    def conf(self):
        return self.parent.conf

    @property
    def filters(self):
        return self.parent.filters

    @property
    def project_dir(self):
        return self.parent.project_dir

    def macro(self, func, name=None):
        name = name or func.__name__
        self.variables[name] = func
        return func

    def filter(self, func, name=None):
        return self.parent.filter(func, name)

def define_env(env):
    # Add backward compatibility methods
    back_compat.declare_variables(env.variables, env.macro)

    common.define_env(env)
    javascript.define_env(SubEnvironment('js', env))
    vega.define_env(SubEnvironment('vega', env))
