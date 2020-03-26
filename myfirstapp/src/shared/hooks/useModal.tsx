import { useState, Dispatch, SetStateAction } from "react"

export type HookUseModal = (initialMode: boolean) => [boolean, Dispatch<SetStateAction<boolean>>, () => void]

export const useModal: HookUseModal = (initialMode = false) => {
  const [isOpened, setIsOpened] = useState(initialMode);
  const toggle = () => setIsOpened(!isOpened)

  return [ isOpened, setIsOpened, toggle ]
}