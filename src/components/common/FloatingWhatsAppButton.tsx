'use client';

import Link from 'next/link';
import WhatsappIcon from '@/components/icons/WhatsappIcon';
import { useEffect, useState } from 'react';

const FloatingWhatsAppButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 1000); // 1 saniye sonra görünür yap

		return () => clearTimeout(timer);
	}, []);

	const whatsappLink =
		'https://wa.me/905458107460?text=Merhabalar%20fiyat%20teklifi%20almak%20istiyorum';

	return (
		<div
			className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out ${
				isVisible
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-5'
			}`}
		>
			<Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
				<div className="relative group">
					<div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
					<div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
						<WhatsappIcon className="w-8 h-8 text-white" />
					</div>
				</div>
			</Link>
		</div>
	);
};

export default FloatingWhatsAppButton; 