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
exports.CreditCardParams = exports.CreditCardParamsField = exports.createCreditCardParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CreditCardParams.build]] instead.
 */
function createCreditCardParams(json) {
    return CreditCardParams.build(json);
}
exports.createCreditCardParams = createCreditCardParams;
/**
 * CreditCardParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CreditCardParamsField = /** @class */ (function (_super) {
    __extends(CreditCardParamsField, _super);
    function CreditCardParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CreditCardParams.creditCardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCardCode = new v4_1.ComplexTypeNumberPropertyField('CreditCardCode', _this, 'Edm.Int32');
        return _this;
    }
    return CreditCardParamsField;
}(v4_1.ComplexTypeField));
exports.CreditCardParamsField = CreditCardParamsField;
var CreditCardParams;
(function (CreditCardParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CreditCardCode: function (creditCardCode) { return ({ creditCardCode: v4_1.edmToTs(creditCardCode, 'Edm.Int32') }); }
        });
    }
    CreditCardParams.build = build;
})(CreditCardParams = exports.CreditCardParams || (exports.CreditCardParams = {}));
//# sourceMappingURL=CreditCardParams.js.map