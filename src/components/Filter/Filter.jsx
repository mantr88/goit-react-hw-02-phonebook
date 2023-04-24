import { FilterLable } from "./Filter.styled"

export const Filter = ({value, onChange}) => {
    return (
        <FilterLable>
            Filter
            <input type='text' value={value} onChange={onChange}></input>
        </FilterLable>
    )
}