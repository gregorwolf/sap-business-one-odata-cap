"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedAssetValuesParams = exports.FixedAssetValuesParamsField = exports.createFixedAssetValuesParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[FixedAssetValuesParams.build]] instead.
 */
function createFixedAssetValuesParams(json) {
    return FixedAssetValuesParams.build(json);
}
exports.createFixedAssetValuesParams = createFixedAssetValuesParams;
/**
 * FixedAssetValuesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var FixedAssetValuesParamsField = /** @class */ (function (_super) {
    __extends(FixedAssetValuesParamsField, _super);
    function FixedAssetValuesParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[FixedAssetValuesParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[FixedAssetValuesParams.fiscalYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fiscalYear = new v4_1.ComplexTypeStringPropertyField('FiscalYear', _this, 'Edm.String');
        /**
         * Representation of the [[FixedAssetValuesParams.depreciationArea]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationArea = new v4_1.ComplexTypeStringPropertyField('DepreciationArea', _this, 'Edm.String');
        return _this;
    }
    return FixedAssetValuesParamsField;
}(v4_1.ComplexTypeField));
exports.FixedAssetValuesParamsField = FixedAssetValuesParamsField;
var FixedAssetValuesParams;
(function (FixedAssetValuesParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            FiscalYear: function (fiscalYear) { return ({ fiscalYear: v4_1.edmToTs(fiscalYear, 'Edm.String') }); },
            DepreciationArea: function (depreciationArea) { return ({ depreciationArea: v4_1.edmToTs(depreciationArea, 'Edm.String') }); }
        });
    }
    FixedAssetValuesParams.build = build;
})(FixedAssetValuesParams = exports.FixedAssetValuesParams || (exports.FixedAssetValuesParams = {}));
//# sourceMappingURL=FixedAssetValuesParams.js.map