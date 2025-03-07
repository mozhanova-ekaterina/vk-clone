export const Layout = ({
  center,
  header,
  leftSide,
  rightSide,
}: {
  center: React.ReactNode;
  header: React.ReactNode;
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
}) => {
  return (
    <>
      <div className="container mx-auto py-4">
        {header}
        <div className="flex gap-5 py-4">
          <div className="basis-[20%]">{leftSide}</div>
          <div className="grow basis-[60%]">{center}</div>
          <div className="basis-[20%]">{rightSide}</div>
        </div>
      </div>
    </>
  );
};
