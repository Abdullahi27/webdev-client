"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number] & {
  until?: string;
};

export const emptyAssignment: Assignment = {
  _id: "new",
  title: "New Assignment",
  course: "",
  description: "",
  points: 100,
  due: "",
  available: "",
  until: "",
};

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
  findAssignment: (assignmentId: string) => Assignment | undefined;
};

export const useAssignmentsStore =
  create<AssignmentsStore>((set, get) => ({
    assignments: assignmentsJson as Assignment[],

    addAssignment: (assignment) =>
      set((state) => ({
        assignments: [
          ...state.assignments,
          {
            ...assignment,
            _id: crypto.randomUUID(),
          },
        ],
      })),

    deleteAssignment: (assignmentId) =>
      set((state) => ({
        assignments: state.assignments.filter(
          (assignment) =>
            assignment._id !== assignmentId
        ),
      })),

    updateAssignment: (assignment) =>
      set((state) => ({
        assignments: state.assignments.map(
          (currentAssignment) =>
            currentAssignment._id === assignment._id
              ? assignment
              : currentAssignment
        ),
      })),

    findAssignment: (assignmentId) =>
      get().assignments.find(
        (assignment) =>
          assignment._id === assignmentId
      ),
  }));