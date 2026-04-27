import { useState, useEffect } from "react";
import { getResume, saveResume } from "../services/resumeService";
import ResumeSidebar from "../components/resume/ResumeSidebar";
import ResumeSection from "../components/resume/ResumeSection";
import Breadcrumb from "../ui/BreadCrumb";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Wrench,
  FolderGit2,
  Globe2,
  Award,
  BookOpen,
  CheckCircle2
} from "lucide-react";

// Mock Table Configurations
const summaryCols = [
  { header: "Professional Summary", accessorKey: "text", type: "textarea" },
];

const experienceCols = [
  { header: "Role", accessorKey: "role" },
  { header: "Company", accessorKey: "company" },
  { header: "Duration", accessorKey: "duration" },
];

const educationCols = [
  { header: "Degree", accessorKey: "degree" },
  { header: "Institution", accessorKey: "institution" },
  { header: "Year", accessorKey: "year" },
];

const skillCols = [
  { header: "Skill", accessorKey: "skill" },
  { header: "Proficiency", accessorKey: "proficiency" },
];

const projectCols = [
  { header: "Project Name", accessorKey: "name" },
  { header: "Description", accessorKey: "description" },
];

const languageCols = [
  { header: "Language", accessorKey: "language" },
  { header: "Competency", accessorKey: "competency" },
  { header: "Read", accessorKey: "read" },
  { header: "Write", accessorKey: "write" },
  { header: "Speak", accessorKey: "speak" },
];

const honorsCols = [
  { header: "Award", accessorKey: "award" },
  { header: "Organization", accessorKey: "organization" },
];

const courseCols = [
  { header: "Course", accessorKey: "course" },
  { header: "Number", accessorKey: "number" },
  { header: "Associated With", accessorKey: "associatedWith" },
];

function Resume() {
  const [activeSection, setActiveSection] = useState("summary");
  const [resumeData, setResumeData] = useState({
    summary: "",
    experience: [],
    education: [],
    skills: [],
    projects: [],
    languages: [],
    honors: [],
    courses: []
  });

  const [isSaving, setIsSaving] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const fetchResumeData = async () => {
    try {
      const data = await getResume();
      // Normalize — ensure all array sections are always arrays
      const normalized = {
        summary: data.summary || "",
        experience: Array.isArray(data.experience) ? data.experience : [],
        education: Array.isArray(data.education) ? data.education : [],
        skills: Array.isArray(data.skills) ? data.skills : [],
        projects: Array.isArray(data.projects) ? data.projects : [],
        languages: Array.isArray(data.languages) ? data.languages : [],
        honors: Array.isArray(data.honors) ? data.honors : [],
        courses: Array.isArray(data.courses) ? data.courses : []
      };
      setResumeData(normalized);
    } catch (err) {
      console.error("Failed to fetch resume:", err);
    }
  };

  useEffect(() => {
    fetchResumeData();
  }, []);

  const handleAddRecord = (section, formData) => {
    setResumeData(prev => {
      if (section === "summary") {
        return { ...prev, summary: formData.text };
      }
      return {
        ...prev,
        [section]: [...(prev[section] || []), { id: Date.now(), ...formData }]
      };
    });
  };

  const handleEditRecord = (section, id, formData) => {
    setResumeData(prev => {
      return {
        ...prev,
        [section]: prev[section].map(item => 
          item.id === id ? { ...item, ...formData } : item
        )
      };
    });
  };

  const handleDeleteRecord = (section, id) => {
    setResumeData(prev => {
      return {
        ...prev,
        [section]: prev[section].filter(item => item.id !== id)
      };
    });
  };

  const handleSaveResume = async () => {
    try {
      setIsSaving(true);
      await saveResume(resumeData);
      
      // Show success message
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      
    } catch (err) {
      console.error("Failed to save resume:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleNavigate = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Optional: IntersectionObserver logic to update activeSection on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" } // trigger when near top
    );

    const sections = document.querySelectorAll(".resume-section-target");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-bgMain min-h-screen px-4 sm:px-6 lg:px-10 xl:px-16 py-4 space-y-6">

      <Breadcrumb
        items={[
          { label: "Dashboard", path: "/dashboard" },
          { label: "Resume", path: "/resume" }
        ]}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-8 mt-6">
        <div>
          <h1 className="text-3xl font-extrabold text-textMain tracking-tighter">My Resume</h1>
          <p className="text-muted font-medium tracking-tight mt-1">Manage and update your professional profile.</p>
        </div>
        
        <button 
          onClick={handleSaveResume}
          disabled={isSaving}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold shadow-md transition-all ${
            isSaving ? "bg-muted text-white cursor-not-allowed" : "bg-primary text-white hover:bg-primary-hover hover:shadow-lg active:scale-95"
          }`}
        >
          {isSaving ? "Saving..." : "Save Resume"}
        </button>
      </div>

      {/* Success Notification */}
      {showSuccessMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-green-500 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 font-semibold tracking-tight">
            <CheckCircle2 size={22} className="text-white/90" />
            <span>Resume saved successfully!</span>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8 items-start relative">

        {/* Left Sidebar */}
        <div className="w-full lg:w-72 shrink-0 lg:sticky lg:top-24">
          <ResumeSidebar activeSection={activeSection} onNavigate={handleNavigate} />
        </div>

        {/* Main Content Areas */}
        <div className="flex-1 w-full space-y-4">

          <ResumeSection
            id="summary"
            icon={FileText}
            title="Summary"
            isSummary={true}
            summaryText={resumeData.summary}
            columns={summaryCols}
            onAddRecord={handleAddRecord}
          />

          <ResumeSection
            id="experience"
            icon={Briefcase}
            title="Experience"
            columns={experienceCols}
            data={resumeData.experience}
            onAddRecord={handleAddRecord}
            onEditRecord={handleEditRecord}
            onDeleteRecord={handleDeleteRecord}
          />

          <ResumeSection
            id="education"
            icon={GraduationCap}
            title="Education"
            columns={educationCols}
            data={resumeData.education}
            onAddRecord={handleAddRecord}
            onEditRecord={handleEditRecord}
            onDeleteRecord={handleDeleteRecord}
          />

          <ResumeSection
            id="skills"
            icon={Wrench}
            title="Skills"
            columns={skillCols}
            data={resumeData.skills}
            onAddRecord={handleAddRecord}
            onEditRecord={handleEditRecord}
            onDeleteRecord={handleDeleteRecord}
          />

          <ResumeSection
            id="projects"
            icon={FolderGit2}
            title="Projects"
            columns={projectCols}
            data={resumeData.projects}
            onAddRecord={handleAddRecord}
            onEditRecord={handleEditRecord}
            onDeleteRecord={handleDeleteRecord}
          />

          <ResumeSection
            id="languages"
            icon={Globe2}
            title="Languages"
            columns={languageCols}
            data={resumeData.languages}
            onAddRecord={handleAddRecord}
            onEditRecord={handleEditRecord}
            onDeleteRecord={handleDeleteRecord}
          />

          <ResumeSection
            id="honors"
            icon={Award}
            title="Honors & Awards"
            columns={honorsCols}
            data={resumeData.honors}
            onAddRecord={handleAddRecord}
            onEditRecord={handleEditRecord}
            onDeleteRecord={handleDeleteRecord}
          />

          <ResumeSection
            id="courses"
            icon={BookOpen}
            title="Courses"
            columns={courseCols}
            data={resumeData.courses}
            onAddRecord={handleAddRecord}
            onEditRecord={handleEditRecord}
            onDeleteRecord={handleDeleteRecord}
          />

        </div>

      </div>
    </div>
  );
}

export default Resume;