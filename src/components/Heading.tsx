interface HeadingProps {
  title: string
  subtitle: string
}

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="flex flex-col items-center space-y-3 text-center">
      <h2 className="text-xl">{title}</h2>
      <span className="block h-[2px] w-72 rounded-md bg-yellow-400"></span>
      <h3 className="font-cursive text-2xl font-bold text-yellow-400">
        {subtitle}
      </h3>
    </div>
  )
}
