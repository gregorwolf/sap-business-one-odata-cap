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
exports.DecimalData = exports.DecimalDataField = exports.createDecimalData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DecimalData.build]] instead.
 */
function createDecimalData(json) {
    return DecimalData.build(json);
}
exports.createDecimalData = createDecimalData;
/**
 * DecimalDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DecimalDataField = /** @class */ (function (_super) {
    __extends(DecimalDataField, _super);
    function DecimalDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DecimalData.value]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.value = new v4_1.ComplexTypeNumberPropertyField('Value', _this, 'Edm.Double');
        /**
         * Representation of the [[DecimalData.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        return _this;
    }
    return DecimalDataField;
}(v4_1.ComplexTypeField));
exports.DecimalDataField = DecimalDataField;
var DecimalData;
(function (DecimalData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Value: function (value) { return ({ value: v4_1.edmToTs(value, 'Edm.Double') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); }
        });
    }
    DecimalData.build = build;
})(DecimalData = exports.DecimalData || (exports.DecimalData = {}));
//# sourceMappingURL=DecimalData.js.map