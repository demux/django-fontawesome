import os
import yaml
from collections import defaultdict

PATH = os.path.join(os.path.dirname(__file__), 'icons.yml')

def get_icon_choices():
    categories = defaultdict(list)

    with open(PATH) as f:
        icons = yaml.load(f)

        for icon in icons.get('icons'):
            categories[icon['categories'][0]].append((
                icon.get('id'),
                icon.get('name')
            ))

    return categories.items()