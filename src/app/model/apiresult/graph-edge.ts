import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class GraphEdge {

    @JsonProperty("cnt", Number)
    public count: Number = undefined;

    @JsonProperty("label", String)
    public label: String = undefined;

    @JsonProperty("from", String)
    public from: String = undefined;

    @JsonProperty("to", String)
    public to: String = undefined;

}
