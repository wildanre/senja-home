'use client';
import Stepper, { Step } from "../ui/Stepper";

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-[#FFF3E0] dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-senja-brown dark:text-[#e8f0f7]">
          How It Works
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Supply Liquidity */}
          <div>
            <Stepper initialStep={1} title="Supply Liquidity">
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Connect Wallet</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">Users connect their wallet on the Senja LINE Mini App.</p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Supply Collateral</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">Users supply collateral.</p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Select Chain and Token</h4>
                <ul className="list-disc list-inside space-y-2 ml-2 text-senja-brown/80 dark:text-[#d0dce6]">
                  <li>
                    <strong>If a token is selected on Kaia:</strong> It is directly deposited into Senja&apos;s pool, and a user position is created.
                  </li>
                  <li>
                    <strong>If a token is selected on another chain:</strong> It is burned and minted into Kaia via LayerZero, then deposited into Senja&apos;s pool, and a user position is created.
                  </li>
                </ul>
              </Step>
            </Stepper>
          </div>

          {/* Supply Collateral */}
          <div>
            <Stepper initialStep={1} title="Supply Collateral">
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Connect Wallet</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">Users connect their wallet on the Senja LINE Mini App.</p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Supply Collateral</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">Users supply collateral.</p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Select Chain and Token</h4>
                <ul className="list-disc list-inside space-y-2 ml-2 text-senja-brown/80 dark:text-[#d0dce6]">
                  <li>
                    <strong>If a token is selected on Kaia:</strong> It is directly deposited into Senja&apos;s pool, and a user position is created.
                  </li>
                  <li>
                    <strong>If a token is selected on another chain:</strong> It is burned and minted into Kaia via LayerZero, then deposited into Senja&apos;s pool, and a user position is created.
                  </li>
                </ul>
              </Step>
            </Stepper>
          </div>

          {/* Borrow */}
          <div>
            <Stepper initialStep={1} title="Borrow">
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Connect Wallet</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">Users connect their wallet on the Senja LINE Mini App.</p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Borrow</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">Users initiate borrow.</p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Check Pool Availability</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">Checks if the Senja pool is available.</p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Check Collateral Value</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">Checks the user&apos;s collateral value.</p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Select Chain and Token</h4>
                <div className="space-y-3 text-senja-brown/80 dark:text-[#d0dce6]">
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>
                      <strong>If a user selects a token on Kaia:</strong> They receive the loan directly.
                    </li>
                    <li>
                      <strong>If a user selects a token on another chain:</strong> The token is locked on Kaia, minted on another chain via LayerZero, and the user receives a representative token.
                    </li>
                  </ul>
                </div>
              </Step>
            </Stepper>
          </div>

          {/* Repay Loan */}
          <div>
            <Stepper initialStep={1} title="Repay Loan">
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Same Chain & Same Token</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">
                  The repayment token goes directly into Senja&apos;s Pool.
                </p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Same Chain & Other Token</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">
                  The user&apos;s token is swapped through DragonSwap from the position token to the borrow token. The swapped token is then sent into Senja&apos;s Pool.
                </p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Other Chain & Same Token</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">
                  Integration with Stargate. The token on Chain A is burned and then minted on Chain B (Kaia). The minted token is deposited into Senja&apos;s Pool.
                </p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Other Chain & Representative Token</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">
                  Integration with LayerZero OFT. The representative token on Chain A is burned and the real token is released on Chain B (Kaia). The released token is deposited into Senja&apos;s Pool.
                </p>
              </Step>
            </Stepper>
          </div>

          {/* Collateral Swap */}
          <div>
            <Stepper initialStep={1} title="Collateral Swap">
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Connect Wallet</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">Users connect their wallet on the Senja LINE Mini App.</p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Check Position</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">Checks the user&apos;s position.</p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Select Token to Swap</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">The token is swapped via DragonSwap directly, without closing the user&apos;s position.</p>
              </Step>
            </Stepper>
          </div>

          {/* Token Buybacks */}
          <div>
            <Stepper initialStep={1} title="Token Buybacks">
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Fee Collection</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">
                  Fees collected in Senja tokens are stored in the Assistance Fund.
                </p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Automatic Swap</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">
                  <strong className="text-senja-orange dark:text-[#60a5fa]">95% of these fee tokens</strong> are automatically swapped into <strong className="text-senja-orange dark:text-[#60a5fa]">KAIA via DragonSwap</strong>.
                </p>
              </Step>
              <Step>
                <h4 className="text-lg font-semibold mb-2 text-senja-brown dark:text-[#e8f0f7]">Ecosystem Support</h4>
                <p className="text-senja-brown/80 dark:text-[#d0dce6]">
                  The swapped KAIA supports price stability and ecosystem growth.
                </p>
              </Step>
            </Stepper>
          </div>
        </div>
      </div>
    </section>
  );
}
