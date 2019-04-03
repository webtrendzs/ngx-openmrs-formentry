/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var FormErrorsService = /** @class */ (function () {
    function FormErrorsService() {
        this.announceErrorFieldSource = new Subject();
        this.announceErrorField$ = this.announceErrorFieldSource.asObservable();
    }
    /**
     * @param {?} error
     * @return {?}
     */
    FormErrorsService.prototype.announceErrorField = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.announceErrorFieldSource.next(error);
    };
    // Observable string sources
    FormErrorsService.control = null;
    FormErrorsService.tab = null;
    FormErrorsService.decorators = [
        { type: Injectable },
    ];
    return FormErrorsService;
}());
export { FormErrorsService };
if (false) {
    /** @type {?} */
    FormErrorsService.control;
    /** @type {?} */
    FormErrorsService.tab;
    /** @type {?} */
    FormErrorsService.prototype.announceErrorFieldSource;
    /** @type {?} */
    FormErrorsService.prototype.announceErrorField$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1lcnJvcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubXJzLWZvcm1lbnRyeS8iLCJzb3VyY2VzIjpbImZvcm0tZW50cnkvc2VydmljZXMvZm9ybS1lcnJvcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTS9CO0lBQUE7UUFNUyw2QkFBd0IsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ2pELHdCQUFtQixHQUFvQixJQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFJN0YsQ0FBQzs7Ozs7SUFIUSw4Q0FBa0I7Ozs7SUFBekIsVUFBMEIsS0FBYTtRQUNyQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFQRCw0QkFBNEI7SUFDZCx5QkFBTyxHQUFrRCxJQUFJLENBQUM7SUFDOUQscUJBQUcsR0FBVyxJQUFJLENBQUM7O2dCQUxsQyxVQUFVOztJQVdYLHdCQUFDO0NBQUEsQUFYRCxJQVdDO1NBVlksaUJBQWlCOzs7SUFHNUIsMEJBQTRFOztJQUM1RSxzQkFBaUM7O0lBQ2pDLHFEQUF3RDs7SUFDeEQsZ0RBQTJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBZmVGb3JtQ29udHJvbCB9IGZyb20gJy4uLy4uL3B1YmxpY19hcGknO1xyXG5pbXBvcnQgeyBBZmVGb3JtQXJyYXksIEFmZUZvcm1Hcm91cCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LWNvbnRyb2xzLWV4dGVuc2lvbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGb3JtRXJyb3JzU2VydmljZSB7XHJcblxyXG4gIC8vIE9ic2VydmFibGUgc3RyaW5nIHNvdXJjZXNcclxuICBwdWJsaWMgc3RhdGljIGNvbnRyb2w6IEFmZUZvcm1Db250cm9sIHwgQWZlRm9ybUFycmF5IHwgQWZlRm9ybUdyb3VwICA9IG51bGw7XHJcbiAgcHVibGljIHN0YXRpYyB0YWI6IG51bWJlciA9IG51bGw7XHJcbiAgcHVibGljIGFubm91bmNlRXJyb3JGaWVsZFNvdXJjZSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBwdWJsaWMgYW5ub3VuY2VFcnJvckZpZWxkJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hbm5vdW5jZUVycm9yRmllbGRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHVibGljIGFubm91bmNlRXJyb3JGaWVsZChlcnJvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFubm91bmNlRXJyb3JGaWVsZFNvdXJjZS5uZXh0KGVycm9yKTtcclxuICB9XHJcbn1cclxuIl19