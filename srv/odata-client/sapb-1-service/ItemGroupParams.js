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
exports.ItemGroupParams = exports.ItemGroupParamsField = exports.createItemGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemGroupParams.build]] instead.
 */
function createItemGroupParams(json) {
    return ItemGroupParams.build(json);
}
exports.createItemGroupParams = createItemGroupParams;
/**
 * ItemGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemGroupParamsField = /** @class */ (function (_super) {
    __extends(ItemGroupParamsField, _super);
    function ItemGroupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemGroupParams.number]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.number = new v4_1.ComplexTypeNumberPropertyField('Number', _this, 'Edm.Int32');
        return _this;
    }
    return ItemGroupParamsField;
}(v4_1.ComplexTypeField));
exports.ItemGroupParamsField = ItemGroupParamsField;
var ItemGroupParams;
(function (ItemGroupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Number: function (number) { return ({ number: v4_1.edmToTs(number, 'Edm.Int32') }); }
        });
    }
    ItemGroupParams.build = build;
})(ItemGroupParams = exports.ItemGroupParams || (exports.ItemGroupParams = {}));
//# sourceMappingURL=ItemGroupParams.js.map