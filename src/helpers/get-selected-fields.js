const {
  parseResolveInfo,
  simplifyParsedResolveInfoFragmentWithType,
} = require("graphql-parse-resolve-info");

const getSelectedFields = (info) => {
  const parsedResolveInfoFragment = parseResolveInfo(info);
  const { fields } = simplifyParsedResolveInfoFragmentWithType(
    parsedResolveInfoFragment,
    info.returnType
  );
  const dbFields = [];
  Object.keys(fields).forEach((field) => {
    const outputField = fields[field].alias;
    const dbMapping = {};
    dbMapping[outputField] = 1;
    dbFields.push(dbMapping);
  });
  return dbFields;
};

module.exports = getSelectedFields;
