const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <>
        <label className="border absolute bg-black text-white p-1 m-1 rounded-lg">
          Promoted
        </label>
        <ResturantCard {...props} />
      </>
    );
  };
};

export default withPromotedLabel;
