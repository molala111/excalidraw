import "./App.scss";
declare global {
    interface Window {
        ExcalidrawLib: any;
    }
}
export default function App(): JSX.Element;
