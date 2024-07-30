declare module "json-prune" {
    /**
     * Options for pruning the JSON stringification.
     */
    interface PruneOptions {
        /**
         * The maximal depth of the object to stringify.
         */
        depthDecr?: number;

        /**
         * The maximal length of arrays to stringify.
         */
        arrayMaxLength?: number;

        /**
         * The function to iterate over object properties.
         */
        iterator?: (obj: any, callback: (key: string) => void) => void;

        /**
         * If true, iterates over all properties, including non-enumerable and inherited ones.
         */
        allProperties?: boolean;

        /**
         * If true, iterates over inherited properties as well.
         */
        inheritedProperties?: boolean;

        /**
         * String to use when a value is pruned.
         */
        prunedString?: string;

        /**
         * Custom replacer function for values.
         */
        replacer?: (value: any, prunedString: string, isPruned: boolean) => any;
    }

    /**
     * Interface representing the JSON.prune functionality.
     */
    interface JSONPrune {
        /**
         * Prunes the given value into a JSON string without overflow.
         *
         * @param value The value to prune.
         * @param depthDecr The maximal depth or an options object.
         * @param arrayMaxLength The maximal length of arrays.
         * @returns The pruned JSON string.
         */
        (value: any, depthDecr?: number | PruneOptions, arrayMaxLength?: number): string;

        /**
         * Logs pruned values to the console.
         *
         * @param args The values to log.
         */
        log(...args: any[]): void;

        /**
         * Iterates over all properties, including non-enumerable and inherited ones.
         *
         * @param obj The object to iterate over.
         * @param callback The callback function for each property.
         * @param excluded An optional object to exclude properties.
         */
        forEachProperty(obj: any, callback: (key: string) => void, excluded?: { [key: string]: boolean }): void;
    }

    /**
     * The JSON.prune function.
     */
    const JSONPrune: JSONPrune;

    /**
     * Extending the global JSON interface to include the prune method.
     */
    global {
        interface JSON {
            /**
             * Prunes the given value into a JSON string without overflow.
             *
             * @param value The value to prune.
             * @param depthDecr The maximal depth or an options object.
             * @param arrayMaxLength The maximal length of arrays.
             * @returns The pruned JSON string.
             */
            prune: JSONPrune;
        }
    }

    export = JSONPrune;
}
