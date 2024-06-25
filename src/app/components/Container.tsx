'use client'
import {FC, ReactElement, ReactNode} from "react";

export interface ContainerProps{
    children:ReactElement | ReactNode
}
export const Container :FC<ContainerProps>= ({children}) => {
    return(
      <div className="
          max-w-[1260px]
          mx-auto
          xl:px-10
          md:px-10
          sm:px-2
          px-4
          ">
            {children}
  
      </div>
    )
  }
  