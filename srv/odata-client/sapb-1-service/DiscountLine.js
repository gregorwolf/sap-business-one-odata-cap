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
exports.DiscountLine = exports.DiscountLineField = exports.createDiscountLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DiscountLine.build]] instead.
 */
function createDiscountLine(json) {
    return DiscountLine.build(json);
}
exports.createDiscountLine = createDiscountLine;
/**
 * DiscountLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DiscountLineField = /** @class */ (function (_super) {
    __extends(DiscountLineField, _super);
    function DiscountLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DiscountLine.discountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountCode = new v4_1.ComplexTypeStringPropertyField('DiscountCode', _this, 'Edm.String');
        /**
         * Representation of the [[DiscountLine.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeNumberPropertyField('LineId', _this, 'Edm.Int32');
        /**
         * Representation of the [[DiscountLine.numOfDays]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numOfDays = new v4_1.ComplexTypeNumberPropertyField('NumOfDays', _this, 'Edm.Int32');
        /**
         * Representation of the [[DiscountLine.discount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discount = new v4_1.ComplexTypeNumberPropertyField('Discount', _this, 'Edm.Double');
        /**
         * Representation of the [[DiscountLine.day]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.day = new v4_1.ComplexTypeNumberPropertyField('Day', _this, 'Edm.Int32');
        /**
         * Representation of the [[DiscountLine.month]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.month = new v4_1.ComplexTypeNumberPropertyField('Month', _this, 'Edm.Int32');
        return _this;
    }
    return DiscountLineField;
}(v4_1.ComplexTypeField));
exports.DiscountLineField = DiscountLineField;
var DiscountLine;
(function (DiscountLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DiscountCode: function (discountCode) { return ({ discountCode: v4_1.edmToTs(discountCode, 'Edm.String') }); },
            LineId: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.Int32') }); },
            NumOfDays: function (numOfDays) { return ({ numOfDays: v4_1.edmToTs(numOfDays, 'Edm.Int32') }); },
            Discount: function (discount) { return ({ discount: v4_1.edmToTs(discount, 'Edm.Double') }); },
            Day: function (day) { return ({ day: v4_1.edmToTs(day, 'Edm.Int32') }); },
            Month: function (month) { return ({ month: v4_1.edmToTs(month, 'Edm.Int32') }); }
        });
    }
    DiscountLine.build = build;
})(DiscountLine = exports.DiscountLine || (exports.DiscountLine = {}));
//# sourceMappingURL=DiscountLine.js.map