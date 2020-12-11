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
exports.WtdCodeParams = exports.WtdCodeParamsField = exports.createWtdCodeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WtdCodeParams.build]] instead.
 */
function createWtdCodeParams(json) {
    return WtdCodeParams.build(json);
}
exports.createWtdCodeParams = createWtdCodeParams;
/**
 * WtdCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtdCodeParamsField = /** @class */ (function (_super) {
    __extends(WtdCodeParamsField, _super);
    /**
     * Creates an instance of WtdCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WtdCodeParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WtdCodeParams) || this;
        /**
         * Representation of the [[WtdCodeParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WtdCodeParams.wTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxCode = new core_1.ComplexTypeStringPropertyField('WTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[WtdCodeParams.wTaxName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxName = new core_1.ComplexTypeStringPropertyField('WTaxName', _this, 'Edm.String');
        return _this;
    }
    return WtdCodeParamsField;
}(core_1.ComplexTypeField));
exports.WtdCodeParamsField = WtdCodeParamsField;
var WtdCodeParams;
(function (WtdCodeParams) {
    /**
     * Metadata information on all properties of the `WtdCodeParams` complex type.
     */
    WtdCodeParams._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'WTaxCode',
            name: 'wTaxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WTaxName',
            name: 'wTaxName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WtdCodeParams);
    }
    WtdCodeParams.build = build;
})(WtdCodeParams = exports.WtdCodeParams || (exports.WtdCodeParams = {}));
//# sourceMappingURL=WtdCodeParams.js.map