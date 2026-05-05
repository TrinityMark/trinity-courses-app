export interface ContentBlock {
  intro: string;
  bullets: string[];
}

export interface ModuleItem {
  id: string;
  title: string;
  overview: ContentBlock;
  value: ContentBlock;
}

export interface CourseItem {
  id: string;
  title: string;
  overview: ContentBlock;
  value: ContentBlock;
  modules?: ModuleItem[];
}

export interface CourseCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  route: string;
  items: CourseItem[];
}

const PENDING: ContentBlock = { intro: 'Coming soon — content to be added.', bullets: [] };

export const COURSES: CourseCategory[] = [
  {
    id: 'foundation',
    title: 'Foundation',
    icon: '🎯',
    description: 'Build the core identity and strategic direction of the business.',
    route: '/courses/foundation',
    items: [
      {
        id: 'swot',
        title: 'SWOT Analysis',
        overview: {
          intro: 'This module helps clients assess their current business position through strengths, weaknesses, opportunities and threats.',
          bullets: [
            'Introduces SWOT as a practical strategic planning tool.',
            'Separates internal factors from external market conditions.',
            'Identifies strengths to leverage and weaknesses to improve.',
            'Explores opportunities for growth and threats requiring protection.',
            'Uses prompts across clients, operations, marketing, team, finance and market dynamics.',
          ],
        },
        value: {
          intro: 'Clients gain a clear snapshot of where the business stands and what must be addressed next.',
          bullets: [
            'Greater clarity on competitive advantages and current vulnerabilities.',
            'A structured view of internal and external business priorities.',
            'Better decision-making for growth, resilience and risk management.',
            'A practical foundation for the strategic plan and future action planning.',
            'Stronger ability to prioritise issues instead of reacting to daily problems.',
          ],
        },
      },
      {
        id: 'mvv',
        title: 'Mission, Values, Vision',
        overview: {
          intro: 'This module defines the business\'s values, current purpose and future direction in clear, practical language.',
          bullets: [
            'Clarifies core values that guide decisions, behaviour and culture.',
            'Builds a mission statement around why, who, what and how.',
            'Creates a vision statement that describes the future business.',
            'Connects purpose, people, customers and long-term direction.',
            'Encourages team feedback and practical use across the business.',
          ],
        },
        value: {
          intro: 'Clients walk away with sharper direction, stronger culture and language that attracts aligned staff and clients.',
          bullets: [
            'Clear values that support hiring, client selection and daily decisions.',
            'A mission statement that explains the current purpose of the business.',
            'A vision statement that inspires owners, staff and customers.',
            'Better alignment between leadership, team behaviours and client experience.',
            'Messaging that can flow into marketing, onboarding and strategic planning.',
          ],
        },
      },
      {
        id: 'strategic-plan',
        title: 'Strategic Plan',
        overview: {
          intro: 'This module turns the business vision into a clear three-year plan with gaps, priorities and actions.',
          bullets: [
            'Reviews the current situation across key areas of the business.',
            'Defines three-year goals for services, USP, clients, culture, team, workspace and finances.',
            'Identifies gaps between today\'s business and the desired future.',
            'Prioritises gaps and converts them into SMART objectives.',
            'Creates action items with owners, due dates and review rhythm.',
          ],
        },
        value: {
          intro: 'Clients gain a practical roadmap that guides decisions, resource allocation and growth over the next three years.',
          bullets: [
            'Clear direction for where the business is heading.',
            'Better alignment between goals, daily actions and team priorities.',
            'Practical actions to close the gap between current and future state.',
            'Improved resource allocation across time, staff, equipment and money.',
            'A stronger basis for quarterly reviews and accountability.',
          ],
        },
      },
    ],
  },
  {
    id: 'alignment',
    title: 'Business Alignment',
    icon: '💼',
    description: 'Align the business around its ideal clients, positioning, and systems.',
    route: '/courses/alignment',
    items: [
      {
        id: 'assessment',
        title: 'Business Alignment Assessment',
        overview: {
          intro: 'This module assesses how well top clients, unique value and systems align to create the business sweet spot.',
          bullets: [
            'Introduces the Sweet Spot model: Top Clients, USP and Systemisation.',
            'Uses a scored assessment to identify where alignment is strong or weak.',
            'Interprets low scores across pricing, client fit and scalability.',
            'Links results to later modules on clients, USP and systems.',
            'Shows whether the business can grow without creating owner dependency.',
          ],
        },
        value: {
          intro: 'Clients identify which alignment gaps are limiting profit, scalability and freedom from the day-to-day.',
          bullets: [
            'Clear view of whether the business is competing on price or value.',
            'Better understanding of ideal client fit and marketing focus.',
            'Insight into whether systems can support growth without the owner.',
            'Practical direction on which modules need the most attention.',
            'Stronger foundation for scaling rather than simply growing workload.',
          ],
        },
      },
      {
        id: 'top-clients',
        title: 'Top Clients',
        overview: {
          intro: 'This module helps clients identify, define and prioritise the customers they most want to serve.',
          bullets: [
            'Identifies top clients based on fit, profitability, enjoyment and value.',
            'Reviews what best clients have in common.',
            'Defines possible client niches using demographics and psychographics.',
            'Explores client pain points, needs, goals and buying drivers.',
            'Introduces client pruning to reduce poor-fit work over time.',
          ],
        },
        value: {
          intro: 'Clients gain a clearer niche so marketing, service delivery and pricing target the right customers.',
          bullets: [
            'Greater clarity on who the business should focus on serving.',
            'Reduced time and energy spent on poor-fit or low-value clients.',
            'More targeted marketing and stronger sales conversations.',
            'Better alignment between services, client needs and profitability.',
            'A practical basis for upgrading the client base over time.',
          ],
        },
      },
      {
        id: 'wishlist-interviews',
        title: 'Wishlist Interviews',
        overview: {
          intro: 'This module uses structured interviews to understand what top clients truly value, need and want next.',
          bullets: [
            'Selects ideal clients to interview for direct market insight.',
            'Explores client problems, desires, expectations and buying triggers.',
            'Tests assumptions about why clients choose the business.',
            'Captures language that can improve marketing and sales messaging.',
            'Uses feedback to shape services, USP and future innovation.',
          ],
        },
        value: {
          intro: 'Clients stop guessing and use real customer insight to refine offers, messaging and client experience.',
          bullets: [
            'Better understanding of what top clients genuinely care about.',
            'Stronger ability to describe client pain points in their own language.',
            'Clearer evidence for improving services and customer experience.',
            'More relevant marketing messages and sales conversations.',
            'Stronger connection between client needs and future business strategy.',
          ],
        },
      },
      {
        id: 'aoi-usp-tagline',
        title: 'AOI, USP and Tagline',
        overview: {
          intro: 'This module defines the business\'s area of innovation, unique selling proposition and memorable market tagline.',
          bullets: [
            'Identifies the specialist area where the business can stand apart.',
            'Connects innovation to client needs, value and commercial opportunity.',
            'Crafts a USP that explains why clients should choose the business.',
            'Develops a tagline that makes the positioning easier to remember.',
            'Aligns AOI, USP and tagline with marketing and service delivery.',
          ],
        },
        value: {
          intro: 'Clients gain stronger differentiation, clearer pricing power and messaging that attracts the right customers.',
          bullets: [
            'A clear statement of what makes the business different and valuable.',
            'Reduced price pressure through stronger perceived value.',
            'Better alignment between specialist services and ideal client needs.',
            'More compelling marketing, sales and referral messaging.',
            'A stronger foundation for scalable growth and customer loyalty.',
          ],
        },
      },
      {
        id: 'systemisation',
        title: 'Systemisation',
        overview: {
          intro: 'This module helps clients build repeatable systems, clear roles and structure to support scalable growth.',
          bullets: [
            'Assesses current business systems and documents key processes.',
            'Clarifies roles, responsibilities, required skills and current capability gaps.',
            'Builds task management and delegation practices.',
            'Creates current and future organisation charts.',
            'Connects systems back to the Sweet Spot, USP and strategic plan.',
          ],
        },
        value: {
          intro: 'Clients reduce owner dependency and create a business that can operate more consistently without them.',
          bullets: [
            'More consistent service delivery and customer experience.',
            'Clearer accountability for roles, responsibilities and tasks.',
            'Better delegation, fewer bottlenecks and less owner reliance.',
            'Improved hiring, training and development decisions.',
            'A stronger operating structure to support growth and lifestyle goals.',
          ],
        },
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing and Sales',
    icon: '📈',
    description: 'Attract the right clients and convert them with confidence.',
    route: '/courses/marketing',
    items: [
      {
        id: 'marketing-foundations',
        title: 'Marketing Foundations',
        overview: {
          intro: 'This module turns client niche and USP work into a focused marketing message, channels and campaign plan.',
          bullets: [
            'Reviews client niche, wishlist insights and USP before marketing activity.',
            'Builds a clear marketing message and elevator pitch.',
            'Selects marketing channels that can reach ideal clients effectively.',
            'Designs campaigns with goals, budgets and expected return.',
            'Tracks outcomes so marketing spend can be measured and improved.',
          ],
        },
        value: {
          intro: 'Clients gain a focused marketing approach that promotes the right offer to the right audience.',
          bullets: [
            'Clearer message explaining who the business helps and why it matters.',
            'Better selection of marketing channels based on ideal client fit.',
            'Reduced wasted spend on broad or unfocused marketing activity.',
            'Campaigns linked to measurable outcomes and return on investment.',
            'Stronger connection between marketing promises and business systems.',
          ],
        },
      },
      {
        id: 'sales-client-retention',
        title: 'Sales and Client Retention',
        overview: {
          intro: 'This module improves lead capture, nurturing, conversion, reviews and referrals through practical sales systems.',
          bullets: [
            'Explains the addressable market and lead readiness categories.',
            'Sets up CRM or spreadsheet fields to capture and categorise leads.',
            'Builds nurture strategies for hot, warm and cold prospects.',
            'Uses follow-up, objection handling and email templates to improve conversion.',
            'Creates review and referral strategies from top clients.',
          ],
        },
        value: {
          intro: 'Clients improve sales conversion, follow-up discipline and referral flow without relying on ad-hoc effort.',
          bullets: [
            'Better visibility over leads, source, status and next actions.',
            'Stronger follow-up process that prevents warm leads being lost.',
            'Improved sales confidence through practical conversion techniques.',
            'More reviews and testimonials to build trust and social proof.',
            'Higher-quality referrals from clients who already value the business.',
          ],
        },
      },
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership',
    icon: '👥',
    description: 'Develop leaders who inspire performance, accountability, and culture.',
    route: '/courses/leadership',
    items: [
      {
        id: 'leadership-starts-here',
        title: 'Leadership Starts Here: Mastering the Art of Self-Leadership',
        overview: { intro: '', bullets: [] },
        value: { intro: '', bullets: [] },
        modules: [
          {
            id: 'lsh-m1',
            title: 'Setting Solid Foundations for Success',
            overview: {
              intro: 'This module builds the personal foundations leaders need before they can effectively lead others.',
              bullets: [
                'Explores the five key foundations: values, attitude, passion, strengths and personal brand.',
                'Defines leadership skills and qualities needed to guide a team.',
                'Introduces planning canvases for goals, ways of working and operating rhythm.',
                'Connects leadership behaviour to accountability, clarity and team trust.',
                'Uses practical reflection to improve self-awareness and leadership consistency.',
              ],
            },
            value: {
              intro: 'Clients strengthen their leadership foundation so they can guide people with clarity, confidence and consistency.',
              bullets: [
                'Greater awareness of leadership strengths, gaps and behaviours.',
                'Clearer connection between values, attitude and daily leadership impact.',
                'Better planning tools for business goals, staff goals and team rhythm.',
                'Stronger ability to build trust and direction across the team.',
                'A foundation for accountability, performance and sustainable culture.',
              ],
            },
          },
          {
            id: 'lsh-m2',
            title: 'Communication: Getting It Right',
            overview: {
              intro: 'This module improves communication habits so leaders create clarity, trust and stronger team alignment.',
              bullets: [
                'Explores why communication breaks down in growing businesses.',
                'Builds practical skills for clearer conversations, listening and feedback.',
                'Connects communication to expectations, accountability and team performance.',
                'Supports more purposeful meetings and operating rhythms.',
                'Encourages leaders to adapt communication style to people and situations.',
              ],
            },
            value: {
              intro: 'Clients reduce confusion, rework and frustration by creating clearer communication across the business.',
              bullets: [
                'Clearer expectations between owners, managers and staff.',
                'Better quality conversations around performance, issues and improvement.',
                'Stronger trust through active listening and consistent follow-through.',
                'Fewer assumptions, mixed messages and avoidable mistakes.',
                'More productive meetings and day-to-day team interactions.',
              ],
            },
          },
          {
            id: 'lsh-m3',
            title: 'Developing Emotional Intelligence',
            overview: {
              intro: 'This module develops the emotional awareness leaders need to manage themselves and influence others effectively.',
              bullets: [
                'Explores self-awareness, self-management and emotional triggers.',
                'Builds empathy and awareness of how others experience leadership behaviour.',
                'Connects emotional intelligence to communication and trust.',
                'Helps leaders respond rather than react under pressure.',
                'Supports stronger relationships, feedback conversations and team resilience.',
              ],
            },
            value: {
              intro: 'Clients become more effective leaders by improving emotional control, empathy and people decision-making.',
              bullets: [
                'Better ability to stay calm and constructive under pressure.',
                'Stronger relationships with staff, customers and stakeholders.',
                'Improved handling of conflict, feedback and difficult conversations.',
                'Greater awareness of how leadership behaviour affects culture.',
                'More confident, human and effective leadership style.',
              ],
            },
          },
          {
            id: 'lsh-m4',
            title: 'Building Habits of Highly Successful Leaders',
            overview: {
              intro: 'This module turns leadership intent into daily habits that support focus, consistency and long-term performance.',
              bullets: [
                'Explores why habits shape leadership outcomes more than intentions.',
                'Identifies current leadership habits that help or hinder performance.',
                'Builds practical routines for communication, planning and follow-up.',
                'Connects habits to values, goals, accountability and team culture.',
                'Encourages small, consistent changes that compound over time.',
              ],
            },
            value: {
              intro: 'Clients build leadership routines that make good management more consistent and less reactive.',
              bullets: [
                'Stronger daily and weekly rhythm for leading the business.',
                'Improved consistency in communication, follow-up and decision-making.',
                'Less reliance on motivation and more reliance on practical routines.',
                'Better alignment between leadership behaviour and business goals.',
                'A stronger example for staff to follow.',
              ],
            },
          },
          {
            id: 'lsh-m5',
            title: 'Prioritisation: How to Focus When Everything Is Urgent',
            overview: {
              intro: 'This module helps leaders separate urgent noise from high-value work that moves the business forward.',
              bullets: [
                'Introduces practical priority-setting when everything feels urgent.',
                'Uses tools such as the Eisenhower Matrix to sort work.',
                'Distinguishes vital, functional, delegable and low-value activities.',
                'Connects prioritisation to strategic goals, delegation and owner time.',
                'Builds habits for setting priorities daily and reviewing focus.',
              ],
            },
            value: {
              intro: 'Clients regain control of time by focusing on work that improves profit, people and future freedom.',
              bullets: [
                'Clearer understanding of which activities deserve owner attention.',
                'Reduced time spent firefighting or completing low-value tasks.',
                'Better delegation of work that does not require the owner.',
                'Stronger focus on strategic activities that build long-term value.',
                'More disciplined use of time across leadership and management.',
              ],
            },
          },
          {
            id: 'lsh-m6',
            title: 'Personal Brand Development',
            overview: PENDING,
            value: PENDING,
          },
        ],
      },
      {
        id: 'lead-with-impact',
        title: 'Lead with Impact: Bring Out the Best in Your Team',
        overview: { intro: '', bullets: [] },
        value: { intro: '', bullets: [] },
        modules: [
          { id: 'lwi-m1', title: 'Mastering the Art of Effective Feedback', overview: PENDING, value: PENDING },
          { id: 'lwi-m2', title: 'Managing Continuing Underperformance', overview: PENDING, value: PENDING },
          { id: 'lwi-m3', title: 'How to Delegate Effectively', overview: PENDING, value: PENDING },
          { id: 'lwi-m4', title: 'How to Run Productive and Engaging Meetings', overview: PENDING, value: PENDING },
          { id: 'lwi-m5', title: 'How to Lead Change and Get Results', overview: PENDING, value: PENDING },
          { id: 'lwi-m6', title: 'How to Manage and Resolve Conflict', overview: PENDING, value: PENDING },
          { id: 'lwi-m7', title: 'How to Build a Culture of High Performance', overview: PENDING, value: PENDING },
          { id: 'lwi-m8', title: 'How to Create a Culture of Collaboration', overview: PENDING, value: PENDING },
          { id: 'lwi-m9', title: 'How to Create a Culture of Accountability', overview: PENDING, value: PENDING },
          { id: 'lwi-m10', title: 'How to Build and Maintain Relationships that Last', overview: PENDING, value: PENDING },
        ],
      },
      {
        id: 'secret-weapon',
        title: 'The Secret Weapon: How Coaching Transforms Teams',
        overview: { intro: '', bullets: [] },
        value: { intro: '', bullets: [] },
        modules: [
          { id: 'sw-m1', title: 'Coaching for Higher Performance', overview: PENDING, value: PENDING },
        ],
      },
    ],
  },
  {
    id: 'kickstart',
    title: 'KickStart',
    icon: '⚡',
    description: 'Fast-track clarity, execution, and mindset in three focused weeks.',
    route: '/courses/kickstart',
    items: [
      { id: 'week1', title: 'Week 1: Clarity and Identity', overview: PENDING, value: PENDING },
      { id: 'week2', title: 'Week 2: Execution and Systems', overview: PENDING, value: PENDING },
      { id: 'week3', title: 'Week 3: Mindset', overview: PENDING, value: PENDING },
    ],
  },
  {
    id: 'stop-the-chaos',
    title: 'Stop the Chaos',
    icon: '⏱️',
    description: 'Build the habit of intentional weekly planning that drives results.',
    route: '/courses/stop-the-chaos',
    items: [
      { id: 'week-you-plan', title: 'The Week You Plan Is The Week You Win', overview: PENDING, value: PENDING },
    ],
  },
];
