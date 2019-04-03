/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MinValidator = /** @class */ (function () {
    function MinValidator() {
    }
    /**
     * @param {?} min
     * @return {?}
     */
    MinValidator.prototype.validate = /**
     * @param {?} min
     * @return {?}
     */
    function (min) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            if (control.hidden) {
                return null;
            }
            if (control.value && control.value.length !== 0) {
                /** @type {?} */
                var v = control.value;
                return v >= min ? null : { 'min': { requiredValue: min, actualValue: v } };
            }
            return null;
        });
    };
    return MinValidator;
}());
export { MinValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubXJzLWZvcm1lbnRyeS8iLCJzb3VyY2VzIjpbImZvcm0tZW50cnkvdmFsaWRhdG9ycy9taW4udmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQUFBO0lBbUJBLENBQUM7Ozs7O0lBaEJDLCtCQUFROzs7O0lBQVIsVUFBUyxHQUFXO1FBRWxCLE1BQU07Ozs7UUFBQyxVQUFDLE9BQXVCO1lBRTdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7b0JBRTFDLENBQUMsR0FBVyxPQUFPLENBQUMsS0FBSztnQkFDL0IsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdFLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFDO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmZUZvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QtY29udHJvbHMtZXh0ZW5zaW9uL2FmZS1mb3JtLWNvbnRyb2wnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pblZhbGlkYXRvciB7XHJcblxyXG5cclxuICB2YWxpZGF0ZShtaW46IG51bWJlcikge1xyXG5cclxuICAgIHJldHVybiAoY29udHJvbDogQWZlRm9ybUNvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcclxuXHJcbiAgICAgIGlmIChjb250cm9sLmhpZGRlbikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb250cm9sLnZhbHVlICYmIGNvbnRyb2wudmFsdWUubGVuZ3RoICE9PSAwKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHY6IG51bWJlciA9IGNvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHYgPj0gbWluID8gbnVsbCA6IHsgJ21pbic6IHsgcmVxdWlyZWRWYWx1ZTogbWluLCBhY3R1YWxWYWx1ZTogdiB9IH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19