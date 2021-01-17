import dirTree = require('directory-tree');

export default (): dirTree.DirectoryTree =>
  dirTree('src/content', {
    extensions: /\.(md|mdx)$/,
  });
