// check that the userId specified owns the documents
export let ownsDocument = function(userId, doc) {
  return doc && (doc.userId === userId || doc.userId === '');
};
