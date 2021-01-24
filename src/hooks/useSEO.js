import { useEffect, useRef } from 'react';

export default function useSEO({title, description, url, ogImage, ogImageAlt, keywords}) {
		
	console.log(keywords);
	const metaNameKeywords			= 'meta[name="keywords"]'
	const metaPropertyOgUrl			= 'meta[property="og:url"]'
	const metaNameDescripcion		= 'meta[name="description"]'
	const metaPropertyOgTitle		= 'meta[property="og:title"]'
	const metaPropertyOgImage		= 'meta[property="og:image"]'
	const metaPropertyOgImageAlt	= 'meta[property="og:image:alt"]'
	const metaPropertyOgDescripcion = 'meta[property="og:description"]'
	
	const prevDesc		 = useRef(document.querySelector(metaNameDescripcion).getAttribute('content'))
	const prevTitle		 = useRef(document.title)
	const prevOgUrl		 = useRef(document.querySelector(metaPropertyOgUrl).getAttribute('content'))
	const prevOgDesc	 = useRef(document.querySelector(metaPropertyOgDescripcion).getAttribute('content'))
	const prevOgTitle	 = useRef(document.querySelector(metaPropertyOgTitle).getAttribute('content'))
	const prevOgImage	 = useRef(document.querySelector(metaPropertyOgImage).getAttribute('content'))
	const prevKeywords	 = useRef(document.querySelector(metaNameKeywords).getAttribute('content'))
	const prevOgImageAlt = useRef(document.querySelector(metaPropertyOgImageAlt).getAttribute('content'))
	
    useEffect(() => {
		const previousTitle   = prevTitle.current
		const previousOgTitle = prevOgTitle.current
		
		const metaOgTitle = document.querySelector(metaPropertyOgTitle)
		if (title) {
			document.title = `${title} | Electrobat`
			metaOgTitle.setAttribute('content', title)
		}
		
		return () => {
			document.title = previousTitle
			metaOgTitle.setAttribute('content', previousOgTitle)
		}
    }, [title])
	
    useEffect(() => {
		const previousDesc	 = prevDesc.current
		const previousOgDesc = prevOgDesc.current
		
		const metaDescripcion = document.querySelector(metaNameDescripcion)
		const metaOgDesc	  = document.querySelector(metaPropertyOgDescripcion)
		
		if (description) {
			metaDescripcion.setAttribute('content', description)
			metaOgDesc.setAttribute('content', description)
		}
		return () => {
			metaDescripcion.setAttribute('content', previousDesc)
			metaOgDesc.setAttribute('content', previousOgDesc)
		}
    }, [description])
	
	useEffect(() => {
		const previousOgUrl = prevOgUrl.current
		
		const metaOgUrl = document.querySelector(metaPropertyOgUrl)
		
		if (url) {
			metaOgUrl.setAttribute('content', url)
		}
		return () => metaOgUrl.setAttribute('content', previousOgUrl)
    }, [url])
	
	useEffect(() => {
		const previousOgImage = prevOgImage.current
		
		const metaOgImage = document.querySelector(metaPropertyOgImage)
		
		if (ogImage) {
			metaOgImage.setAttribute('content', ogImage)
		}
		return () => metaOgImage.setAttribute('content', previousOgImage)
    }, [ogImage])
	
	useEffect(() => {
		const previousOgImageAlt = prevOgImageAlt.current
		
		const metaOgImageAlt = document.querySelector(metaPropertyOgImageAlt)
		
		if (ogImageAlt) {
			metaOgImageAlt.setAttribute('content', ogImageAlt)
		}
		return () => metaOgImageAlt.setAttribute('content', previousOgImageAlt)
    }, [ogImageAlt])
	
	useEffect(() => {
		const previousKeywords = prevKeywords.current
		
		const metaKeywords = document.querySelector(metaNameKeywords)
		
		if (keywords) {
			metaKeywords.setAttribute('content', keywords)
		}
		return () => metaKeywords.setAttribute('content', previousKeywords)
    }, [keywords])
}