import { useEffect, useRef } from 'react'
// callback 回调函数， delay 延迟时间
function useTimeout(callback, delay) {
    const memorizeCallback = useRef()

    useEffect(() => {
        memorizeCallback.current = callback
    }, [callback])

    useEffect(() => {
        if (delay !== null) {
            const timer = setTimeout(() => {
                memorizeCallback.current()
            }, delay)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [delay])
}
