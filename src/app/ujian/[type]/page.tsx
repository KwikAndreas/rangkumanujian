import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    type: string;
  }>;
}

export default async function ExamTypePage({ params }: PageProps) {
  const { type } = await params;

  // Validate type (uts or uas)
  if (type !== "uts" && type !== "uas") {
    notFound();
  }

  // Get all markdown files in the directory
  let subjects: string[] = [];
  try {
    const dirPath = path.join(process.cwd(), "public", "ujian", type);
    const files = await fs.readdir(dirPath);
    subjects = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(".md", ""));
  } catch (error) {
    // Directory doesn't exist or is empty
  }

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
            className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors mb-6 group"
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold text-teal-400 tracking-wider uppercase">
                    {type === "uts"
                      ? "Ujian Tengah Semester"
                      : "Ujian Akhir Semester"}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-white">
                  Rangkuman {type.toUpperCase()}
                </h1>
                <p className="text-slate-400 text-sm mt-1">
                  Pilih mata kuliah untuk melihat rangkuman
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        {subjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subjects.map((subject) => {
              const displayName = subject
                .split(/(?=[A-Z])/)
                .join(" ")
                .replace(/([a-z])([A-Z])/g, "$1 $2");

              return (
                <Link
                  key={subject}
                  href={`/ujian/${type}/${subject}`}
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700/50 hover:border-teal-600/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 transition-colors mb-2">
                        {displayName}
                      </h3>
                      <p className="text-xs text-slate-400">
                        Materi {type.toUpperCase()}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-slate-600 group-hover:text-teal-400 transition-all transform group-hover:translate-x-1"
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
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-teal-600 to-teal-500 transition-all duration-300 rounded-full"></div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-12 text-center border border-slate-700/50">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
              <svg
                className="w-8 h-8 text-slate-600"
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
            <h3 className="text-lg font-semibold text-white mb-2">
              Belum Ada Materi
            </h3>
            <p className="text-slate-400 text-sm">
              Belum ada materi untuk {type.toUpperCase()} saat ini
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ type: "uts" }, { type: "uas" }];
}
