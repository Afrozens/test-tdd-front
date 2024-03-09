const ValidateError = ({ error }: { error: string | undefined }) => {
  return (
    <>
      {error && (
        <p className="mt-1 ml-1 text-xs text-red-500 self-start ">{error}</p>
      )}
    </>
  );
};

export default ValidateError;
