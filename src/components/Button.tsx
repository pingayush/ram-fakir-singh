import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { clsx } from 'clsx'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = PropsWithChildren<{
  variant?: Variant
  size?: Size
  className?: string
}> & ButtonHTMLAttributes<HTMLButtonElement>

const base = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed'

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-accent text-white hover:bg-amber-600 focus:ring-amber-500',
  outline: 'border border-gray-300 text-gray-800 hover:bg-gray-50 focus:ring-primary-500',
  ghost: 'text-primary-700 hover:bg-primary-50 focus:ring-primary-500'
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base'
}

export default function Button({ variant = 'primary', size = 'md', className, children, ...rest }: ButtonProps) {
  return (
    <button className={clsx(base, variantStyles[variant], sizeStyles[size], className)} {...rest}>
      {children}
    </button>
  )
}


