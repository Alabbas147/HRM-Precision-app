/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type EmployeeStatus = 'ACTIVE' | 'ON LEAVE' | 'INACTIVE';

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: EmployeeStatus;
  avatar: string;
  joinedDate: string;
  employmentType: string;
  manager: string;
  workModel: string;
  phone: string;
  location: string;
}

export interface Activity {
  id: string;
  type: 'NEW_HIRE' | 'REVIEW' | 'URGENT' | 'SYSTEM';
  title: string;
  description: string;
  timestamp: string;
  meta?: string;
}

export interface Review {
  id: string;
  employeeName: string;
  type: string;
  date: string;
  time?: string;
  avatar: string;
}

export interface Goal {
  id: string;
  label: string;
  progress: number;
  color: string;
}
