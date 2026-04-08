import Link from "next/link";

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-amber-400 transition-colors mb-6 group"
          >
            <svg
              className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Beranda
          </Link>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700/50">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-700 rounded-md shadow-lg shadow-amber-900/50">
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
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                    Materi Lama
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-white">Arsip Ujian</h1>
                <p className="text-slate-400 text-sm mt-1">
                  Rangkuman materi dari ujian tahun-tahun sebelumnya
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Archive Type Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {/* Arsip UTS Card */}
          <Link
            href="/arsip/uts"
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
                    Arsip
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">
                UTS Terdahulu
              </h2>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Rangkuman materi Ujian Tengah Semester dari tahun-tahun
                sebelumnya
              </p>
              <div className="flex items-center text-teal-400 text-sm font-medium">
                <span>Lihat Arsip</span>
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

          {/* Arsip UAS Card */}
          <Link
            href="/arsip/uas"
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
                    Arsip
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                UAS Terdahulu
              </h2>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Rangkuman materi Ujian Akhir Semester dari tahun-tahun
                sebelumnya
              </p>
              <div className="flex items-center text-purple-400 text-sm font-medium">
                <span>Lihat Arsip</span>
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
      </div>
    </div>
  );
}
