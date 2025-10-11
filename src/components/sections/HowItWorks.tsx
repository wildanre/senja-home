'use client';
import Carousel from "../ui/carousel";
import { BACKGROUND_PATTERNS } from '@/utils/styles';

interface SlideData {
  title: string;
  description: string;
  src: string;
}

// Data slides untuk How It Works
const createSlideData = (): SlideData[] => [
  {
    title: "Supply Liquidity",
    description: `
      <div class="space-y-4 text-white/90 dark:text-[#d0dce6]">
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Connect Wallet</h4>
          <p>Users connect their wallet on the Senja LINE Mini App.</p>
        </div>
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Provide Liquidity</h4>
          <p>Users provide liquidity to earn yields from lending activities.</p>
        </div>
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Earn Rewards</h4>
          <p><strong class="text-white dark:text-[#e8f0f7]">Lending Yields:</strong> Earn from borrower interest payments</p>
          <p><strong class="text-white dark:text-[#e8f0f7]">Liquidity Mining:</strong> Additional rewards from protocol incentives</p>
        </div>
      </div>
    `,
    src: "/how/supply-liquidity.png",
  },
  {
    title: "Supply Collateral",
    description: `
      <div class="space-y-4 text-white/90 dark:text-[#d0dce6]">
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Connect Wallet</h4>
          <p>Users connect their wallet on the Senja LINE Mini App.</p>
        </div>
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Supply Collateral</h4>
          <p>Users supply collateral to secure their borrowing position.</p>
        </div>
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Select Chain and Token</h4>
          <p><strong class="text-white dark:text-[#e8f0f7]">Kaia Network:</strong> Token directly deposited into Senja's pool, user position created</p>
          <p><strong class="text-white dark:text-[#e8f0f7]">Other Chains:</strong> Token burned and minted into Kaia via LayerZero, then deposited into Senja's pool</p>
        </div>
      </div>
    `,
    src: "/how/supply-collateral.png",
  },
  {
    title: "Borrow Assets",
    description: `
      <div class="space-y-4 text-white/90 dark:text-[#d0dce6]">
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Connect & Initiate</h4>
          <p>Users connect wallet and initiate borrow process.</p>
        </div>
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Pool & Collateral Check</h4>
          <p>System checks pool availability and collateral value.</p>
        </div>
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Cross-Chain Support</h4>
          <p><strong class="text-white dark:text-[#e8f0f7]">Kaia:</strong> Direct loan disbursement</p>
          <p><strong class="text-white dark:text-[#e8f0f7]">Other Chains:</strong> Token locked on Kaia, minted via LayerZero</p>
        </div>
      </div>
    `,
    src: "/how/borrow.png",
  },
  {
    title: "Repay Loan",
    description: `
      <div class="space-y-3 text-white/90 dark:text-[#d0dce6]">
        <div>
          <h4 class="font-semibold text-base mb-1 text-white dark:text-[#e8f0f7]">Same Chain & Token</h4>
          <p class="text-sm">Direct repayment into Senja's Pool.</p>
        </div>
        <div>
          <h4 class="font-semibold text-base mb-1 text-white dark:text-[#e8f0f7]">Same Chain & Other Token</h4>
          <p class="text-sm">Token swapped via DragonSwap before deposit.</p>
        </div>
        <div>
          <h4 class="font-semibold text-base mb-1 text-white dark:text-[#e8f0f7]">Cross-Chain Repayment</h4>
          <p class="text-sm">Integration with Stargate and LayerZero OFT for seamless cross-chain repayment.</p>
        </div>
      </div>
    `,
    src: "/how/repay.png",
  },
  {
    title: "Collateral Swap",
    description: `
      <div class="space-y-4 text-white/90 dark:text-[#d0dce6]">
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Position Management</h4>
          <p>Users can swap collateral without closing their position.</p>
        </div>
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Direct Swap</h4>
          <p>Tokens swapped via DragonSwap while maintaining user position.</p>
        </div>
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Seamless Experience</h4>
          <p>No need to close and reopen positions, saving time and gas fees.</p>
        </div>
      </div>
    `,
    src: "/how/swap.png",
  },
  {
    title: "Token Buybacks",
    description: `
      <div class="space-y-4 text-white/90 dark:text-[#d0dce6]">
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Fee Collection</h4>
          <p>Fees collected in Senja tokens stored in Assistance Fund.</p>
        </div>
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Automatic Swap</h4>
          <p><span class="text-senja-orange dark:text-blue-400 font-semibold">95% of fee tokens</span> automatically swapped to <span class="text-senja-orange dark:text-blue-400 font-semibold">KAIA via DragonSwap</span>.</p>
        </div>
        <div>
          <h4 class="font-semibold text-lg mb-2 text-white dark:text-[#e8f0f7]">Ecosystem Growth</h4>
          <p>Swapped KAIA supports price stability and ecosystem development.</p>
        </div>
      </div>
    `,
    src: "/how/token-buybacks.svg",
  },
];

export default function HowItWorks() {
  const slideData = createSlideData();

  return (
    <section id="how-it-works" className={`py-20 px-4 ${BACKGROUND_PATTERNS.hero}`}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-100 dark:text-[#e8f0f7]">
          How It Works
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden w-full h-full pb-20">
          <Carousel slides={slideData} />
        </div>
      </div>
    </section>
  );
}
