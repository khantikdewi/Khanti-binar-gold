import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";

const CarCardSkeleton = () => {
  return (
    <Card sx={{ width: { xs: "100%", md: "32%" }, mb: { xs: "16px", sm: "24px" }, p: { xs: "16px", sm: "24px" } }}>
      <Skeleton animation="wave" variant="rectangular" height={100} />
      <Skeleton animation="wave" variant="text" height={50} />
      <Skeleton animation="wave" variant="rectangular" height={150} />
    </Card>
  );
};

export default CarCardSkeleton;
