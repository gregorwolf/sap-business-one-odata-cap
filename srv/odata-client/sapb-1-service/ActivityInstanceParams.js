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
exports.ActivityInstanceParams = exports.ActivityInstanceParamsField = exports.createActivityInstanceParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ActivityInstanceParams.build]] instead.
 */
function createActivityInstanceParams(json) {
    return ActivityInstanceParams.build(json);
}
exports.createActivityInstanceParams = createActivityInstanceParams;
/**
 * ActivityInstanceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ActivityInstanceParamsField = /** @class */ (function (_super) {
    __extends(ActivityInstanceParamsField, _super);
    /**
     * Creates an instance of ActivityInstanceParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ActivityInstanceParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ActivityInstanceParams) || this;
        /**
         * Representation of the [[ActivityInstanceParams.activityCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activityCode = new core_1.ComplexTypeNumberPropertyField('ActivityCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ActivityInstanceParams.instanceDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instanceDate = new core_1.ComplexTypeDatePropertyField('InstanceDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return ActivityInstanceParamsField;
}(core_1.ComplexTypeField));
exports.ActivityInstanceParamsField = ActivityInstanceParamsField;
var ActivityInstanceParams;
(function (ActivityInstanceParams) {
    /**
     * Metadata information on all properties of the `ActivityInstanceParams` complex type.
     */
    ActivityInstanceParams._propertyMetadata = [{
            originalName: 'ActivityCode',
            name: 'activityCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'InstanceDate',
            name: 'instanceDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ActivityInstanceParams);
    }
    ActivityInstanceParams.build = build;
})(ActivityInstanceParams = exports.ActivityInstanceParams || (exports.ActivityInstanceParams = {}));
//# sourceMappingURL=ActivityInstanceParams.js.map