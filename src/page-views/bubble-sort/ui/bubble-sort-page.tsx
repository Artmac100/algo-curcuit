"use client";
import {
  BubbleInsertionSortVisualize,
  bubbleSort,
  createStepSnapshot,
  languagesMapSettings,
} from "@/widgets/bubble-insertion-sort-visualize";
import { TypographyH1 } from "@/components/ui/typography";

const getIsSorted = (index: number, sortedIndex: number) =>
  index >= sortedIndex;

export function BubbleSortPage() {
  return (
    <main className="flex flex-col px-4 sm:px-24 py-10">
      <TypographyH1 className="self-center">Bubble Sort</TypographyH1>
      <BubbleInsertionSortVisualize
        createStepSnapshotThunk={createStepSnapshot}
        sort={bubbleSort}
        languagesMapSettings={languagesMapSettings}
        getIsSorted={getIsSorted}
      />
    </main>
  );
}
