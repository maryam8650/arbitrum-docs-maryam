const glob = require('glob')
const { readFile, writeFile, unlink, renameSync } = require('fs')

glob('../arbitrum-sdk/docs/**/*', function (err, res) {
  if (err) {
    console.log('Error', err)
  } else {
    for (const path of res) {
      if (!path.endsWith('.md')) continue

      // Remove README file
      if (path.includes('README.md')) {
        unlink(path, function (err) {
          if (err) {
            console.log(err)
            return
          }
        })
        continue
      }

      // Set the new index file
      // The 01- prefix tells docusaurus to set this page as the first one in the
      // sidebar menu
      // https://docusaurus.io/docs/sidebar/autogenerated#using-number-prefixes
      if (path.includes('modules.md')) {
        renameSync(path, path.replace('modules', '01-index'), function (err) {
          if (err) {
            console.log(err)
            return
          }
        })
        continue
      }

      // Traverse all files
      readFile(path, 'utf-8', function (err, contents) {
        if (err) {
          console.log(err)
          return
        }

        // Fix JSX md rendering breaking tags (only <T> tags break docusaurus, so we keep the rest):
        // const replaced = contents.replace(/</g, '&lt;').replace(/>/g, '&gt;')
        const replaced = contents.replace(/<T>/g, '&lt;T&gt;')
        writeFile(path, replaced, 'utf-8', function (err) {
          if (err) console.warn('Error', err)
        })
      })
    }
  }
})
