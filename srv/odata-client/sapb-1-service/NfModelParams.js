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
exports.NfModelParams = exports.NfModelParamsField = exports.createNfModelParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[NfModelParams.build]] instead.
 */
function createNfModelParams(json) {
    return NfModelParams.build(json);
}
exports.createNfModelParams = createNfModelParams;
/**
 * NfModelParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var NfModelParamsField = /** @class */ (function (_super) {
    __extends(NfModelParamsField, _super);
    function NfModelParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[NfModelParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeStringPropertyField('AbsEntry', _this, 'Edm.String');
        /**
         * Representation of the [[NfModelParams.nfmName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nfmName = new v4_1.ComplexTypeStringPropertyField('NFMName', _this, 'Edm.String');
        /**
         * Representation of the [[NfModelParams.nfmDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nfmDescription = new v4_1.ComplexTypeStringPropertyField('NFMDescription', _this, 'Edm.String');
        /**
         * Representation of the [[NfModelParams.nfmCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nfmCode = new v4_1.ComplexTypeStringPropertyField('NFMCode', _this, 'Edm.String');
        return _this;
    }
    return NfModelParamsField;
}(v4_1.ComplexTypeField));
exports.NfModelParamsField = NfModelParamsField;
var NfModelParams;
(function (NfModelParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.String') }); },
            NFMName: function (nfmName) { return ({ nfmName: v4_1.edmToTs(nfmName, 'Edm.String') }); },
            NFMDescription: function (nfmDescription) { return ({ nfmDescription: v4_1.edmToTs(nfmDescription, 'Edm.String') }); },
            NFMCode: function (nfmCode) { return ({ nfmCode: v4_1.edmToTs(nfmCode, 'Edm.String') }); }
        });
    }
    NfModelParams.build = build;
})(NfModelParams = exports.NfModelParams || (exports.NfModelParams = {}));
//# sourceMappingURL=NfModelParams.js.map