import Beer from "./CategoryBeer";
import Wine from "./CategoryWine";
import Sparkling from "./CategorySparkling";
import Spirit from "./CategorySpirit";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";

export default function CategoryPages() {
    const { category } = useParams();

    switch(category) {
        case "vinho":
            return <Wine />;
        case "cerveja":
            return <Beer />;
        case "destilado":
            return <Spirit />;
        case "espumante":
            return <Sparkling />;
        default:
            return <Oval color="#ff8b1e" height={80} width={80} />;
    }
}
