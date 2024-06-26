import { NonDeletedExcalidrawElement } from "../element/types";
import { AppState, BinaryFiles, SaveAsImageOptions } from "../types";
import "./ExportDialog.scss";
import { ActionManager } from "../actions/manager";
export declare const ErrorCanvasPreview: () => JSX.Element;
export declare type ExportCB = (elements: readonly NonDeletedExcalidrawElement[], scale?: number) => void;
export declare const ImageExportDialog: ({ elements, appState, files, options, exportPadding, actionManager, onExportToPng, onExportToSvg, onExportToClipboard, }: {
    appState: AppState;
    elements: readonly NonDeletedExcalidrawElement[];
    files: BinaryFiles;
    options: SaveAsImageOptions;
    exportPadding?: number | undefined;
    actionManager: ActionManager;
    onExportToPng: ExportCB;
    onExportToSvg: ExportCB;
    onExportToClipboard: ExportCB;
}) => JSX.Element;
