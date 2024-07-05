import type { ITabsProps } from '../_types'
import { obCva } from '~/components/_tools'

/**
 * ObTabs - 样式
 */
export default obCva<ITabsProps>('before-box relative flex gap-2 rounded-2xl bg-lightGray p-1.5 text-sm font-bold before:(absolute left-0 rounded-xl bg-black content-empty)', {})

/**
 * ObTabs - Label 样式
 */
export const labelStyle = obCva('z-1 min-w-15 rounded-xl bg-transparent p-(x-2.5 b-2 t-2.3) c-black transition-colors data-[active=true]:(bg-primary c-white)', {})
