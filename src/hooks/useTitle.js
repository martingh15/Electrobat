import { useEffect, useRef } from 'react';

export default function useTitle({ title }) {
	const prevTitle = useRef(document.title)
	
    useEffect(() => {
		const previousTitle = prevTitle.current		
        document.title = `${title} | Electrobat`
		
		return () => document.title = previousTitle
    }, [title])
}