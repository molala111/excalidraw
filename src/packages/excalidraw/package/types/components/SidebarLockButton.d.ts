import "./ToolIcon.scss";
import "./SidebarLockButton.scss";
declare type SidebarLockIconProps = {
    checked: boolean;
    onChange?(): void;
};
export declare const SidebarLockButton: (props: SidebarLockIconProps) => JSX.Element;
export {};
