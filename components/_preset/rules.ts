import type { Rule } from 'unocss'
import type { Obj } from '../_tools'

/**
 * 规则
 */
export default <Rule<Obj>[]>[
  /**
   * temp: content-text-xxx
   * 作用：给content添加内容
   */
  [/^content-text-(.+)$/, match => ({ content: `'${match[1]}'` })],
]
