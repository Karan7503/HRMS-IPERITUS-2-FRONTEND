import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Wrench,
  FolderGit2,
  Globe2,
  Award,
  BookOpen
} from "lucide-react";

const navItems = [
  { id: "summary", label: "Summary", icon: FileText },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "languages", label: "Languages", icon: Globe2 },
  { id: "honors", label: "Honors & Awards", icon: Award },
  { id: "courses", label: "Courses", icon: BookOpen },
];

function ResumeSidebar({ activeSection, onNavigate }) {
  // Temporary mock data for profile
  const user = {
    name: "Karan Rawat",
    role: "Employee",
    avatar: null
  };

  return (
    <div className="flex flex-col gap-6">

      {/* Profile Card */}
      <div className="card-soft bg-bgCard p-6 rounded-[1.5rem] border border-borderColor flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-bgMain border-2 border-borderColor flex items-center justify-center overflow-hidden mb-4 shadow-sm">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-3xl font-bold text-muted">{user.name.charAt(0)}</span>
          )}
        </div>
        <h2 className="text-xl font-extrabold text-textMain tracking-tight">
          {user.name}
        </h2>
        <span className="text-sm font-medium text-muted mt-1 px-3 py-1 bg-bgMain rounded-full border border-borderColor">
          {user.role}
        </span>
      </div>

      {/* Navigation */}
      <nav className="card-soft bg-bgCard p-3 rounded-[1.5rem] border border-borderColor flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                relative
                flex items-center gap-3 px-4 py-3 rounded-xl
                text-sm font-semibold tracking-wide
                ${isActive
                  ? " text-gray-800 shadow-md"
                  : "text-muted hover:bg-gray-200 hover:text-gray-800"}
              `}
            >
              <Icon size={18} className={isActive ? "text-gray-800" : ""} />
              {item.label}

              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-gray-200 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>

    </div>
  );
}

export default ResumeSidebar;
