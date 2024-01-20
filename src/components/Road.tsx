import { PropsWithChildren } from "react"

export const Road = ({ children }: PropsWithChildren) => {
  return (
    <div className="road relative w-[300px] max-w-full h-screen bg-[#808080] py-0 px-12 overflow-hidden">
        {children}
    </div>
  )
}

