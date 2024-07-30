import prune = require('json-prune');

// Test with default parameters
const prunedDefault = prune({ key: 'value', nested: { key: 'nestedValue' } });
console.log(prunedDefault);

// Test with depth and array length parameters
const prunedWithParams = prune({ key: 'value', nested: { key: 'nestedValue' } }, 2, 10);
console.log(prunedWithParams);

// Test with options object
const prunedWithOptions = prune(
    { key: 'value', nested: { key: 'nestedValue' } },
    {
        depthDecr: 2,
        arrayMaxLength: 10,
        prunedString: '<<pruned>>',
        replacer: (value, prunedString, isPruned) => (isPruned ? prunedString : value),
    }
);
console.log(prunedWithOptions);

// Test the log method
prune.log({ key: 'value' });

// Test forEachProperty method
const testObject = { a: 1, b: 2 };
prune.forEachProperty(testObject, key => {
    console.log(key);
});
