import React, { useState, useEffect, useRef, useCallback } from 'react'

// export default function useHover() {
//   const [value, setValue] = useState(false)
//   const ref = useRef(null)
//   const handleMouseOver = () => setValue(true)
//   const handleMouseOut = () => setValue(false)
//   useEffect(
//     () => {
//       const node = ref.current
//       if (node) {
//         node.addEventListener('mouseover', handleMouseOver)
//         node.addEventListener('mouseout', handleMouseOut)
//         return () => {
//           node.removeEventListener('mouseover', handleMouseOver)
//           node.removeEventListener('mouseout', handleMouseOut)
//         }
//       }
//     },
//     [ref.current] // Recall only if ref changes
//   )
//   return [ref, value]
// }

export default function useHover() {
  const [value, setValue] = useState(false)

  // Wrap in useCallback so we can use in dependencies below
  const handleMouseOver = useCallback(() => setValue(true), [])
  const handleMouseOut = useCallback(() => setValue(false), [])

  // Keep track of the last node passed to callbackRef
  // so we can remove its event listeners.
  const ref = useRef()

  // Use a callback ref instead of useEffect so that event listeners
  // get changed in the case that the returned ref gets added to
  // a different element later. With useEffect, changes to ref.current
  // wouldn't cause a rerender and thus the effect would run again.
  const callbackRef = useCallback(
    (node) => {
    //   if (ref.current) {
    //     ref.current.removeEventListener('mouseover', handleMouseOver)
    //     ref.current.removeEventListener('mouseout', handleMouseOut)
    //   }

      ref.current = node

      if (ref.current) {
        ref.current.addEventListener('mouseover', handleMouseOver)
        ref.current.addEventListener('mouseout', handleMouseOut)
      }
    },
    [handleMouseOver, handleMouseOut]
  )

  return [callbackRef, value]
}
