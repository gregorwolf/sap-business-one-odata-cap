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
exports.ItemParams = exports.ItemParamsField = exports.createItemParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemParams.build]] instead.
 */
function createItemParams(json) {
    return ItemParams.build(json);
}
exports.createItemParams = createItemParams;
/**
 * ItemParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemParamsField = /** @class */ (function (_super) {
    __extends(ItemParamsField, _super);
    function ItemParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        return _this;
    }
    return ItemParamsField;
}(v4_1.ComplexTypeField));
exports.ItemParamsField = ItemParamsField;
var ItemParams;
(function (ItemParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); }
        });
    }
    ItemParams.build = build;
})(ItemParams = exports.ItemParams || (exports.ItemParams = {}));
//# sourceMappingURL=ItemParams.js.map