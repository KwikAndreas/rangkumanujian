import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import MarkdownRenderer from "@/components/MarkdownRenderer";

interface PageProps {
  params: Promise<{
    type: string;
    subject: string;
  }>;
}

export default async function SubjectPage({ params }: PageProps) {
  const { type, subject } = await params;

  // Validate type (uts or uas)
  if (type !== "uts" && type !== "uas") {
    notFound();
  }

  try {
    // Read markdown file
    const filePath = path.join(
      process.cwd(),
      "public",
      "ujian",
      type,
      `${subject}.md`,
    );
    const content = await fs.readFile(filePath, "utf8");

    // Format subject name for display
    const subjectDisplay = subject
      .split(/(?=[A-Z])/)
      .join(" ")
      .replace(/([a-z])([A-Z])/g, "$1 $2");

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              href={`/ujian/${type}`}
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
              Kembali ke {type.toUpperCase()}
            </Link>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-md mb-3">
                    {type.toUpperCase()}
                  </span>
                  <h1 className="text-3xl font-bold text-white">
                    {subjectDisplay}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50">
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  const types = ["uts", "uas"];
  const params = [];

  for (const type of types) {
    try {
      const dirPath = path.join(process.cwd(), "public", "ujian", type);
      const files = await fs.readdir(dirPath);

      for (const file of files) {
        if (file.endsWith(".md")) {
          params.push({
            type,
            subject: file.replace(".md", ""),
          });
        }
      }
    } catch (error) {
      // Directory doesn't exist yet
    }
  }

  return params;
}
