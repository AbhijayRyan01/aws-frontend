const Header = () => {
  return (
    <header
      className="relative bg-black rounded-xl mx-6 mt-6 px-8 py-20 text-center"
      style={{
        minHeight: '520px',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
          Unlock Deep Insights from Amazon Reviews
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Simply enter an ASIN to get instant sentiment analysis, key phrase extraction, and trend tracking.
        </p>

        {/* Embedded Analyze Product ASIN Card */}
        <div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-2 text-center">Analyze Product ASIN</h2>
          <p className="text-sm text-center text-gray-500 mb-4">
            Amazon Standard Identification Number (ASIN)
          </p>
          <input
            type="text"
            placeholder="B08V7X34D1"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />
          <button className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 transition">
            Analyze Product Comments →
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
