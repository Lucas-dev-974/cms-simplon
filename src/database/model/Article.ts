import AbstractModel from "./AbstractModel";
import { ModelInterface } from "../../Interfaces/ModelInterface";
import { FieldInterface } from "../../Interfaces/FieldInterface";
import { FieldEnum } from "../../enum/FieldEnum";

class Article extends AbstractModel implements ModelInterface{
    table: string = "articles";
    fields: Array<FieldInterface> = [];
}

const article = new Article('articles', [
    { fields: 'id',      type: FieldEnum.Number },
    { fields: 'title',   type: FieldEnum.String },
    { fields: 'content', type: FieldEnum.String},
]);

export default article;