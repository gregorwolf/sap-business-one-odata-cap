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
exports.MaterialRevaluationSnbParams = exports.MaterialRevaluationSnbParamsField = exports.createMaterialRevaluationSnbParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationSnbParams.build]] instead.
 */
function createMaterialRevaluationSnbParams(json) {
    return MaterialRevaluationSnbParams.build(json);
}
exports.createMaterialRevaluationSnbParams = createMaterialRevaluationSnbParams;
/**
 * MaterialRevaluationSnbParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MaterialRevaluationSnbParamsField = /** @class */ (function (_super) {
    __extends(MaterialRevaluationSnbParamsField, _super);
    /**
     * Creates an instance of MaterialRevaluationSnbParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function MaterialRevaluationSnbParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, MaterialRevaluationSnbParams) || this;
        /**
         * Representation of the [[MaterialRevaluationSnbParams.snbAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.snbAbsEntry = new core_1.ComplexTypeNumberPropertyField('SnbAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.newCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newCost = new core_1.ComplexTypeNumberPropertyField('NewCost', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.debitCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitCredit = new core_1.ComplexTypeNumberPropertyField('DebitCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.systemNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemNumber = new core_1.ComplexTypeNumberPropertyField('SystemNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.lotNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lotNumber = new core_1.ComplexTypeStringPropertyField('LotNumber', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.manufactureNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufactureNumber = new core_1.ComplexTypeStringPropertyField('ManufactureNumber', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.admissionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.admissionDate = new core_1.ComplexTypeDatePropertyField('AdmissionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.expirationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expirationDate = new core_1.ComplexTypeDatePropertyField('ExpirationDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return MaterialRevaluationSnbParamsField;
}(core_1.ComplexTypeField));
exports.MaterialRevaluationSnbParamsField = MaterialRevaluationSnbParamsField;
var MaterialRevaluationSnbParams;
(function (MaterialRevaluationSnbParams) {
    /**
     * Metadata information on all properties of the `MaterialRevaluationSnbParams` complex type.
     */
    MaterialRevaluationSnbParams._propertyMetadata = [{
            originalName: 'SnbAbsEntry',
            name: 'snbAbsEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'NewCost',
            name: 'newCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DebitCredit',
            name: 'debitCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SystemNumber',
            name: 'systemNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LotNumber',
            name: 'lotNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ManufactureNumber',
            name: 'manufactureNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AdmissionDate',
            name: 'admissionDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ExpirationDate',
            name: 'expirationDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, MaterialRevaluationSnbParams);
    }
    MaterialRevaluationSnbParams.build = build;
})(MaterialRevaluationSnbParams = exports.MaterialRevaluationSnbParams || (exports.MaterialRevaluationSnbParams = {}));
//# sourceMappingURL=MaterialRevaluationSnbParams.js.map