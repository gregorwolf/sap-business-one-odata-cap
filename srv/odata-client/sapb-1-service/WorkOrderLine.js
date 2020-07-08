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
exports.WorkOrderLine = exports.WorkOrderLineField = exports.createWorkOrderLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WorkOrderLine.build]] instead.
 */
function createWorkOrderLine(json) {
    return WorkOrderLine.build(json);
}
exports.createWorkOrderLine = createWorkOrderLine;
/**
 * WorkOrderLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WorkOrderLineField = /** @class */ (function (_super) {
    __extends(WorkOrderLineField, _super);
    function WorkOrderLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WorkOrderLine.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new v4_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkOrderLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[WorkOrderLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new v4_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[WorkOrderLine.itemQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemQuantity = new v4_1.ComplexTypeNumberPropertyField('ItemQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[WorkOrderLine.itemPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemPrice = new v4_1.ComplexTypeNumberPropertyField('ItemPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[WorkOrderLine.priceCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceCurrency = new v4_1.ComplexTypeStringPropertyField('PriceCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[WorkOrderLine.itemWarehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemWarehouse = new v4_1.ComplexTypeStringPropertyField('ItemWarehouse', _this, 'Edm.String');
        /**
         * Representation of the [[WorkOrderLine.activeAccountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activeAccountCode = new v4_1.ComplexTypeStringPropertyField('ActiveAccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[WorkOrderLine.workSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.workSum = new v4_1.ComplexTypeNumberPropertyField('WorkSum', _this, 'Edm.Double');
        return _this;
    }
    return WorkOrderLineField;
}(v4_1.ComplexTypeField));
exports.WorkOrderLineField = WorkOrderLineField;
var WorkOrderLine;
(function (WorkOrderLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            RowNumber: function (rowNumber) { return ({ rowNumber: v4_1.edmToTs(rowNumber, 'Edm.Int32') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemDescription: function (itemDescription) { return ({ itemDescription: v4_1.edmToTs(itemDescription, 'Edm.String') }); },
            ItemQuantity: function (itemQuantity) { return ({ itemQuantity: v4_1.edmToTs(itemQuantity, 'Edm.Double') }); },
            ItemPrice: function (itemPrice) { return ({ itemPrice: v4_1.edmToTs(itemPrice, 'Edm.Double') }); },
            PriceCurrency: function (priceCurrency) { return ({ priceCurrency: v4_1.edmToTs(priceCurrency, 'Edm.String') }); },
            ItemWarehouse: function (itemWarehouse) { return ({ itemWarehouse: v4_1.edmToTs(itemWarehouse, 'Edm.String') }); },
            ActiveAccountCode: function (activeAccountCode) { return ({ activeAccountCode: v4_1.edmToTs(activeAccountCode, 'Edm.String') }); },
            WorkSum: function (workSum) { return ({ workSum: v4_1.edmToTs(workSum, 'Edm.Double') }); }
        });
    }
    WorkOrderLine.build = build;
})(WorkOrderLine = exports.WorkOrderLine || (exports.WorkOrderLine = {}));
//# sourceMappingURL=WorkOrderLine.js.map