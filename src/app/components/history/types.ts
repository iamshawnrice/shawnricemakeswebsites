export type ChapterT = {
    text: string;
    imagePath: string;
    timeSpan: string;
    title: string;
}

export type HistoryT = {
    chapters: ChapterT[];
}