import path from 'path'
import fs from 'fs'

const ROOT = process.cwd()
const configPath = path.join(ROOT, 'turbo-serv.json')

const configDefault = { static: { dir: 'public' } }
const sessionDefault = { store: 'memory' }

let config
try {
  config = fs.readFileSync(configPath)
  config = JSON.parse(config)
} catch (e) {
  console.log('Parser Error in config file')
  config = configDefault
  config.session = sessionDefault
}

config.ROOT = ROOT

export default config
