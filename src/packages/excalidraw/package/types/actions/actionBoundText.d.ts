export declare const actionUnbindText: {
    name: "unbindText";
    contextItemLabel: string;
    trackEvent: {
        category: "element";
    };
    contextItemPredicate: (elements: readonly import("../element/types").ExcalidrawElement[], appState: import("../types").AppState) => boolean;
    perform: (elements: readonly import("../element/types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: readonly import("../element/types").ExcalidrawElement[];
        appState: Readonly<import("../types").AppState>;
        commitToHistory: true;
    };
} & {
    keyTest?: undefined;
};
export declare const actionBindText: {
    name: "bindText";
    contextItemLabel: string;
    trackEvent: {
        category: "element";
    };
    contextItemPredicate: (elements: readonly import("../element/types").ExcalidrawElement[], appState: import("../types").AppState) => boolean;
    perform: (elements: readonly import("../element/types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>) => {
        elements: import("../element/types").ExcalidrawElement[];
        appState: {
            selectedElementIds: {
                [x: string]: true;
            };
            isLoading: boolean;
            errorMessage: string | null;
            draggingElement: import("../element/types").NonDeletedExcalidrawElement | null;
            resizingElement: import("../element/types").NonDeletedExcalidrawElement | null;
            multiElement: import("../element/types").NonDeleted<import("../element/types").ExcalidrawLinearElement> | null;
            selectionElement: import("../element/types").NonDeletedExcalidrawElement | null;
            isBindingEnabled: boolean;
            startBoundElement: import("../element/types").NonDeleted<import("../element/types").ExcalidrawBindableElement> | null;
            suggestedBindings: import("../element/binding").SuggestedBinding[];
            editingElement: import("../element/types").NonDeletedExcalidrawElement | null;
            editingLinearElement: import("../element/linearElementEditor").LinearElementEditor | null;
            activeTool: {
                type: "line" | "arrow" | "text" | "selection" | "rectangle" | "diamond" | "ellipse" | "image" | "freedraw" | "eraser";
                lastActiveToolBeforeEraser: import("../types").LastActiveToolBeforeEraser;
                locked: boolean;
                customType: null;
            } | {
                type: "custom";
                customType: string;
                lastActiveToolBeforeEraser: import("../types").LastActiveToolBeforeEraser;
                locked: boolean;
            };
            penMode: boolean;
            penDetected: boolean;
            exportBackground: boolean;
            exportEmbedScene: boolean;
            exportWithDarkMode: boolean;
            exportScale: number;
            currentItemStrokeColor: string;
            currentItemBackgroundColor: string;
            currentItemFillStyle: import("../element/types").FillStyle;
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: import("../element/types").StrokeStyle;
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: number;
            currentItemFontSize: number;
            currentItemTextAlign: import("../element/types").TextAlign;
            currentItemStrokeSharpness: import("../element/types").StrokeSharpness;
            currentItemStartArrowhead: import("../element/types").Arrowhead | null;
            currentItemEndArrowhead: import("../element/types").Arrowhead | null;
            currentItemLinearStrokeSharpness: import("../element/types").StrokeSharpness;
            viewBackgroundColor: string;
            scrollX: number;
            scrollY: number;
            cursorButton: "up" | "down";
            scrolledOutside: boolean;
            name: string;
            isResizing: boolean;
            isRotating: boolean;
            zoom: Readonly<{
                value: import("../types").NormalizedZoomValue;
            }>;
            openMenu: "canvas" | "shape" | null;
            openPopup: "canvasColorPicker" | "backgroundColorPicker" | "strokeColorPicker" | null;
            lastPointerDownWith: import("../element/types").PointerType;
            previousSelectedElementIds: {
                [id: string]: boolean;
            };
            shouldCacheIgnoreZoom: boolean;
            showHelpDialog: boolean;
            toast: {
                message: string;
                closable?: boolean | undefined;
                duration?: number | undefined;
            } | null;
            zenModeEnabled: boolean;
            theme: string;
            gridSize: number | null;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: string | null;
            width: number;
            height: number;
            offsetTop: number;
            offsetLeft: number;
            isLibraryOpen: boolean;
            isLibraryMenuDocked: boolean;
            fileHandle: import("browser-fs-access").FileSystemHandle | null;
            collaborators: Map<string, import("../types").Collaborator>;
            showStats: boolean;
            currentChartType: import("../element/types").ChartType;
            pasteDialog: {
                shown: false;
                data: null;
            } | {
                shown: true;
                data: import("../charts").Spreadsheet;
            };
            pendingImageElementId: string | null;
            showHyperlinkPopup: false | "info" | "editor";
        };
        commitToHistory: true;
    };
} & {
    keyTest?: undefined;
};
