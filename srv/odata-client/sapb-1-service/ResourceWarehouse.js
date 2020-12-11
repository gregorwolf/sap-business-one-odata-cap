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
exports.ResourceWarehouse = exports.ResourceWarehouseField = exports.createResourceWarehouse = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ResourceWarehouse.build]] instead.
 */
function createResourceWarehouse(json) {
    return ResourceWarehouse.build(json);
}
exports.createResourceWarehouse = createResourceWarehouse;
/**
 * ResourceWarehouseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ResourceWarehouseField = /** @class */ (function (_super) {
    __extends(ResourceWarehouseField, _super);
    /**
     * Creates an instance of ResourceWarehouseField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ResourceWarehouseField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ResourceWarehouse) || this;
        /**
         * Representation of the [[ResourceWarehouse.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceWarehouse.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new core_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceWarehouse.locked]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locked = new core_1.ComplexTypeEnumPropertyField('Locked', _this);
        return _this;
    }
    return ResourceWarehouseField;
}(core_1.ComplexTypeField));
exports.ResourceWarehouseField = ResourceWarehouseField;
var ResourceWarehouse;
(function (ResourceWarehouse) {
    /**
     * Metadata information on all properties of the `ResourceWarehouse` complex type.
     */
    ResourceWarehouse._propertyMetadata = [{
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
            originalName: 'Locked',
            name: 'locked',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ResourceWarehouse);
    }
    ResourceWarehouse.build = build;
})(ResourceWarehouse = exports.ResourceWarehouse || (exports.ResourceWarehouse = {}));
//# sourceMappingURL=ResourceWarehouse.js.map