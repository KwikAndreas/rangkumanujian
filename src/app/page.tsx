import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg mb-6 shadow-lg shadow-teal-900/50">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-300 via-teal-200 to-purple-300 bg-clip-text text-transparent mb-6">
            Rangkuman Ujian
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Platform untuk menyimpan dan membaca rangkuman materi kuliah untuk
            persiapan UTS dan UAS
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* UTS Card */}
          <Link
            href="/ujian/uts"
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-slate-700/50 hover:border-teal-600/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-gradient-to-br from-teal-600 to-teal-700 rounded-md shadow-lg shadow-teal-900/50">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-teal-400 tracking-wider uppercase">
                    Semester
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">
                Ujian Tengah Semester
              </h2>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Akses rangkuman materi untuk persiapan UTS
              </p>
              <div className="flex items-center text-teal-400 text-sm font-medium">
                <span>Lihat Materi</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </Link>

          {/* UAS Card */}
          <Link
            href="/ujian/uas"
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-slate-700/50 hover:border-purple-600/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-purple-700 rounded-md shadow-lg shadow-purple-900/50">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-purple-400 tracking-wider uppercase">
                    Semester
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                Ujian Akhir Semester
              </h2>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Akses rangkuman materi untuk persiapan UAS
              </p>
              <div className="flex items-center text-purple-400 text-sm font-medium">
                <span>Lihat Materi</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </Link>
        </div>

        {/* Info Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700/50">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-gradient-to-br from-slate-700 to-slate-800 rounded-md">
                <svg
                  className="w-6 h-6 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Cara Menggunakan
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-teal-400">1</span>
                    </div>
                    <span className="text-sm text-slate-300">
                      Pilih kategori ujian (UTS atau UAS)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-teal-400">2</span>
                    </div>
                    <span className="text-sm text-slate-300">
                      Pilih mata kuliah yang ingin dipelajari
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-teal-400">3</span>
                    </div>
                    <span className="text-sm text-slate-300">
                      Baca dan pelajari rangkuman materi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
