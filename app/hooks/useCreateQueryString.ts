import { useSearchParams } from "next/navigation"
import { useCallback } from "react"

export const useCreateQueryString = ()=> {
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string, checked:boolean) => {
          const params = new URLSearchParams(searchParams.toString());
          if(value && checked) {
              params.set(name, value);
          } else {
            params.delete(name);
          }
     
          return params.toString()
        },
        [searchParams]
      )

    return { createQueryString, searchParams }
}