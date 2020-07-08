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
exports.OriginalItem = exports.OriginalItemField = exports.createOriginalItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AlternativeItem_1 = require("./AlternativeItem");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[OriginalItem.build]] instead.
 */
function createOriginalItem(json) {
    return OriginalItem.build(json);
}
exports.createOriginalItem = createOriginalItem;
/**
 * OriginalItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var OriginalItemField = /** @class */ (function (_super) {
    __extends(OriginalItemField, _super);
    function OriginalItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[OriginalItem.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[OriginalItem.itemName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemName = new v4_1.ComplexTypeStringPropertyField('ItemName', _this, 'Edm.String');
        /**
         * Representation of the [[OriginalItem.alternativeItems]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alternativeItems = new AlternativeItem_1.AlternativeItemField('AlternativeItems', _this);
        return _this;
    }
    return OriginalItemField;
}(v4_1.ComplexTypeField));
exports.OriginalItemField = OriginalItemField;
var OriginalItem;
(function (OriginalItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemName: function (itemName) { return ({ itemName: v4_1.edmToTs(itemName, 'Edm.String') }); },
            AlternativeItems: function (alternativeItems) { return ({ alternativeItems: AlternativeItem_1.AlternativeItem.build(alternativeItems) }); }
        });
    }
    OriginalItem.build = build;
})(OriginalItem = exports.OriginalItem || (exports.OriginalItem = {}));
//# sourceMappingURL=OriginalItem.js.map