'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	ArrowRight,
	Sparkles,
	Zap,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export default function ModernHeroSection() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<section id="home" className="relative min-h-screen overflow-hidden pt-32">
			{/* Animated Background */}
			<div className="absolute inset-0">
				{/* Gradient Orbs */}
				<div 
					className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"
					style={{
						left: `25%`,
						top: `15%`,
					}}
				/>
				<div 
					className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"
					style={{
						right: `15%`,
						bottom: `25%`,
						animationDelay: '1s'
					}}
				/>
				
				{/* Grid Pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
				
			</div>

			<div className="relative z-10 container mx-auto px-4 flex items-center">
				<div className="grid lg:grid-cols-2 gap-16 items-center w-full">
					{/* Left Content */}
					<div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
						{/* Badge */}
						<div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
							<Sparkles className="w-5 h-5 mr-3 text-yellow-400" />
							<span className="text-sm font-medium">Türkiye&apos;nin En İnovatif Dijital Ajansı</span>
						</div>
						
						{/* Main Heading */}
						<div className="space-y-6 text-center lg:text-left">
							<h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
								<span className="block">Dijital</span>
								<span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
									Geleceği
								</span>
								<span className="block">Yaratıyoruz</span>
							</h1>
							
							<p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
								{COMPANY_INFO.description} Sıradan çözümler yerine 
								<span className="text-white font-semibold"> devrim niteliğinde </span>
								teknolojiler sunuyoruz.
							</p>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6 pt-8">
							<Link href="/contact" className="w-full sm:w-auto">
								<Button
									size="lg"
									className="group w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl h-auto border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
								>
									<span className="relative z-10 flex items-center">
										Projeni Başlat
										<ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
									</span>
									<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</Button>
							</Link>

							<Link href="/services" className="w-full sm:w-auto">
								<Button
									variant="outline"
									size="lg"
									className="w-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 px-10 py-6 text-lg font-semibold rounded-2xl h-auto hover:border-white/40 transition-all duration-300 cursor-pointer"
								>
									Hizmetleri Keşfet
								</Button>
							</Link>
						</div>

						{/* Quick Stats */}
						<div className="grid grid-cols-3 gap-4 md:gap-8 pt-12">
							<div className="text-center">
								<div className="text-3xl md:text-4xl font-black text-white mb-2">500+</div>
								<div className="text-xs md:text-sm text-gray-400 font-medium">Başarılı Proje</div>
							</div>
							<div className="text-center">
								<div className="text-3xl md:text-4xl font-black text-white mb-2">98%</div>
								<div className="text-xs md:text-sm text-gray-400 font-medium">Memnuniyet</div>
							</div>
							<div className="text-center">
								<div className="text-3xl md:text-4xl font-black text-white mb-2">24/7</div>
								<div className="text-xs md:text-sm text-gray-400 font-medium">Destek</div>
							</div>
						</div>
					</div>

					{/* Right Content - 3D Card */}
					<div className={`relative ${isLoaded ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
						<div className="relative">
							{/* Main Card with 3D Effect */}
							<div 
								className="relative group"
							>
								{/* Glow Effect */}
								<div className="absolute -inset-4 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
								
								{/* Card */}
								<div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
									{/* Card Header */}
									<div className="flex items-center justify-between mb-8">
										<div className="flex items-center space-x-4">
											<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
												<span className="text-white font-black text-2xl">S</span>
											</div>
											<div>
												<h3 className="text-2xl font-bold text-white">Skycer AI</h3>
												<p className="text-gray-300 text-sm">Yapay Zeka Destekli Platform</p>
											</div>
										</div>
										<div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
									</div>
									
									{/* Progress Indicators */}
									<div className="space-y-6">
										<div className="space-y-3">
											<div className="flex justify-between text-sm">
												<span className="text-white font-medium">Web Tasarım</span>
												<span className="text-green-400">100%</span>
											</div>
											<div className="w-full bg-white/10 rounded-full h-2">
												<div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-full animate-pulse" />
											</div>
										</div>
										
										<div className="space-y-3">
											<div className="flex justify-between text-sm">
												<span className="text-white font-medium">SEO Optimizasyonu</span>
												<span className="text-blue-400">85%</span>
											</div>
											<div className="w-full bg-white/10 rounded-full h-2">
												<div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-[85%]" />
											</div>
										</div>
										
										<div className="space-y-3">
											<div className="flex justify-between text-sm">
												<span className="text-white font-medium">AI Chatbot</span>
												<span className="text-purple-400">92%</span>
											</div>
											<div className="w-full bg-white/10 rounded-full h-2">
												<div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full w-[92%]" />
											</div>
										</div>
									</div>

									{/* Bottom Stats */}
									<div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
										<div className="text-center">
											<div className="text-xl font-bold text-white">47</div>
											<div className="text-xs text-gray-400">Aktif Proje</div>
										</div>
										<div className="text-center">
											<div className="text-xl font-bold text-white">12.5k</div>
											<div className="text-xs text-gray-400">Ziyaretçi</div>
										</div>
										<div className="text-center">
											<div className="text-xl font-bold text-white">99.9%</div>
											<div className="text-xs text-gray-400">Uptime</div>
										</div>
									</div>
								</div>
							</div>

							{/* Floating Elements Around Card */}
							<div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
								<Zap className="w-10 h-10 text-white" />
							</div>
							
							<div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
								<Sparkles className="w-8 h-8 text-white" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
				<div className="flex flex-col items-center">
					<span className="text-sm mb-2">Keşfetmeye Devam Et</span>
					<div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
					</div>
				</div>
			</div>
		</section>
	);
} 