const viewStateKey = "__vs";

export function attachViewState<T>(attachTo: string, defaultValueFactory?: () => T) {
    return (target: any, key: string) => {
        const assureViewState = (obj) => {
            if (typeof obj[attachTo][viewStateKey] === "undefined") {
                // console.log("> creating default view sate");
                obj[attachTo][viewStateKey] = defaultValueFactory();
            }
        }

        // property getter
        var getter = function () {
            // console.log("> getter");
            assureViewState(this);
            return this[attachTo][viewStateKey]
        };

        // property setter
        var setter = function (newVal) {
            // console.log("> setter");
            assureViewState(this);
            this[attachTo][viewStateKey] = newVal;
        };

        // Delete property.
        if (delete target[key]) {
            // Create new property with getter and setter
            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
}

export function getViewState<T>(model: any): T {
    return model[viewStateKey];
}

export function cleanViewState(model: any) {
    return model[viewStateKey] = undefined;
}