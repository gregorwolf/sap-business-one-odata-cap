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
exports.NfTaxCategoryParams = exports.NfTaxCategoryParamsField = exports.createNfTaxCategoryParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[NfTaxCategoryParams.build]] instead.
 */
function createNfTaxCategoryParams(json) {
    return NfTaxCategoryParams.build(json);
}
exports.createNfTaxCategoryParams = createNfTaxCategoryParams;
/**
 * NfTaxCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var NfTaxCategoryParamsField = /** @class */ (function (_super) {
    __extends(NfTaxCategoryParamsField, _super);
    function NfTaxCategoryParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[NfTaxCategoryParams.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new v4_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[NfTaxCategoryParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        return _this;
    }
    return NfTaxCategoryParamsField;
}(v4_1.ComplexTypeField));
exports.NfTaxCategoryParamsField = NfTaxCategoryParamsField;
var NfTaxCategoryParams;
(function (NfTaxCategoryParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsId: function (absId) { return ({ absId: v4_1.edmToTs(absId, 'Edm.Int32') }); },
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); }
        });
    }
    NfTaxCategoryParams.build = build;
})(NfTaxCategoryParams = exports.NfTaxCategoryParams || (exports.NfTaxCategoryParams = {}));
//# sourceMappingURL=NfTaxCategoryParams.js.map