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
exports.RetornoCodeParams = exports.RetornoCodeParamsField = exports.createRetornoCodeParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[RetornoCodeParams.build]] instead.
 */
function createRetornoCodeParams(json) {
    return RetornoCodeParams.build(json);
}
exports.createRetornoCodeParams = createRetornoCodeParams;
/**
 * RetornoCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RetornoCodeParamsField = /** @class */ (function (_super) {
    __extends(RetornoCodeParamsField, _super);
    /**
     * Creates an instance of RetornoCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function RetornoCodeParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, RetornoCodeParams) || this;
        /**
         * Representation of the [[RetornoCodeParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[RetornoCodeParams.occurenceCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.occurenceCode = new core_1.ComplexTypeNumberPropertyField('OccurenceCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[RetornoCodeParams.movementCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.movementCode = new core_1.ComplexTypeNumberPropertyField('MovementCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[RetornoCodeParams.boeStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boeStatus = new core_1.ComplexTypeEnumPropertyField('BoeStatus', _this);
        /**
         * Representation of the [[RetornoCodeParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        /**
         * Representation of the [[RetornoCodeParams.color]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.color = new core_1.ComplexTypeNumberPropertyField('Color', _this, 'Edm.Int32');
        /**
         * Representation of the [[RetornoCodeParams.fileFormat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileFormat = new core_1.ComplexTypeStringPropertyField('FileFormat', _this, 'Edm.String');
        /**
         * Representation of the [[RetornoCodeParams.bankCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankCode = new core_1.ComplexTypeStringPropertyField('BankCode', _this, 'Edm.String');
        return _this;
    }
    return RetornoCodeParamsField;
}(core_1.ComplexTypeField));
exports.RetornoCodeParamsField = RetornoCodeParamsField;
var RetornoCodeParams;
(function (RetornoCodeParams) {
    /**
     * Metadata information on all properties of the `RetornoCodeParams` complex type.
     */
    RetornoCodeParams._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'OccurenceCode',
            name: 'occurenceCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'MovementCode',
            name: 'movementCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BoeStatus',
            name: 'boeStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Color',
            name: 'color',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FileFormat',
            name: 'fileFormat',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BankCode',
            name: 'bankCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, RetornoCodeParams);
    }
    RetornoCodeParams.build = build;
})(RetornoCodeParams = exports.RetornoCodeParams || (exports.RetornoCodeParams = {}));
//# sourceMappingURL=RetornoCodeParams.js.map