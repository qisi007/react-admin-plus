import { TabItem } from "../../interface/home_interface";
export const framePage = ({prop}: any) => {
    let { title } = (prop as TabItem);
    return title;
}