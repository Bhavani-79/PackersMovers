import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CategoryList, CatergoryHead, CategoryListContainer, CategoryUnorder, CategoryItemList, CategoryItemHead, CategoryInnerItem, CategoryInnerItemUnorder, CategoryInnerItemContainer, CategoryInnerItemPara, CategoryInnerItemPara1 } from "./styledComponent";

const CategoryItem = (props) => {
  const { details } = props
  const { displayName } = details


  const [isCategoryExpand, setCategory] = useState(false)
  const onClickDownArrow = () => {
    setCategory((prevState) => !prevState)
  }

  const renderCategoryDetails = () => {
    const { details } = props
    const { category } = details

    return (
      <CategoryUnorder>
        {category.map((each) => (
          <CategoryItemList key={each.id}>
            <CategoryItemHead>{each.name}</CategoryItemHead>
            <CategoryInnerItemUnorder>

              {each.items.map((each) => (

                (each.qty > 0 && (
                  <CategoryInnerItem>
                    <CategoryInnerItemContainer key={each.id}>
                      <CategoryInnerItemPara>{each.displayName}</CategoryInnerItemPara>
                      <CategoryInnerItemPara>{each.qty}</CategoryInnerItemPara>

                    </CategoryInnerItemContainer>
                    {each.type.map((each) => (
                      (each.selected === true && (<CategoryInnerItemPara1>{each.option}</CategoryInnerItemPara1>))
                    ))}
                  </CategoryInnerItem>
                ))

              ))}
            </CategoryInnerItemUnorder>

          </CategoryItemList>
        ))}

      </CategoryUnorder>
    )
  }


  return (
    <>
      <CategoryListContainer>
        <CategoryList >

          <CatergoryHead>{displayName}</CatergoryHead>
          <RiArrowDropDownLine color=" #5e5e5e" size="30" onClick={onClickDownArrow} />

        </CategoryList>
        {isCategoryExpand && renderCategoryDetails()}

      </CategoryListContainer>

    </>

  )
}

export default CategoryItem