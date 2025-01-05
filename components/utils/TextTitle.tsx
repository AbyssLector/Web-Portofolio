import { NextPage } from 'next'

interface Props {
    children:string,
    className?:string
}

const TextTitle: NextPage<Props> = ({children, className = ''}) => {
  return  <p className={'text-center sm:text-left font-bold text-bitWhite text-xl ' + className}>{children}</p>
}

export default TextTitle