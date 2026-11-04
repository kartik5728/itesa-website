export type MemberLink = { label: string; url: string };

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  email?: string;
  links?: MemberLink[];
};

export type TeamGroup = {
  id: string;
  title: string;
  members: TeamMember[];
};

// Replace sample details with verified ITESA member details (or fetch from your API/CMS).
export const teamGroups: TeamGroup[] = [
  {
    id: "faculty",
    title: "FACULTY COORDINATOR",
    members: [
      { id: "anil", name: "Dr. Anil Sharma", role: "Faculty Coordinator", bio: "Guides the association, supports student initiatives, and helps the team create meaningful learning opportunities through technology and collaboration." },
    ],
  },
  {
    id: "organizer",
    title: "ORGANIZER",
    members: [
      { id: "aarav", name: "Aarav Sharma", role: "President", bio: "Helps set the direction for ITESA, bringing students together around shared goals, meaningful experiences and a stronger technical community." },
      { id: "priya", name: "Priya Verma", role: "Vice President", bio: "Connects people, ideas and initiatives across the association, helping projects move from early conversations to thoughtful execution." },
    ],
  },
  {
    id: "technical",
    title: "TECHNICAL TEAM",
    members: [
      { id: "rohan", name: "Rohan Mehta", role: "Technical Head", email: "rohan.mehta@itesa.in", links: [{ label: "LinkedIn ↗", url: "https://www.linkedin.com/" }, { label: "GitHub ↗", url: "https://github.com/" }], bio: "Leads the technical vertical at ITESA, helping students explore technology through practical projects, workshops and collaborative problem-solving." },
      { id: "aditya", name: "Aditya Kulkarni", role: "Backend Developer", bio: "Works on backend systems and helps turn technical ideas into reliable, useful digital experiences." },
      { id: "neeraj", name: "Neeraj Singh", role: "AI/ML Lead", bio: "Explores AI and machine-learning concepts and helps the team discover practical applications for emerging technologies." },
    ],
  },
  {
    id: "design",
    title: "DESIGN TEAM",
    members: [
      { id: "sneha", name: "Sneha Kapoor", role: "Design Head", bio: "Shapes the visual identity of ITESA through thoughtful design, consistent visuals and clear digital communication." },
      { id: "karan", name: "Karan Singh", role: "UI/UX Designer", bio: "Designs intuitive interfaces and user experiences that make digital products easier and more enjoyable to use." },
      { id: "isha", name: "Isha Malhotra", role: "Graphic Designer", bio: "Creates graphics and visual assets that help communicate ITESA events, initiatives and ideas." },
    ],
  },
  {
    id: "management",
    title: "MANAGEMENT TEAM",
    members: [
      { id: "vivek", name: "Vivek Patel", role: "Management Head", bio: "Coordinates team operations, plans resources and helps keep association activities organized." },
      { id: "ananya", name: "Ananya Rao", role: "Operations Lead", bio: "Supports event operations, coordination and planning so activities run smoothly from start to finish." },
    ],
  },
  {
    id: "media",
    title: "MEDIA TEAM",
    members: [
      { id: "rahul", name: "Rahul Das", role: "Media Head", bio: "Coordinates media coverage and helps document the energy, people and highlights of ITESA activities." },
      { id: "simran", name: "Simran Kaur", role: "Content Creator", bio: "Develops engaging content that shares ITESA updates, event stories and opportunities with students." },
      { id: "arjun", name: "Arjun Nair", role: "Videography Lead", bio: "Captures and edits video content to preserve event moments and tell ITESA stories." },
    ],
  },
  {
    id: "documentation",
    title: "DOCUMENTATION TEAM",
    members: [
      { id: "mehul", name: "Mehul Joshi", role: "Documentation Head", bio: "Maintains clear records, event documentation and written resources for the association." },
    ],
  },
  {
    id: "sports",
    title: "SPORTS TEAM",
    members: [
      { id: "kunal", name: "Kunal Verma", role: "Sports Head", bio: "Encourages participation, teamwork and healthy competition through sports activities." },
      { id: "ritik", name: "Ritik Yadav", role: "Event Coordinator", bio: "Helps coordinate schedules, participants and logistics for sports and team activities." },
      { id: "sahil", name: "Sahil Khan", role: "Logistics Lead", bio: "Supports equipment, venue and on-ground logistics so activities stay organized." },
    ],
  },
  {
    id: "pr",
    title: "PUBLIC RELATIONS TEAM",
    members: [
      { id: "tanya", name: "Tanya Gupta", role: "PR Head", bio: "Builds connections with students and collaborators and helps communicate ITESA initiatives." },
      { id: "devansh", name: "Devansh Mehta", role: "Outreach Lead", bio: "Supports outreach and partnerships to help more students discover and participate in ITESA." },
    ],
  },
  {
    id: "cultural",
    title: "CULTURAL TEAM",
    members: [
      { id: "aditi", name: "Aditi Singh", role: "Cultural Head", bio: "Helps plan cultural activities that celebrate creativity, expression and community." },
      { id: "riya", name: "Riya Nair", role: "Event Coordinator", bio: "Coordinates cultural event details and helps create welcoming experiences for participants." },
    ],
  },
];
