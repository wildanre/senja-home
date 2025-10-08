import Image from 'next/image';
import Link from 'next/link';
import { BACKGROUND_PATTERNS } from '@/utils/styles';

export default function Partner() {
  return (
    <section id="partners" className={`py-20 px-4 ${BACKGROUND_PATTERNS.primary}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-senja-brown dark:text-[#e8f0f7]">
          Partnership
        </h2>
        
        <div className="flex flex-col items-center space-y-12">
          {/* Kaia Logo - Largest */}
          <div className="flex justify-center">
            <Link 
              href="https://docs.kaia.io/" 
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <Image 
                src="/kaia-logo.svg" 
                alt="Kaia" 
                width={120}
                height={96}
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>
          </div>
          
          {/* Other Partners - Smaller */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
            {/* Base */}
            <div className="flex justify-center">
              <Link 
                href="https://base.org/" 
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image 
                  src="/base.png" 
                  alt="Base" 
                  width={80}
                  height={56}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </Link>
            </div>
            
            {/* Hyperliquid */}
            <div className="flex justify-center">
              <Link 
                href="https://hyperliquid.xyz/" 
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image 
                  src="/hyper-evm.png" 
                  alt="Hyperliquid" 
                  width={80}
                  height={56}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </Link>
            </div>
            
            {/* Optimism */}
            <div className="flex justify-center">
              <Link 
                href="https://optimism.io/" 
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image 
                  src="/optimism-logo.svg" 
                  alt="Optimism" 
                  width={80}
                  height={56}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </Link>
            </div>
            
            {/* LayerZero */}
            <div className="flex justify-center">
              <Link 
                href="https://layerzero.network/" 
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image 
                  src="/layerzero.png" 
                  alt="LayerZero" 
                  width={80}
                  height={56}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}