import { useOutletContext } from "react-router-dom";
import List from "../components/List";

export default function AlbumIndex() {
    const list = useOutletContext();
    return (
        <div className="">
            <List list={list}></List>
        </div>
    )
}