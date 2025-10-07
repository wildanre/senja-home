import Image from 'next/image';
import { BACKGROUND_PATTERNS, SHADOW_PATTERNS } from '@/utils/styles';

export default function Partner() {
  return (
    <section id="partners" className={`py-20 px-4 ${BACKGROUND_PATTERNS.primary}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-senja-brown dark:text-[#e8f0f7]">
          Our Partners
        </h2>
        
        <div className="flex flex-col items-center space-y-12">
          {/* Kaia Logo - Largest */}
          <div className="flex justify-center">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 ${SHADOW_PATTERNS.lg} transition-shadow duration-300`}>
              <Image 
                src="/kaia-logo.svg" 
                alt="Kaia" 
                width={120}
                height={96}
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
          </div>
          
          {/* Other Partners - Smaller */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
            {/* Base */}
            <div className="flex justify-center">
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 ${SHADOW_PATTERNS.md} transition-shadow duration-300 w-full flex items-center justify-center min-h-[100px]`}>
                <Image 
                  src="/base.png" 
                  alt="Base" 
                  width={80}
                  height={56}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </div>
            </div>
            
            {/* Hyperliquid */}
            <div className="flex justify-center">
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 ${SHADOW_PATTERNS.md} transition-shadow duration-300 w-full flex items-center justify-center min-h-[100px]`}>
                <Image 
                  src="/hyper-evm.png" 
                  alt="Hyperliquid" 
                  width={80}
                  height={56}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </div>
            </div>
            
            {/* Optimism */}
            <div className="flex justify-center">
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 ${SHADOW_PATTERNS.md} transition-shadow duration-300 w-full flex items-center justify-center min-h-[100px]`}>
                <Image 
                  src="/optimism-logo.svg" 
                  alt="Optimism" 
                  width={80}
                  height={56}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </div>
            </div>
            
            {/* LayerZero */}
            <div className="flex justify-center">
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 ${SHADOW_PATTERNS.md} transition-shadow duration-300 w-full flex items-center justify-center min-h-[100px]`}>
                <Image 
                  src="/layerzero.png" 
                  alt="LayerZero" 
                  width={80}
                  height={56}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}