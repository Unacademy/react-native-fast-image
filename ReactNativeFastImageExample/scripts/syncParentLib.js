/**
 * Keeps node_modules/react-native-fast-image in sync with the parent repo when using "file:.."
 * (yarn v1 copies the tarball once; native edits would otherwise be stale).
 */
const fs = require('fs')
const path = require('path')

const destRoot = path.join(__dirname, '..', 'node_modules', 'react-native-fast-image')
const srcRoot = path.join(__dirname, '..', '..')

if (!fs.existsSync(destRoot)) {
    process.exit(0)
}

let isLink = false
try {
    isLink = fs.lstatSync(destRoot).isSymbolicLink()
} catch {
    process.exit(0)
}
if (isLink) {
    process.exit(0)
}

function copyDir(rel) {
    const src = path.join(srcRoot, rel)
    const dest = path.join(destRoot, rel)
    if (!fs.existsSync(src)) {
        return
    }
    fs.rmSync(dest, { recursive: true, force: true })
    fs.cpSync(src, dest, { recursive: true })
}

;['android', 'src', 'ios'].forEach(copyDir)
;['package.json', 'RNFastImage.podspec', 'react-native.config.js'].forEach(f => {
    const src = path.join(srcRoot, f)
    const dest = path.join(destRoot, f)
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest)
    }
})
