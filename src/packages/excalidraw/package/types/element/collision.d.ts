import * as GA from "../ga";
import { NonDeletedExcalidrawElement, ExcalidrawBindableElement, ExcalidrawElement, ExcalidrawRectangleElement, ExcalidrawDiamondElement, ExcalidrawTextElement, ExcalidrawEllipseElement, NonDeleted, ExcalidrawImageElement } from "./types";
import { Point } from "../types";
import { AppState } from "../types";
export declare const hitTest: (element: NonDeletedExcalidrawElement, appState: AppState, x: number, y: number) => boolean;
export declare const isHittingElementBoundingBoxWithoutHittingElement: (element: NonDeletedExcalidrawElement, appState: AppState, x: number, y: number) => boolean;
export declare const isHittingElementNotConsideringBoundingBox: (element: NonDeletedExcalidrawElement, appState: AppState, point: readonly [number, number]) => boolean;
export declare const isPointHittingElementBoundingBox: (element: NonDeleted<ExcalidrawElement>, [x, y]: readonly [number, number], threshold: number) => boolean;
export declare const bindingBorderTest: (element: NonDeleted<ExcalidrawBindableElement>, { x, y }: {
    x: number;
    y: number;
}) => boolean;
export declare const maxBindingGap: (element: ExcalidrawElement, elementWidth: number, elementHeight: number) => number;
export declare const distanceToBindableElement: (element: ExcalidrawBindableElement, point: readonly [number, number]) => number;
export declare const pointInAbsoluteCoords: (element: ExcalidrawElement, point: readonly [number, number]) => readonly [number, number];
export declare const determineFocusDistance: (element: ExcalidrawBindableElement, a: readonly [number, number], b: readonly [number, number]) => number;
export declare const determineFocusPoint: (element: ExcalidrawBindableElement, focus: number, adjecentPoint: readonly [number, number]) => readonly [number, number];
export declare const intersectElementWithLine: (element: ExcalidrawBindableElement, a: readonly [number, number], b: readonly [number, number], gap?: number) => Point[];
export declare const getCircleIntersections: (center: readonly [number, number, number, number, number, number, number, number], radius: number, line: readonly [number, number, number, number, number, number, number, number]) => GA.Point[];
export declare const findFocusPointForEllipse: (ellipse: ExcalidrawEllipseElement, relativeDistance: number, point: readonly [number, number, number, number, number, number, number, number]) => readonly [number, number, number, number, number, number, number, number];
export declare const findFocusPointForRectangulars: (element: ExcalidrawRectangleElement | ExcalidrawImageElement | ExcalidrawDiamondElement | ExcalidrawTextElement, relativeDistance: number, point: readonly [number, number, number, number, number, number, number, number]) => readonly [number, number, number, number, number, number, number, number];
