import { FC } from "react";

import { ChapterT } from "./types";

export const Chapter: FC<ChapterT> = ({ title, text, imagePath, timeSpan })  => {
    return (
        <div>
            <img src={imagePath} alt="chapter image" />
            <small>{timeSpan}</small>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}