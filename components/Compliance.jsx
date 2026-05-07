import Image from "next/image";

const Compliance = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F8FAFC]" id="compliance">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-zinc-900 text-2xl md:text-3xl font-medium mb-4">
            Compliance & Certifications
          </h2>
          <p className="text-zinc-700 text-base md:text-lg max-w-2xl mx-auto">
            We operate under strict data protection regulations to ensure your information is secure and compliant with Nigerian law.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-3xl w-full">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Certificate Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl font-semibold text-zinc-900 mb-2">
                    PRISTINE TECHNICAL SERVICES LIMITED
                  </h3>
                  <p className="text-zinc-600 text-sm">
                    Nigeria Data Protection Commission
                  </p>
                </div>

                <div className="mb-6">
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-3">
                    NDP Act, 2023 Compliant
                  </span>
                  <p className="text-zinc-700 text-base font-medium">
                    Statutory Filing of Compliance Audit Returns
                  </p>
                  <p className="text-green-600 text-2xl font-bold mt-2">2025</p>
                </div>

                <p className="text-zinc-600 text-sm">
                  Acknowledged by the Nigeria Data Protection Commission for meeting all statutory requirements under the Nigeria Data Protection Act.
                </p>

                <div className="mt-6 pt-6 border-t border-zinc-200">
                  <p className="text-zinc-500 text-xs">
                    Verify at: <a href="https://www.ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">www.ndpc.gov.ng</a>
                  </p>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-white border-2 border-zinc-200 rounded-lg p-3 flex items-center justify-center">
                  <Image
                    src="/qrcode.png"
                    alt="NDPC Compliance QR Code"
                    width={160}
                    height={160}
                    className="object-contain"
                    unoptimized={true}
                  />
                </div>
                <p className="text-center text-zinc-500 text-xs mt-3">
                  Scan to verify certificate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
