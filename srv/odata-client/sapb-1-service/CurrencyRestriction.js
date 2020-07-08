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
exports.CurrencyRestriction = exports.CurrencyRestrictionField = exports.createCurrencyRestriction = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CurrencyRestriction.build]] instead.
 */
function createCurrencyRestriction(json) {
    return CurrencyRestriction.build(json);
}
exports.createCurrencyRestriction = createCurrencyRestriction;
/**
 * CurrencyRestrictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CurrencyRestrictionField = /** @class */ (function (_super) {
    __extends(CurrencyRestrictionField, _super);
    function CurrencyRestrictionField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CurrencyRestriction.paymentMethodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMethodCode = new v4_1.ComplexTypeStringPropertyField('PaymentMethodCode', _this, 'Edm.String');
        /**
         * Representation of the [[CurrencyRestriction.currencyCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currencyCode = new v4_1.ComplexTypeStringPropertyField('CurrencyCode', _this, 'Edm.String');
        /**
         * Representation of the [[CurrencyRestriction.currencyName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currencyName = new v4_1.ComplexTypeStringPropertyField('CurrencyName', _this, 'Edm.String');
        return _this;
    }
    return CurrencyRestrictionField;
}(v4_1.ComplexTypeField));
exports.CurrencyRestrictionField = CurrencyRestrictionField;
var CurrencyRestriction;
(function (CurrencyRestriction) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PaymentMethodCode: function (paymentMethodCode) { return ({ paymentMethodCode: v4_1.edmToTs(paymentMethodCode, 'Edm.String') }); },
            CurrencyCode: function (currencyCode) { return ({ currencyCode: v4_1.edmToTs(currencyCode, 'Edm.String') }); },
            CurrencyName: function (currencyName) { return ({ currencyName: v4_1.edmToTs(currencyName, 'Edm.String') }); }
        });
    }
    CurrencyRestriction.build = build;
})(CurrencyRestriction = exports.CurrencyRestriction || (exports.CurrencyRestriction = {}));
//# sourceMappingURL=CurrencyRestriction.js.map