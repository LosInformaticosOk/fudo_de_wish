const imgUrl =
  "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png";

export const FoodCard = ({
  foodName,
  foodPrice,
  foodIngredients,
}: {
  foodName: string;
  foodPrice: number;
  foodIngredients: string;
}) => {
  return (
    <div>
      <div>{foodName}</div>
      <div>{foodPrice}</div>
      <div>{foodIngredients}</div>
    </div>
  );
};
