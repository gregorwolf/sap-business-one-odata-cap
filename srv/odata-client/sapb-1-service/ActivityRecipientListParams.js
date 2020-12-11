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
exports.ActivityRecipientListParams = exports.ActivityRecipientListParamsField = exports.createActivityRecipientListParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ActivityRecipientListParams.build]] instead.
 */
function createActivityRecipientListParams(json) {
    return ActivityRecipientListParams.build(json);
}
exports.createActivityRecipientListParams = createActivityRecipientListParams;
/**
 * ActivityRecipientListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ActivityRecipientListParamsField = /** @class */ (function (_super) {
    __extends(ActivityRecipientListParamsField, _super);
    /**
     * Creates an instance of ActivityRecipientListParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ActivityRecipientListParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ActivityRecipientListParams) || this;
        /**
         * Representation of the [[ActivityRecipientListParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[ActivityRecipientListParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[ActivityRecipientListParams.active]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.active = new core_1.ComplexTypeEnumPropertyField('Active', _this);
        /**
         * Representation of the [[ActivityRecipientListParams.isMultiple]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isMultiple = new core_1.ComplexTypeEnumPropertyField('IsMultiple', _this);
        return _this;
    }
    return ActivityRecipientListParamsField;
}(core_1.ComplexTypeField));
exports.ActivityRecipientListParamsField = ActivityRecipientListParamsField;
var ActivityRecipientListParams;
(function (ActivityRecipientListParams) {
    /**
     * Metadata information on all properties of the `ActivityRecipientListParams` complex type.
     */
    ActivityRecipientListParams._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Active',
            name: 'active',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IsMultiple',
            name: 'isMultiple',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ActivityRecipientListParams);
    }
    ActivityRecipientListParams.build = build;
})(ActivityRecipientListParams = exports.ActivityRecipientListParams || (exports.ActivityRecipientListParams = {}));
//# sourceMappingURL=ActivityRecipientListParams.js.map