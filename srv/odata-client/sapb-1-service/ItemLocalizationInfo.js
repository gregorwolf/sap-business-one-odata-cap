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
exports.ItemLocalizationInfo = exports.ItemLocalizationInfoField = exports.createItemLocalizationInfo = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemLocalizationInfo.build]] instead.
 */
function createItemLocalizationInfo(json) {
    return ItemLocalizationInfo.build(json);
}
exports.createItemLocalizationInfo = createItemLocalizationInfo;
/**
 * ItemLocalizationInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemLocalizationInfoField = /** @class */ (function (_super) {
    __extends(ItemLocalizationInfoField, _super);
    function ItemLocalizationInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemLocalizationInfo.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[ItemLocalizationInfo.incomeNature]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.incomeNature = new v4_1.ComplexTypeStringPropertyField('IncomeNature', _this, 'Edm.String');
        return _this;
    }
    return ItemLocalizationInfoField;
}(v4_1.ComplexTypeField));
exports.ItemLocalizationInfoField = ItemLocalizationInfoField;
var ItemLocalizationInfo;
(function (ItemLocalizationInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            IncomeNature: function (incomeNature) { return ({ incomeNature: v4_1.edmToTs(incomeNature, 'Edm.String') }); }
        });
    }
    ItemLocalizationInfo.build = build;
})(ItemLocalizationInfo = exports.ItemLocalizationInfo || (exports.ItemLocalizationInfo = {}));
//# sourceMappingURL=ItemLocalizationInfo.js.map