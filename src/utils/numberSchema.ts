import { ColorSchema, digits } from "./numberSchemaData";




export function numberColorsSchema(value: number): ColorSchema {
  let digitColor = digits.find(digitSchema => digitSchema.id === value);
  if(!digitColor) return {
    id: 0,
    top: true,
    bottom: true,
    middle: false,
    bottomLeft: true,
    bottomRight: true,
    topLeft: true,
    topRight: true
  }
  return digitColor
}