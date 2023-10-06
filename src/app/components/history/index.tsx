import { FC } from 'react';

import { Chapter } from "./chapter";
import { ChapterT, HistoryT } from "./types";

export const History: FC<HistoryT> = ({ chapters }) => {
    return (
        <div>
            {chapters.map((chapter: ChapterT, index: number) => {
                return (
                    <Chapter
                        key={index}
                        title={chapter.title}
                        text={chapter.text}
                        imagePath={chapter.imagePath}
                        timeSpan={chapter.timeSpan}
                    />
                );
            })}
        </div>
    );
}