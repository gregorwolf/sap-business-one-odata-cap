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
exports.WtdCodeParams = exports.WtdCodeParamsField = exports.createWtdCodeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function WtdCodeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WtdCodeParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WtdCodeParams.wTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxCode = new v4_1.ComplexTypeStringPropertyField('WTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[WtdCodeParams.wTaxName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxName = new v4_1.ComplexTypeStringPropertyField('WTaxName', _this, 'Edm.String');
        return _this;
    }
    return WtdCodeParamsField;
}(v4_1.ComplexTypeField));
exports.WtdCodeParamsField = WtdCodeParamsField;
var WtdCodeParams;
(function (WtdCodeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            WTaxCode: function (wTaxCode) { return ({ wTaxCode: v4_1.edmToTs(wTaxCode, 'Edm.String') }); },
            WTaxName: function (wTaxName) { return ({ wTaxName: v4_1.edmToTs(wTaxName, 'Edm.String') }); }
        });
    }
    WtdCodeParams.build = build;
})(WtdCodeParams = exports.WtdCodeParams || (exports.WtdCodeParams = {}));
//# sourceMappingURL=WtdCodeParams.js.map