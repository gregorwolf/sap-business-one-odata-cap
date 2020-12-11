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
exports.BarCodeParams = exports.BarCodeParamsField = exports.createBarCodeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BarCodeParams.build]] instead.
 */
function createBarCodeParams(json) {
    return BarCodeParams.build(json);
}
exports.createBarCodeParams = createBarCodeParams;
/**
 * BarCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BarCodeParamsField = /** @class */ (function (_super) {
    __extends(BarCodeParamsField, _super);
    /**
     * Creates an instance of BarCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BarCodeParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BarCodeParams) || this;
        /**
         * Representation of the [[BarCodeParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[BarCodeParams.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new core_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[BarCodeParams.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new core_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[BarCodeParams.barcode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barcode = new core_1.ComplexTypeStringPropertyField('Barcode', _this, 'Edm.String');
        return _this;
    }
    return BarCodeParamsField;
}(core_1.ComplexTypeField));
exports.BarCodeParamsField = BarCodeParamsField;
var BarCodeParams;
(function (BarCodeParams) {
    /**
     * Metadata information on all properties of the `BarCodeParams` complex type.
     */
    BarCodeParams._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemNo',
            name: 'itemNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UoMEntry',
            name: 'uoMEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Barcode',
            name: 'barcode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BarCodeParams);
    }
    BarCodeParams.build = build;
})(BarCodeParams = exports.BarCodeParams || (exports.BarCodeParams = {}));
//# sourceMappingURL=BarCodeParams.js.map