import { GraphNode } from "../apiresult/graph-node";

export class Epoch {

    ////////////////
    // PROPERTIES //
    ////////////////


    public resourceId: number;

    public name: string;
    public period: [string, string];
    public sequence: number;


    /////////////
    // METHODS //
    /////////////


    /**
     * Gets an instance of Epoch from a GraphNode instance.
     * @param node the graphnode
     * @returns {Epoch}
     */
    public static fromGraphNode(node: GraphNode): Epoch {

        const epoch: Epoch = new Epoch();

        epoch.name = node.getValues("limc:name")[0];
        epoch.period = Epoch.getPeriodFromString(node.getValues("limc:period")[0]);
        epoch.sequence = parseInt(node.getValues("limc:sequence")[0], 10);

        return epoch;

    }

    /**
     * Gets a period from a string
     * @param str a string formatted as "fromYear - toYear"
     * @returns {[string, string]}
     */
    public static getPeriodFromString(str: string): [string, string] {

        if (typeof str === "undefined") return ["", ""];

        let period: [string, string] = ["", ""];

        let split: string[] = str.split(" - ");

        if (split.length == 2) {
            period[0] = split[0];
            period[1] = split[1];
        }

        return period;

    }

}
