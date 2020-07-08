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
exports.InventoryPostingLineUoM = exports.InventoryPostingLineUoMField = exports.createInventoryPostingLineUoM = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingLineUoM.build]] instead.
 */
function createInventoryPostingLineUoM(json) {
    return InventoryPostingLineUoM.build(json);
}
exports.createInventoryPostingLineUoM = createInventoryPostingLineUoM;
/**
 * InventoryPostingLineUoMField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryPostingLineUoMField = /** @class */ (function (_super) {
    __extends(InventoryPostingLineUoMField, _super);
    function InventoryPostingLineUoMField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InventoryPostingLineUoM.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new v4_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLineUoM.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLineUoM.childNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.childNumber = new v4_1.ComplexTypeNumberPropertyField('ChildNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLineUoM.uoMCountedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCountedQuantity = new v4_1.ComplexTypeNumberPropertyField('UoMCountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLineUoM.itemsPerUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemsPerUnit = new v4_1.ComplexTypeNumberPropertyField('ItemsPerUnit', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLineUoM.countedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countedQuantity = new v4_1.ComplexTypeNumberPropertyField('CountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLineUoM.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new v4_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLineUoM.barCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barCode = new v4_1.ComplexTypeStringPropertyField('BarCode', _this, 'Edm.String');
        return _this;
    }
    return InventoryPostingLineUoMField;
}(v4_1.ComplexTypeField));
exports.InventoryPostingLineUoMField = InventoryPostingLineUoMField;
var InventoryPostingLineUoM;
(function (InventoryPostingLineUoM) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocumentEntry: function (documentEntry) { return ({ documentEntry: v4_1.edmToTs(documentEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            ChildNumber: function (childNumber) { return ({ childNumber: v4_1.edmToTs(childNumber, 'Edm.Int32') }); },
            UoMCountedQuantity: function (uoMCountedQuantity) { return ({ uoMCountedQuantity: v4_1.edmToTs(uoMCountedQuantity, 'Edm.Double') }); },
            ItemsPerUnit: function (itemsPerUnit) { return ({ itemsPerUnit: v4_1.edmToTs(itemsPerUnit, 'Edm.Double') }); },
            CountedQuantity: function (countedQuantity) { return ({ countedQuantity: v4_1.edmToTs(countedQuantity, 'Edm.Double') }); },
            UoMCode: function (uoMCode) { return ({ uoMCode: v4_1.edmToTs(uoMCode, 'Edm.String') }); },
            BarCode: function (barCode) { return ({ barCode: v4_1.edmToTs(barCode, 'Edm.String') }); }
        });
    }
    InventoryPostingLineUoM.build = build;
})(InventoryPostingLineUoM = exports.InventoryPostingLineUoM || (exports.InventoryPostingLineUoM = {}));
//# sourceMappingURL=InventoryPostingLineUoM.js.map