# Title Pending

## Thoughts behind the component directory structure

There are two approaches I've seen for composing components.

1. A component, with sub-components, living within the same file.
2. Have a component with sub-components in different files, exported, and the main component in the index file.

While I am currently unsure which approach is "preferred" or "more optimal", I lean towards the second option.

For smaller components, or when sub-components are not used elsewhere, the first approach might be better.
However, exporting does not hurt, because the folder structure should keep things organized and understandable.
