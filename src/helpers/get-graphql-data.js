const { getDb } = require("./db");

const getSelectedFields = require("./get-selected-fields");

const getGraphqlData = async (collection, info, args) => {
  const db = await getDb();
  const { ...filters } = args;
  const selectedFields = getSelectedFields(info);
  const filterFields = [];
  Object.keys(filters).forEach((field) => {
    const filter = {};
    if (Array.isArray(filters[field])) {
      filter[field] = {
        $in: filters[field],
      };
    } else {
      filter[field] = filters[field];
    }
    filterFields.push(filter);
  });
  if (filterFields.length > 0) {
    return db
      .collection(collection)
      .find({ $and: filterFields }, selectedFields)
      .toArray();
  }
  return db.collection(collection).find({}, selectedFields).toArray();
};

module.exports = getGraphqlData;
