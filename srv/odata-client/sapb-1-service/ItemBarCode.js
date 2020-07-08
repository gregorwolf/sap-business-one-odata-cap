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
exports.ItemBarCode = exports.ItemBarCodeField = exports.createItemBarCode = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemBarCode.build]] instead.
 */
function createItemBarCode(json) {
    return ItemBarCode.build(json);
}
exports.createItemBarCode = createItemBarCode;
/**
 * ItemBarCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemBarCodeField = /** @class */ (function (_super) {
    __extends(ItemBarCodeField, _super);
    function ItemBarCodeField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemBarCode.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemBarCode.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new v4_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemBarCode.barcode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barcode = new v4_1.ComplexTypeStringPropertyField('Barcode', _this, 'Edm.String');
        /**
         * Representation of the [[ItemBarCode.freeText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText = new v4_1.ComplexTypeStringPropertyField('FreeText', _this, 'Edm.String');
        return _this;
    }
    return ItemBarCodeField;
}(v4_1.ComplexTypeField));
exports.ItemBarCodeField = ItemBarCodeField;
var ItemBarCode;
(function (ItemBarCode) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            UoMEntry: function (uoMEntry) { return ({ uoMEntry: v4_1.edmToTs(uoMEntry, 'Edm.Int32') }); },
            Barcode: function (barcode) { return ({ barcode: v4_1.edmToTs(barcode, 'Edm.String') }); },
            FreeText: function (freeText) { return ({ freeText: v4_1.edmToTs(freeText, 'Edm.String') }); }
        });
    }
    ItemBarCode.build = build;
})(ItemBarCode = exports.ItemBarCode || (exports.ItemBarCode = {}));
//# sourceMappingURL=ItemBarCode.js.map