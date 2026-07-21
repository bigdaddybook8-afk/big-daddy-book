export function Celebs() {
  return (
    <section id="celebs" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-blue-950 light:bg-white overflow-hidden transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 dark:from-blue-900/20 light:from-blue-300/20 via-white dark:via-blue-950 light:via-white to-white dark:to-blue-950 light:to-white"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white light:text-black text-center mb-12 sm:mb-16 leading-tight">
          Champions Trust Big Daddy Book
        </h2>

        {/* Celebrity avatars grid - placeholder */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-blue-500/40 to-amber-600/40 dark:from-blue-500/40 dark:to-amber-600/40 light:from-blue-300/50 light:to-amber-300/30 rounded-full border-2 border-amber-500/50 dark:border-amber-500/50 light:border-amber-300/60 flex items-center justify-center hover:border-amber-400 dark:hover:border-amber-400 light:hover:border-amber-500 transition text-xs sm:text-sm md:text-base"
            >
              <span className="text-gray-500 dark:text-gray-500 light:text-gray-600 text-center px-2">Champion</span>
            </div>
          ))}
        </div>

        {/* Navigation dots or indicators */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-12">
          <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-600 dark:bg-blue-600 light:bg-blue-700 hover:bg-amber-500 dark:hover:bg-amber-500 light:hover:bg-amber-600 transition"></button>
          <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-600/50 dark:bg-blue-600/50 light:bg-blue-400/60 hover:bg-amber-500 dark:hover:bg-amber-500 light:hover:bg-amber-600 transition"></button>
        </div>
      </div>
    </section>
  )
}
