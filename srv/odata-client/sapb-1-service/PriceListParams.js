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
exports.PriceListParams = exports.PriceListParamsField = exports.createPriceListParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PriceListParams.build]] instead.
 */
function createPriceListParams(json) {
    return PriceListParams.build(json);
}
exports.createPriceListParams = createPriceListParams;
/**
 * PriceListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PriceListParamsField = /** @class */ (function (_super) {
    __extends(PriceListParamsField, _super);
    function PriceListParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PriceListParams.priceListNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceListNo = new v4_1.ComplexTypeNumberPropertyField('PriceListNo', _this, 'Edm.Int32');
        return _this;
    }
    return PriceListParamsField;
}(v4_1.ComplexTypeField));
exports.PriceListParamsField = PriceListParamsField;
var PriceListParams;
(function (PriceListParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PriceListNo: function (priceListNo) { return ({ priceListNo: v4_1.edmToTs(priceListNo, 'Edm.Int32') }); }
        });
    }
    PriceListParams.build = build;
})(PriceListParams = exports.PriceListParams || (exports.PriceListParams = {}));
//# sourceMappingURL=PriceListParams.js.map