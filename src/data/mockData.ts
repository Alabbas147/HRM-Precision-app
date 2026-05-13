/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Employee, Activity, Review, Goal } from '../types';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    email: 's.jenkins@hrmportal.com',
    role: 'Senior Architect',
    department: 'Product Engineering',
    status: 'ACTIVE',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6djZ6vwKhJwbHxlyQoyT5cFk62i-Rq0am9jF1c5FxCsB-2UZWG5DlfP5GSn-jDDpSkt1s1BZqdTCnBfcFD9t9sjEBr4nc3ZJY1o7ZqTpj3V_jPTvH3CU84phk5buYsNi_j_SoD-V3jVu0rx5Cl_U4jzb2DViEH4Vw25wub3Fft0uTht3CIsNmqQhFW5IrFKOkIK9CBDkxAwZx0XH6a81zNVvmFDhb4LRjdoVvoMmtHcSD1jEBsbLLVXQO_4YqoDmqc-cG8yoaeQI',
    joinedDate: 'Mar 15, 2020',
    employmentType: 'Full-time',
    manager: 'Alex Rivera',
    workModel: 'Remote',
    phone: '+1 (555) 123-4567',
    location: 'Austin, TX'
  },
  {
    id: '2',
    name: 'Marcus Thompson',
    email: 'm.thompson@hrmportal.com',
    role: 'Head of Growth',
    department: 'Marketing & Sales',
    status: 'ACTIVE',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0WUI9XskzEpL_BBCv4ZNBUSXeZlm5dC8kDbMr5GzxUMD3QS9Y1MqD9x7G-sSYBDyzY3zKuvFrzk9LQE43PBQ2jJ6mUZY8oRbuuiqrHh0rjUPdH7Z3jm3BLUEwh0SsSp8AktBVISEHhbPLHp65Qsw1vGbiJ66bGrCMQYT2O97HpqlXL_nsrAV4qS3t719sE512k4kkXebQIbgm-BaZ9RxJeIlZuXB9645uOJK5wZ4FKa1rFlukErBj8Ts2Tm40rm6dJcB4nDQqJZA',
    joinedDate: 'Oct 12, 2021',
    employmentType: 'Full-time',
    manager: 'Sarah Jenkins',
    workModel: 'Hybrid',
    phone: '+1 (555) 012-3456',
    location: 'San Francisco, CA'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    email: 'e.rodriguez@hrmportal.com',
    role: 'Lead Recruiter',
    department: 'People Ops',
    status: 'ON LEAVE',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfDjiT9tPc13jZ5VRkEFY5aK1Y_vY1kr-ysA4HjxriJpiQCrJSOXFBYpitu5LS4Db9eRXPmVXsqNFR7jGXZC01nFWt0JJUO2p2og9K4k-J-j3HYQ18IaIkl3qOJ8xGxZZyg-Q1UBZfYnuKYyOC6NnmmlNEXOnBigMZWyVNjTIFbW8HiKFZPnDpdJQahHBeRGbNRaUfGAmqvxGUTNonNYvPkjmvjAT4QAhnGeREhQ71YTook374ISqFqhYATBv5zNEzO4T6NLd419w',
    joinedDate: 'Jan 05, 2022',
    employmentType: 'Full-time',
    manager: 'Marcus Thompson',
    workModel: 'On-site',
    phone: '+1 (555) 987-6543',
    location: 'Miami, FL'
  },
  {
    id: '4',
    name: 'David Chen',
    email: 'd.chen@hrmportal.com',
    role: 'Compliance Officer',
    department: 'Finance',
    status: 'ACTIVE',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO7uBhvHwCSp1RioGF_eTzumuseUwXi7_dNxHbXCHmS5lLpCeo74QB1X8anb3r1FC5w8UOhNzdndETVmvrUIFoeTP9o69pgoRGYY08crSXuK1QBtJlrk9o3aaNcqfY3G_ZVetjtujpNJkwlrBVjODRE672g3pC5ZkcO1JpOeoWGe5zbR6YgOc7zjsA6OqoHE6T06EuIzqqzTbL9I5GP46hcrqCoVGKzakZvZEHqs4pHenXBsfloQBp5O4FvyBfXwTtDPNd3EzNPHY',
    joinedDate: 'Jun 22, 2019',
    employmentType: 'Full-time',
    manager: 'Sarah Jenkins',
    workModel: 'Hybrid',
    phone: '+1 (555) 456-7890',
    location: 'Chicago, IL'
  }
];

export const mockActivities: Activity[] = [
  {
    id: 'a1',
    type: 'NEW_HIRE',
    title: 'New hire: Sarah Jenkins joined the Design Team',
    description: 'Senior Product Designer onboarding in progress',
    timestamp: '2 hours ago',
    meta: 'Onboarding'
  },
  {
    id: 'a2',
    type: 'REVIEW',
    title: 'Review Completed: Q3 performance review for Michael Chen',
    description: 'HR Approval Required for final sign-off',
    timestamp: '5 hours ago',
    meta: 'Finalized'
  },
  {
    id: 'a3',
    type: 'URGENT',
    title: 'Urgent: 5 employees in Engineering expiring certifications',
    description: 'Manual intervention required for renewal notifications',
    timestamp: 'Yesterday',
    meta: 'Alert'
  },
  {
    id: 'a4',
    type: 'SYSTEM',
    title: 'System Update: Payroll integration synced',
    description: 'October cycle successfully completed and verified',
    timestamp: '2 days ago',
    meta: 'Auto-logged'
  }
];

export const mockReviews: Review[] = [
  {
    id: 'r1',
    employeeName: 'Sarah Chen',
    type: 'Annual Performance',
    date: 'OCT 14',
    time: 'MON, 10:00',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDS3szC7TCfgv1n9LlUGCJOdYz10uijcYKfOp08mj295joQZvGtfaB6gkuQ7X09f3DhL1BdTCIF_fxgRGPkJZUF5EcYQslvp3SSee2fads0YH8Px5Dv2BDHD1gG5V7fH4cVC2gZpBrg_n8LYTGliKMeJVD4XFMQBFOpwhXT72nAPAg14JXbFcfsOzC9Os_gUoiucU9qUVviVTWz8CaNVGZL-HyJmqV5NzUsHMVQ8UQw3czmy2KD2JD1vPzoyKPQtvjTXkEWIHb1VQ'
  },
  {
    id: 'r2',
    employeeName: 'David Miller',
    type: 'Probation Review',
    date: 'OCT 18',
    time: 'WED, 14:30',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBrt8AzV_OVP1MBVljC8IiA_eabrfkA8GJPs_GFy2OmUqcfCsm3AD9quQVIbslygps1RZ10oWVMHKBCe1VYZjl5m7-IBwHMC1I_c9o_gxCjpDFwj3ON0jQ3nXd8bbNb1wZG5m8SkkQ9TCtPNFHjbjU6_B6RKYfgcb_v81tdJqi1EQfFiVWOWVafkAddNKn4mnKVnRXxuRFBcll7-2hY4Lkz9HtTfJqgcykFYAW0nPSVEUU7UCp8Ek0ejTvOAptIiY94yOsKzDbo24'
  }
];

export const mockGoals: Goal[] = [
  { id: 'g1', label: 'Customer Retention Rate', progress: 82, color: 'bg-emerald-500' },
  { id: 'g2', label: 'Q3 Revenue Target', progress: 64, color: 'bg-blue-600' },
  { id: 'g3', label: 'Employee Net Promoter Score (eNPS)', progress: 91, color: 'bg-emerald-600' },
  { id: 'g4', label: 'Product Feature Velocity', progress: 45, color: 'bg-slate-400' }
];
