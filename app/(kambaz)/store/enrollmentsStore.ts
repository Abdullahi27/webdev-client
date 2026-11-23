"use client";

import {
  create,
} from "zustand";

import enrollmentsJson from "../database/enrollments.json";

export type Enrollment =
  (typeof enrollmentsJson)[number];

type EnrollmentsStore = {
  enrollments: Enrollment[];

  enroll: (
    enrollment: Enrollment
  ) => void;

  unenroll: (
    userId: string,
    courseId: string
  ) => void;

  setEnrollments: (
    enrollments: Enrollment[]
  ) => void;
};

export const useEnrollmentsStore =
  create<EnrollmentsStore>(
    (set) => ({
      enrollments:
        enrollmentsJson as Enrollment[],

      enroll: (
        enrollment
      ) =>
        set((state) => {
          const alreadyEnrolled =
            state.enrollments.some(
              (current) =>
                current.user ===
                  enrollment.user &&
                current.course ===
                  enrollment.course
            );

          if (alreadyEnrolled) {
            return state;
          }

          return {
            enrollments: [
              ...state.enrollments,
              enrollment,
            ],
          };
        }),

      unenroll: (
        userId,
        courseId
      ) =>
        set((state) => ({
          enrollments:
            state.enrollments.filter(
              (enrollment) =>
                !(
                  enrollment.user ===
                    userId &&
                  enrollment.course ===
                    courseId
                )
            ),
        })),

      setEnrollments: (
        enrollments
      ) =>
        set({
          enrollments,
        }),
    })
  );