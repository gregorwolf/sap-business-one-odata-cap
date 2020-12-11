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
exports.MaterialRevaluationFifoParams = exports.MaterialRevaluationFifoParamsField = exports.createMaterialRevaluationFifoParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationFifoParams.build]] instead.
 */
function createMaterialRevaluationFifoParams(json) {
    return MaterialRevaluationFifoParams.build(json);
}
exports.createMaterialRevaluationFifoParams = createMaterialRevaluationFifoParams;
/**
 * MaterialRevaluationFifoParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MaterialRevaluationFifoParamsField = /** @class */ (function (_super) {
    __extends(MaterialRevaluationFifoParamsField, _super);
    /**
     * Creates an instance of MaterialRevaluationFifoParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function MaterialRevaluationFifoParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, MaterialRevaluationFifoParams) || this;
        /**
         * Representation of the [[MaterialRevaluationFifoParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationFifoParams.locationType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locationType = new core_1.ComplexTypeStringPropertyField('LocationType', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationFifoParams.locationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locationCode = new core_1.ComplexTypeStringPropertyField('LocationCode', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationFifoParams.showIssuedLayers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.showIssuedLayers = new core_1.ComplexTypeEnumPropertyField('ShowIssuedLayers', _this);
        return _this;
    }
    return MaterialRevaluationFifoParamsField;
}(core_1.ComplexTypeField));
exports.MaterialRevaluationFifoParamsField = MaterialRevaluationFifoParamsField;
var MaterialRevaluationFifoParams;
(function (MaterialRevaluationFifoParams) {
    /**
     * Metadata information on all properties of the `MaterialRevaluationFifoParams` complex type.
     */
    MaterialRevaluationFifoParams._propertyMetadata = [{
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LocationType',
            name: 'locationType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LocationCode',
            name: 'locationCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShowIssuedLayers',
            name: 'showIssuedLayers',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, MaterialRevaluationFifoParams);
    }
    MaterialRevaluationFifoParams.build = build;
})(MaterialRevaluationFifoParams = exports.MaterialRevaluationFifoParams || (exports.MaterialRevaluationFifoParams = {}));
//# sourceMappingURL=MaterialRevaluationFifoParams.js.map