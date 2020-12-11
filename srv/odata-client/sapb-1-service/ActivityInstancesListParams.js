"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityInstancesListParams = exports.ActivityInstancesListParamsField = exports.createActivityInstancesListParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ActivityInstancesListParams.build]] instead.
 */
function createActivityInstancesListParams(json) {
    return ActivityInstancesListParams.build(json);
}
exports.createActivityInstancesListParams = createActivityInstancesListParams;
/**
 * ActivityInstancesListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ActivityInstancesListParamsField = /** @class */ (function (_super) {
    __extends(ActivityInstancesListParamsField, _super);
    /**
     * Creates an instance of ActivityInstancesListParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ActivityInstancesListParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ActivityInstancesListParams) || this;
        /**
         * Representation of the [[ActivityInstancesListParams.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new core_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ActivityInstancesListParams.instanceCount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instanceCount = new core_1.ComplexTypeNumberPropertyField('InstanceCount', _this, 'Edm.Int32');
        return _this;
    }
    return ActivityInstancesListParamsField;
}(core_1.ComplexTypeField));
exports.ActivityInstancesListParamsField = ActivityInstancesListParamsField;
var ActivityInstancesListParams;
(function (ActivityInstancesListParams) {
    /**
     * Metadata information on all properties of the `ActivityInstancesListParams` complex type.
     */
    ActivityInstancesListParams._propertyMetadata = [{
            originalName: 'StartDate',
            name: 'startDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'InstanceCount',
            name: 'instanceCount',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ActivityInstancesListParams);
    }
    ActivityInstancesListParams.build = build;
})(ActivityInstancesListParams = exports.ActivityInstancesListParams || (exports.ActivityInstancesListParams = {}));
//# sourceMappingURL=ActivityInstancesListParams.js.map