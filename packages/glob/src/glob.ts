import * as core from '@actions/core'
import {Globber, DefaultGlobber} from './internal-globber'
import {GlobOptions} from './internal-glob-options'

export {Globber, GlobOptions}

/**
 * Contructs a globber from an input
 *
 * @param name  Name of the input
 */
export async function getInput(
  name: string,
  options?: core.InputOptions
): Promise<Globber> {
  const input = core.getInput(name, options)
  return await DefaultGlobber.parse(input)
}

/**
 * Constructs a globber
 *
 * @param patterns  Patterns separated by newlines
 */
export async function parse(patterns: string): Promise<Globber> {
  return await DefaultGlobber.parse(patterns)
}

// ```
// jobs:
//   foo:
//     steps:
//       - uses: actions/upload-artifact@v1
//         with:
//           path: |
//             --follow-symbolic-links
//             **/*.tar.gz
//       - uses: actions/cache@v1
//         with:
//           hash: ${{ hashFiles('--follow-symbolic-links', '**/package-lock.json') }}
// ```
