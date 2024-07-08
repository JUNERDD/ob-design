import { obCva } from 'ob-tools'
import type { ICardProps } from '../_types'

/**
 * ObCard - 样式
 */
export default obCva<ICardProps>('p-6 flex flex-col gap-5 rounded-max bg-lightGray items-start')

/**
 * ObCard - iconBox 样式
 */
export const iconBoxStyle = 'p-2 bg-primary rounded-small aspect-square'

/**
 * ObCard - icon 样式
 */
export const iconStyle = 'c-white'

/**
 * ObCard - contentBox 样式
 */
export const contentBoxStyle = 'flex flex-col gap-2 font-bold'

/**
 * ObCard - title 样式
 */
export const titleStyle = 'text-lg'

/**
 * ObCard - text 样式
 */
export const textStyle = ''
