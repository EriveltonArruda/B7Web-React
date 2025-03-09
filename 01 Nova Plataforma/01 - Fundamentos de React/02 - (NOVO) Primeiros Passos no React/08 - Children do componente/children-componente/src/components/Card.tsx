import { ReactNode } from "react";

type Props = {
  // aceitará somente string
  children: string;
}

export const Card = ({ children }: Props) => {
  return (
    <div className="border-2 border-red-600 p-3 text-3xl text-center italic mt-4">
      {children}
    </div>
  )
}

type PropsReactNode = {
  // ReactNode recebe vários tipos
  children: ReactNode;
}

export const CardReactNode = ({ children }: PropsReactNode) => {
  return (
    <div className="w-96 border-2 border-red-600 p-3 text-3xl text-center mt-4">
      {children}
    </div>
  )
}