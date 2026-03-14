import { BookOpen, Briefcase, Users, Star } from 'lucide-react';

export const resumeData = [
  {
    id: 'education',
    title: 'Education',
    icon: BookOpen,
    description: "High-achieving 10th-grade student (Rising Junior) with a 3.98 GPA.",
    details: [
      {
        subtitle: 'Edgemont Jr./Sr. High School',
        text: 'Expected Graduation: 2028. Academic Standing: Straight A\'s; Honors in Math, English, and Latin. Enrolled in AP Computer Science, AP European History.'
      },
      {
        subtitle: 'Kumon Math Program Graduate',
        text: 'Completed the full curriculum through advanced college-level calculus by 9th Grade.'
      },
      {
        subtitle: 'Summer Programs',
        text: 'Harvard University Debate Council Summer Workshop (2024, 2025).'
      }
    ]
  },
  {
    id: 'experience',
    title: 'Experience',
    icon: Briefcase,
    description: "Entrepreneurial leader with a track record of founding and managing successful initiatives.",
    details: [
      {
        subtitle: 'Co-Founder | Solarflare',
        text: 'Independent Robotics Team & YouTube Channel (2022-2024). Managed end-to-end team operations, fundraising, and community outreach. Led software coding and hardware assembly.'
      },
      {
        subtitle: 'Co-Founder | Math Monkey & Barky Bites',
        text: 'Launched a math tutoring business for younger students and co-founded a dog treat company at age 10 handling production and neighborhood sales.'
      }
    ]
  },
  {
    id: 'volunteer',
    title: 'Volunteer & Debate',
    icon: Users,
    description: "Passionate about giving back to the community and a nationally ranked competitive debater.",
    details: [
      {
        subtitle: '3D Printing Instructor',
        text: 'Chinese School at Edgemont (April 2025 - Present). Conduct weekly Sunday sessions teaching 3D modeling and CAD to children.'
      },
      {
        subtitle: 'Co-Founder | debate101.org',
        text: 'Co-founded a non-profit debate organization, managing its launch, online brand identity, and all website development/design.'
      },
      {
        subtitle: 'Varsity Representative | Edgemont Speech & Debate',
        text: 'National Ranking: Quarterfinalist at the Woodward National Debate Tournament. Earned multiple Top Speaker awards. Expert in Lincoln-Douglas format.'
      }
    ]
  },
  {
    id: 'skills',
    title: 'Skills & Extras',
    icon: Star,
    description: "A diverse skillset spanning technical, musical, and athletic disciplines.",
    details: [
      {
        subtitle: 'Financial & Technical',
        text: 'Paper Trading (Equity Simulation), Macroeconomic Theory, Python, Java, Excel (Data Analysis), 3D Modeling (CAD), Video/Audio Editing.'
      },
      {
        subtitle: 'Music & Arts',
        text: 'Saxophonist; Member of Edgemont Jazz Ensembles; National Jazz Festival Competitor (2025). Professional DJ: Self-taught in audio mixing and equipment.'
      },
      {
        subtitle: 'Athletics & Journalism',
        text: 'Taekwondo Registered Junior Black Belt. Athletics: Varsity Lacrosse player. Independent journalist writing about current events and international affairs (15,000+ reads).'
      }
    ]
  }
];
