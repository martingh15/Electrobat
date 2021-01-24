import { useEffect, useRef } from 'react';

export default function useSEO({title, description}) {
	const meta		= 'meta[name="description"]';
	const prevTitle = useRef(document.title)
	const prevDesc  = useRef(document.querySelector(meta).getAttribute('content'))
	
    useEffect(() => {
		const previousTitle = prevTitle.current
		if (title) {
			document.title = `${title} | Electrobat`
		}
		
		return () => document.title = previousTitle
    }, [title])
	
    useEffect(() => {
		const previousDesc = prevDesc.current
		const metaDescripcion = document.querySelector(meta)
		if (description) {
			metaDescripcion.setAttribute('content', description)
		}
		return () => metaDescripcion.setAttribute('content', previousDesc)
    }, [description])
}