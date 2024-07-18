import { obCva } from 'ob-tools'
import type { ICardProps } from '../_types'

/**
 * ObCard - 样式
 */
export default obCva<ICardProps>('p-6 flex flex-col gap-5 rounded-max border border-mediumGray bg-lightGray items-start')

/**
 * ObCard - iconBox 样式
 */
export const iconBoxStyle = 'w-8 flex justify-center items-center bg-primary rounded-small c-white aspect-square'

/**
 * ObCard - icon 样式
 */
export const iconStyle = ''

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
