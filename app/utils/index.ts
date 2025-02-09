const getCollectionId = (id: string) => {
  const split = id.split("/");
  const newId = split[split.length - 1];
  return newId;
};

export { getCollectionId }