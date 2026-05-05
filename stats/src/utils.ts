export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });

  return new Date(
    dateParts[2] as number,
    (dateParts[1] as number) - 1,
    dateParts[0],
  );
};
