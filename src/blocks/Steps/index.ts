import { Block } from "payload/types";
import richText from "../../fields/richText";

export const Steps: Block = {
  slug: 'steps',
  fields: [
    richText(),
  ]
}