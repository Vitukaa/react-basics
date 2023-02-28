import { transliterate as tr, slugify } from "transliteration"
export default function Option(props) {
    let { arr } = props

    let optionElement = arr.map((element, index)=> <option value={slugify(element)} key={index}>{element}</option>)

    return optionElement
}