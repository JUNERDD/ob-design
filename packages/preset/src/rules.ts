import type { Rule } from 'unocss'

/**
 * 规则
 */
export default <Rule<object>[]>[
  /**
   * temp: content-text-xxx
   * 作用：给content添加内容
   */
  [/^content-text-(.+)$/, match => ({ content: `'${match[1]}'` })],
]
