export const venueCapacity = 400;

export const getDbPath = (): string => {
  if (!process.env.DB_PATH)
    throw new Error("No environment variables. Read README.md");

  return process.env.DB_PATH;
};
