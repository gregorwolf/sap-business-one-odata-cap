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
exports.DiscountGroupLine = exports.DiscountGroupLineField = exports.createDiscountGroupLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DiscountGroupLine.build]] instead.
 */
function createDiscountGroupLine(json) {
    return DiscountGroupLine.build(json);
}
exports.createDiscountGroupLine = createDiscountGroupLine;
/**
 * DiscountGroupLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DiscountGroupLineField = /** @class */ (function (_super) {
    __extends(DiscountGroupLineField, _super);
    function DiscountGroupLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DiscountGroupLine.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DiscountGroupLine.objectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectCode = new v4_1.ComplexTypeStringPropertyField('ObjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[DiscountGroupLine.discount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discount = new v4_1.ComplexTypeNumberPropertyField('Discount', _this, 'Edm.Double');
        /**
         * Representation of the [[DiscountGroupLine.paidQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidQuantity = new v4_1.ComplexTypeNumberPropertyField('PaidQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DiscountGroupLine.freeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeQuantity = new v4_1.ComplexTypeNumberPropertyField('FreeQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DiscountGroupLine.maximumFreeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maximumFreeQuantity = new v4_1.ComplexTypeNumberPropertyField('MaximumFreeQuantity', _this, 'Edm.Double');
        return _this;
    }
    return DiscountGroupLineField;
}(v4_1.ComplexTypeField));
exports.DiscountGroupLineField = DiscountGroupLineField;
var DiscountGroupLine;
(function (DiscountGroupLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            ObjectCode: function (objectCode) { return ({ objectCode: v4_1.edmToTs(objectCode, 'Edm.String') }); },
            Discount: function (discount) { return ({ discount: v4_1.edmToTs(discount, 'Edm.Double') }); },
            PaidQuantity: function (paidQuantity) { return ({ paidQuantity: v4_1.edmToTs(paidQuantity, 'Edm.Double') }); },
            FreeQuantity: function (freeQuantity) { return ({ freeQuantity: v4_1.edmToTs(freeQuantity, 'Edm.Double') }); },
            MaximumFreeQuantity: function (maximumFreeQuantity) { return ({ maximumFreeQuantity: v4_1.edmToTs(maximumFreeQuantity, 'Edm.Double') }); }
        });
    }
    DiscountGroupLine.build = build;
})(DiscountGroupLine = exports.DiscountGroupLine || (exports.DiscountGroupLine = {}));
//# sourceMappingURL=DiscountGroupLine.js.map