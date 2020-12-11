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
exports.SnbLines = exports.SnbLinesField = exports.createSnbLines = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SnbLines.build]] instead.
 */
function createSnbLines(json) {
    return SnbLines.build(json);
}
exports.createSnbLines = createSnbLines;
/**
 * SnbLinesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SnbLinesField = /** @class */ (function (_super) {
    __extends(SnbLinesField, _super);
    /**
     * Creates an instance of SnbLinesField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SnbLinesField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SnbLines) || this;
        /**
         * Representation of the [[SnbLines.snbAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.snbAbsEntry = new core_1.ComplexTypeNumberPropertyField('SnbAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[SnbLines.newCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newCost = new core_1.ComplexTypeNumberPropertyField('NewCost', _this, 'Edm.Double');
        /**
         * Representation of the [[SnbLines.debitCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitCredit = new core_1.ComplexTypeNumberPropertyField('DebitCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[SnbLines.systemNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemNumber = new core_1.ComplexTypeNumberPropertyField('SystemNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SnbLines.lotNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lotNumber = new core_1.ComplexTypeStringPropertyField('LotNumber', _this, 'Edm.String');
        /**
         * Representation of the [[SnbLines.manufactureNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufactureNumber = new core_1.ComplexTypeStringPropertyField('ManufactureNumber', _this, 'Edm.String');
        /**
         * Representation of the [[SnbLines.admissionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.admissionDate = new core_1.ComplexTypeDatePropertyField('AdmissionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SnbLines.expirationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expirationDate = new core_1.ComplexTypeDatePropertyField('ExpirationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SnbLines.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new core_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        return _this;
    }
    return SnbLinesField;
}(core_1.ComplexTypeField));
exports.SnbLinesField = SnbLinesField;
var SnbLines;
(function (SnbLines) {
    /**
     * Metadata information on all properties of the `SnbLines` complex type.
     */
    SnbLines._propertyMetadata = [{
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
        }, {
            originalName: 'BaseLine',
            name: 'baseLine',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SnbLines);
    }
    SnbLines.build = build;
})(SnbLines = exports.SnbLines || (exports.SnbLines = {}));
//# sourceMappingURL=SnbLines.js.map