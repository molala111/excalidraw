/// <reference types="react" />
import { NonDeleted, ExcalidrawLinearElement, ExcalidrawElement, PointBinding, ExcalidrawBindableElement } from "./types";
import { Point, AppState } from "../types";
import History from "../history";
import Scene from "../scene/Scene";
export declare class LinearElementEditor {
    elementId: ExcalidrawElement["id"] & {
        _brand: "excalidrawLinearElementId";
    };
    /** indices */
    selectedPointsIndices: readonly number[] | null;
    pointerDownState: Readonly<{
        prevSelectedPointsIndices: readonly number[] | null;
        /** index */
        lastClickedPoint: number;
    }>;
    /** whether you're dragging a point */
    isDragging: boolean;
    lastUncommittedPoint: Point | null;
    pointerOffset: Readonly<{
        x: number;
        y: number;
    }>;
    startBindingElement: ExcalidrawBindableElement | null | "keep";
    endBindingElement: ExcalidrawBindableElement | null | "keep";
    constructor(element: NonDeleted<ExcalidrawLinearElement>, scene: Scene);
    static POINT_HANDLE_SIZE: number;
    /**
     * @param id the `elementId` from the instance of this class (so that we can
     *  statically guarantee this method returns an ExcalidrawLinearElement)
     */
    static getElement(id: InstanceType<typeof LinearElementEditor>["elementId"]): NonDeleted<ExcalidrawLinearElement> | null;
    static handleBoxSelection(event: PointerEvent, appState: AppState, setState: React.Component<any, AppState>["setState"]): false | undefined;
    /** @returns whether point was dragged */
    static handlePointDragging(appState: AppState, setState: React.Component<any, AppState>["setState"], scenePointerX: number, scenePointerY: number, maybeSuggestBinding: (element: NonDeleted<ExcalidrawLinearElement>, pointSceneCoords: {
        x: number;
        y: number;
    }[]) => void): boolean;
    static handlePointerUp(event: PointerEvent, editingLinearElement: LinearElementEditor, appState: AppState): LinearElementEditor;
    static handlePointerDown(event: React.PointerEvent<HTMLCanvasElement>, appState: AppState, setState: React.Component<any, AppState>["setState"], history: History, scenePointer: {
        x: number;
        y: number;
    }): {
        didAddPoint: boolean;
        hitElement: NonDeleted<ExcalidrawElement> | null;
    };
    static handlePointerMove(event: React.PointerEvent<HTMLCanvasElement>, scenePointerX: number, scenePointerY: number, editingLinearElement: LinearElementEditor, gridSize: number | null): LinearElementEditor;
    /** scene coords */
    static getPointGlobalCoordinates(element: NonDeleted<ExcalidrawLinearElement>, point: Point): readonly [number, number];
    /** scene coords */
    static getPointsGlobalCoordinates(element: NonDeleted<ExcalidrawLinearElement>): number[][];
    static getPointAtIndexGlobalCoordinates(element: NonDeleted<ExcalidrawLinearElement>, indexMaybeFromEnd: number): Point;
    static pointFromAbsoluteCoords(element: NonDeleted<ExcalidrawLinearElement>, absoluteCoords: Point): Point;
    static getPointIndexUnderCursor(element: NonDeleted<ExcalidrawLinearElement>, zoom: AppState["zoom"], x: number, y: number): number;
    static createPointAt(element: NonDeleted<ExcalidrawLinearElement>, scenePointerX: number, scenePointerY: number, gridSize: number | null): Point;
    /**
     * Normalizes line points so that the start point is at [0,0]. This is
     * expected in various parts of the codebase. Also returns new x/y to account
     * for the potential normalization.
     */
    static getNormalizedPoints(element: ExcalidrawLinearElement): {
        points: (readonly [number, number])[];
        x: number;
        y: number;
    };
    static normalizePoints(element: NonDeleted<ExcalidrawLinearElement>): void;
    static duplicateSelectedPoints(appState: AppState): false | {
        appState: {
            editingLinearElement: {
                selectedPointsIndices: number[];
                elementId: string & {
                    _brand: "excalidrawLinearElementId";
                };
                pointerDownState: Readonly<{
                    prevSelectedPointsIndices: readonly number[] | null;
                    /** index */
                    lastClickedPoint: number;
                }>;
                /** whether you're dragging a point */
                isDragging: boolean;
                lastUncommittedPoint: readonly [number, number] | null;
                pointerOffset: Readonly<{
                    x: number;
                    y: number;
                }>;
                startBindingElement: ExcalidrawBindableElement | "keep" | null;
                endBindingElement: ExcalidrawBindableElement | "keep" | null;
            };
            isLoading: boolean;
            errorMessage: string | null;
            draggingElement: import("./types").NonDeletedExcalidrawElement | null;
            resizingElement: import("./types").NonDeletedExcalidrawElement | null;
            multiElement: NonDeleted<ExcalidrawLinearElement> | null;
            selectionElement: import("./types").NonDeletedExcalidrawElement | null;
            isBindingEnabled: boolean;
            startBoundElement: NonDeleted<ExcalidrawBindableElement> | null;
            suggestedBindings: import("./binding").SuggestedBinding[];
            editingElement: import("./types").NonDeletedExcalidrawElement | null;
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
            currentItemFillStyle: import("./types").FillStyle;
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: import("./types").StrokeStyle;
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: number;
            currentItemFontSize: number;
            currentItemTextAlign: import("./types").TextAlign;
            currentItemStrokeSharpness: import("./types").StrokeSharpness;
            currentItemStartArrowhead: import("./types").Arrowhead | null;
            currentItemEndArrowhead: import("./types").Arrowhead | null;
            currentItemLinearStrokeSharpness: import("./types").StrokeSharpness;
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
            lastPointerDownWith: import("./types").PointerType;
            selectedElementIds: {
                [id: string]: boolean;
            };
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
            currentChartType: import("./types").ChartType;
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
    };
    static deletePoints(element: NonDeleted<ExcalidrawLinearElement>, pointIndices: readonly number[]): void;
    static addPoints(element: NonDeleted<ExcalidrawLinearElement>, targetPoints: {
        point: Point;
    }[]): void;
    static movePoints(element: NonDeleted<ExcalidrawLinearElement>, targetPoints: {
        index: number;
        point: Point;
        isDragging?: boolean;
    }[], otherUpdates?: {
        startBinding?: PointBinding;
        endBinding?: PointBinding;
    }): void;
    private static _updatePoints;
}
