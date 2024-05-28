import BoxItem from "./boxItem";
import ListHeader from "./ListHeader";

const List = () => {
  const boxItems = [];

  for (let i = 0; i < 4; i++) {
    boxItems.push(<BoxItem key={i} />);
  }
  return (
    <div className="candidate-list-wrapper applications">
      <ListHeader />
      <div className="candidate-list-content mt-1">
      {boxItems}
      </div>
    </div>
  );
};

export default List;
