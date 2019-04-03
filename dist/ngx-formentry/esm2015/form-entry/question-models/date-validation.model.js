/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ValidationModel } from './validation.model';
export class DateValidationModel extends ValidationModel {
    /**
     * @param {?} validations
     */
    constructor(validations) {
        super(validations);
        this.allowFutureDates = false;
        this.allowFutureDates = validations.allowFutureDates === 'true' ? true : false;
    }
}
if (false) {
    /** @type {?} */
    DateValidationModel.prototype.allowFutureDates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS12YWxpZGF0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiZm9ybS1lbnRyeS9xdWVzdGlvbi1tb2RlbHMvZGF0ZS12YWxpZGF0aW9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsTUFBTSwwQkFBMkIsU0FBUSxlQUFlOzs7O0lBSXRELFlBQVksV0FBZ0I7UUFDMUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBSHJCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUt2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDakYsQ0FBQztDQUNGOzs7SUFQQywrQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uTW9kZWwgfSBmcm9tICcuL3ZhbGlkYXRpb24ubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVWYWxpZGF0aW9uTW9kZWwgZXh0ZW5kcyBWYWxpZGF0aW9uTW9kZWwge1xyXG5cclxuICBhbGxvd0Z1dHVyZURhdGVzID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHZhbGlkYXRpb25zOiBhbnkpIHtcclxuICAgIHN1cGVyKHZhbGlkYXRpb25zKTtcclxuXHJcbiAgICB0aGlzLmFsbG93RnV0dXJlRGF0ZXMgPSB2YWxpZGF0aW9ucy5hbGxvd0Z1dHVyZURhdGVzID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==