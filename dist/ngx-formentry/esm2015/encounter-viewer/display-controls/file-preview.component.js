/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { EncounterViewerService } from '../encounter-viewer.service';
/** @type {?} */
const noop = (/**
 * @return {?}
 */
() => { });
const ɵ0 = noop;
export class FilePreviewComponent {
    /**
     * @param {?} encounterService
     */
    constructor(encounterService) {
        this.encounterService = encounterService;
        this.innerValue = null;
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    /**
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set dataSource(v) {
        this._dataSource = v;
    }
    // get accessor
    /**
     * @return {?}
     */
    get value() {
        return this.innerValue;
    }
    // set accessor including call the onchange callback
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this.innerValue) {
            this.innerValue = v;
        }
    }
    // Current time string.
    /**
     * @param {?} v
     * @return {?}
     */
    writeValue(v) {
        if (v !== this.innerValue) {
            this.innerValue = v;
        }
    }
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouchedCallback();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        // const files = event.srcElement.files;
        // const fileToLoad = files[0];
        // const fileReader = new FileReader();
        // fileReader.onload = (fileLoadedEvent) => {
        //   const data = fileReader.result;
        //   const fileType = data.substring('data:image/'.length, data.indexOf(';base64'));
        //   const payload = {
        //     data,
        //     extension: fileType
        //   };
        // };
        // fileReader.readAsDataURL(fileToLoad);
    }
}
FilePreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'file-preview',
                styles: [``],
                template: `<div *ngIf="innerValue">
              <img class="img-responsive"
                [src]="innerValue | secure:this._dataSource.fetchFile" alt="image" />
                </div>`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FilePreviewComponent)),
                        multi: true
                    }
                ]
            },] },
];
FilePreviewComponent.ctorParameters = () => [
    { type: EncounterViewerService }
];
FilePreviewComponent.propDecorators = {
    source: [{ type: Input }],
    dataSource: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FilePreviewComponent.prototype.source;
    /** @type {?} */
    FilePreviewComponent.prototype.innerValue;
    /** @type {?} */
    FilePreviewComponent.prototype._dataSource;
    /**
     * @type {?}
     * @private
     */
    FilePreviewComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    FilePreviewComponent.prototype.onChangeCallback;
    /**
     * @type {?}
     * @private
     */
    FilePreviewComponent.prototype.encounterService;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1wcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubXJzLWZvcm1lbnRyeS8iLCJzb3VyY2VzIjpbImVuY291bnRlci12aWV3ZXIvZGlzcGxheS1jb250cm9scy9maWxlLXByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBRXJDLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7TUFFL0QsSUFBSTs7O0FBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFBOztBQWlCckIsTUFBTTs7OztJQWVGLFlBQW9CLGdCQUF3QztRQUF4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXdCO1FBYnJELGVBQVUsR0FBRyxJQUFJLENBQUM7UUFTekIsMkRBQTJEO1FBQzNELGdDQUFnQztRQUN4QixzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztJQUNhLENBQUM7Ozs7SUFYaEUsSUFDVyxVQUFVO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsQ0FBYTtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQU9ELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUdELElBQUksS0FBSyxDQUFDLENBQU07UUFDZCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQztJQUNILENBQUM7Ozs7OztJQUdNLFVBQVUsQ0FBQyxDQUFNO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQzs7Ozs7O0lBR00sZ0JBQWdCLENBQUMsRUFBTztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUdNLGlCQUFpQixDQUFDLEVBQU87UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRU0sTUFBTTtRQUNYLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLEtBQVU7UUFDeEIsd0NBQXdDO1FBQ3hDLCtCQUErQjtRQUUvQix1Q0FBdUM7UUFFdkMsNkNBQTZDO1FBQzdDLG9DQUFvQztRQUNwQyxvRkFBb0Y7UUFDcEYsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWiwwQkFBMEI7UUFDMUIsT0FBTztRQUNQLEtBQUs7UUFFTCx3Q0FBd0M7SUFDMUMsQ0FBQzs7O1lBaEZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUNaLFFBQVEsRUFBRTs7O3VCQUdTO2dCQUNuQixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQzt3QkFDbkQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7O1lBbEJNLHNCQUFzQjs7O3FCQW9CMUIsS0FBSzt5QkFHTCxLQUFLOzs7O0lBSE4sc0NBQTRCOztJQUM1QiwwQ0FBeUI7O0lBQ3pCLDJDQUErQjs7Ozs7SUFVL0IsaURBQTZDOzs7OztJQUM3QyxnREFBa0Q7Ozs7O0lBQ3RDLGdEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYsXHJcbiAgICBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyXHJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFbmNvdW50ZXJWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZW5jb3VudGVyLXZpZXdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2Zvcm0tZW50cnkvcXVlc3Rpb24tbW9kZWxzL2ludGVyZmFjZXMvZGF0YS1zb3VyY2UnO1xyXG5jb25zdCBub29wID0gKCkgPT4ge307XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmlsZS1wcmV2aWV3JyxcclxuICAgIHN0eWxlczogW2BgXSxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImlubmVyVmFsdWVcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgW3NyY109XCJpbm5lclZhbHVlIHwgc2VjdXJlOnRoaXMuX2RhdGFTb3VyY2UuZmV0Y2hGaWxlXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YCxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRmlsZVByZXZpZXdDb21wb25lbnQpLFxyXG4gICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9KVxyXG5leHBvcnQgY2xhc3MgRmlsZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc291cmNlOiBhbnk7XHJcbiAgICBwdWJsaWMgaW5uZXJWYWx1ZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgX2RhdGFTb3VyY2U6IERhdGFTb3VyY2U7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGdldCBkYXRhU291cmNlKCk6IERhdGFTb3VyY2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBkYXRhU291cmNlKHY6IERhdGFTb3VyY2UpIHtcclxuICAgICAgICB0aGlzLl9kYXRhU291cmNlID0gdjtcclxuICAgIH1cclxuICAgIC8vIFBsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrcyB3aGljaCBhcmUgbGF0ZXIgcHJvdmlkZXNkXHJcbiAgICAvLyBieSB0aGUgQ29udHJvbCBWYWx1ZSBBY2Nlc3NvclxyXG4gICAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XHJcbiAgICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbmNvdW50ZXJTZXJ2aWNlOiBFbmNvdW50ZXJWaWV3ZXJTZXJ2aWNlKSB7fVxyXG4gICAgLy8gZ2V0IGFjY2Vzc29yXHJcbiAgICBnZXQgdmFsdWUoKTogYW55IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5uZXJWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXHJcbiAgICBzZXQgdmFsdWUodjogYW55KSB7XHJcbiAgICAgIGlmICh2ICE9PSB0aGlzLmlubmVyVmFsdWUpIHtcclxuICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSB2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDdXJyZW50IHRpbWUgc3RyaW5nLlxyXG5cclxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHY6IGFueSkge1xyXG4gICAgICBpZiAodiAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSB2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XHJcbiAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25CbHVyKCkge1xyXG4gICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgLy8gY29uc3QgZmlsZXMgPSBldmVudC5zcmNFbGVtZW50LmZpbGVzO1xyXG4gICAgICAvLyBjb25zdCBmaWxlVG9Mb2FkID0gZmlsZXNbMF07XHJcblxyXG4gICAgICAvLyBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgIC8vIGZpbGVSZWFkZXIub25sb2FkID0gKGZpbGVMb2FkZWRFdmVudCkgPT4ge1xyXG4gICAgICAvLyAgIGNvbnN0IGRhdGEgPSBmaWxlUmVhZGVyLnJlc3VsdDtcclxuICAgICAgLy8gICBjb25zdCBmaWxlVHlwZSA9IGRhdGEuc3Vic3RyaW5nKCdkYXRhOmltYWdlLycubGVuZ3RoLCBkYXRhLmluZGV4T2YoJztiYXNlNjQnKSk7XHJcbiAgICAgIC8vICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgLy8gICAgIGRhdGEsXHJcbiAgICAgIC8vICAgICBleHRlbnNpb246IGZpbGVUeXBlXHJcbiAgICAgIC8vICAgfTtcclxuICAgICAgLy8gfTtcclxuXHJcbiAgICAgIC8vIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlVG9Mb2FkKTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==