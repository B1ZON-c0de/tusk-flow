interface Props{
  label: string,
  span?: string
}

const BaseAppHeader = ({ label, span }: Props) => {
  return (
    <h1 className="uppercase text-5xl">{ label }<span className="text-app-accent-light dark:text-app-accent-dark">{ span }</span>
    </h1>
  )
}
export default BaseAppHeader
