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
exports.ResourceCapacityWithFilterParams = exports.ResourceCapacityWithFilterParamsField = exports.createResourceCapacityWithFilterParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ResourceCapacityWithFilterParams.build]] instead.
 */
function createResourceCapacityWithFilterParams(json) {
    return ResourceCapacityWithFilterParams.build(json);
}
exports.createResourceCapacityWithFilterParams = createResourceCapacityWithFilterParams;
/**
 * ResourceCapacityWithFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ResourceCapacityWithFilterParamsField = /** @class */ (function (_super) {
    __extends(ResourceCapacityWithFilterParamsField, _super);
    /**
     * Creates an instance of ResourceCapacityWithFilterParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ResourceCapacityWithFilterParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ResourceCapacityWithFilterParams) || this;
        /**
         * Representation of the [[ResourceCapacityWithFilterParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceCapacityWithFilterParams.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new core_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceCapacityWithFilterParams.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new core_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ResourceCapacityWithFilterParams.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeEnumPropertyField('Type', _this);
        return _this;
    }
    return ResourceCapacityWithFilterParamsField;
}(core_1.ComplexTypeField));
exports.ResourceCapacityWithFilterParamsField = ResourceCapacityWithFilterParamsField;
var ResourceCapacityWithFilterParams;
(function (ResourceCapacityWithFilterParams) {
    /**
     * Metadata information on all properties of the `ResourceCapacityWithFilterParams` complex type.
     */
    ResourceCapacityWithFilterParams._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Warehouse',
            name: 'warehouse',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Date',
            name: 'date',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ResourceCapacityWithFilterParams);
    }
    ResourceCapacityWithFilterParams.build = build;
})(ResourceCapacityWithFilterParams = exports.ResourceCapacityWithFilterParams || (exports.ResourceCapacityWithFilterParams = {}));
//# sourceMappingURL=ResourceCapacityWithFilterParams.js.map