import React from "react"
import ReactDOM from "react-dom/client"
import Loading from "@/components/Loading"

let needLoadingRequestCount = 0

// * 显示loading
export const showFullScreenLoading = (): void => {
	if (needLoadingRequestCount === 0) {
		let dom = document.createElement("div")
		dom.setAttribute("id", "loading")
		document.body.appendChild(dom)
		ReactDOM.createRoot(dom).render(<Loading />)
	}
	needLoadingRequestCount++
}

// * 隐藏loading
export const tryHideFullScreenLoading = (): void => {
	if (needLoadingRequestCount <= 0) return
	needLoadingRequestCount--
	if (needLoadingRequestCount === 0) {
		const loadingElement = document.getElementById("loading")
		if (loadingElement && document.body.contains(loadingElement)) {
			document.body.removeChild(loadingElement)
		}
	}
}
