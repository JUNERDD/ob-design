import type { HTMLAttributes } from 'vue'
import type { ClassValue } from 'class-variance-authority/types'
import type { ICommonProps } from '../../../index'

/**
 * ObCard - 内容参数
 */
export interface ICardContent {
  /**
   * 图标
   */
  icon?: string
  /**
   * 标题
   */
  title?: string
  /**
   * 内容
   */
  text?: string
  /**
   * 图标盒子样式
   */
}

/**
 * ObCard - 参数类型
 */
export interface ICardProps extends ICardContent, ICommonProps, /* @vue-ignore */ Omit<HTMLAttributes, 'class'> {
  iconBoxClass?: ClassValue
  /**
   * 图标样式
   */
  iconClass?: ClassValue
  /* 内容盒子样式 */
  contentBoxClass?: ClassValue
  /**
   * 标题样式
   */
  titleClass?: ClassValue
  /**
   * 内容样式
   */
  textClass?: ClassValue
}
