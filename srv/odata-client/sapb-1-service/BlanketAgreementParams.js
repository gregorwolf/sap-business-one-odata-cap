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
exports.BlanketAgreementParams = exports.BlanketAgreementParamsField = exports.createBlanketAgreementParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementParams.build]] instead.
 */
function createBlanketAgreementParams(json) {
    return BlanketAgreementParams.build(json);
}
exports.createBlanketAgreementParams = createBlanketAgreementParams;
/**
 * BlanketAgreementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BlanketAgreementParamsField = /** @class */ (function (_super) {
    __extends(BlanketAgreementParamsField, _super);
    function BlanketAgreementParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BlanketAgreementParams.agreementNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementNo = new v4_1.ComplexTypeNumberPropertyField('AgreementNo', _this, 'Edm.Int32');
        return _this;
    }
    return BlanketAgreementParamsField;
}(v4_1.ComplexTypeField));
exports.BlanketAgreementParamsField = BlanketAgreementParamsField;
var BlanketAgreementParams;
(function (BlanketAgreementParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AgreementNo: function (agreementNo) { return ({ agreementNo: v4_1.edmToTs(agreementNo, 'Edm.Int32') }); }
        });
    }
    BlanketAgreementParams.build = build;
})(BlanketAgreementParams = exports.BlanketAgreementParams || (exports.BlanketAgreementParams = {}));
//# sourceMappingURL=BlanketAgreementParams.js.map