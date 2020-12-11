"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of WorkOrderLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WorkOrderLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WorkOrderLine) || this;
        /**
         * Representation of the [[WorkOrderLine.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new core_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkOrderLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[WorkOrderLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new core_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[WorkOrderLine.itemQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemQuantity = new core_1.ComplexTypeNumberPropertyField('ItemQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[WorkOrderLine.itemPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemPrice = new core_1.ComplexTypeNumberPropertyField('ItemPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[WorkOrderLine.priceCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceCurrency = new core_1.ComplexTypeStringPropertyField('PriceCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[WorkOrderLine.itemWarehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemWarehouse = new core_1.ComplexTypeStringPropertyField('ItemWarehouse', _this, 'Edm.String');
        /**
         * Representation of the [[WorkOrderLine.activeAccountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activeAccountCode = new core_1.ComplexTypeStringPropertyField('ActiveAccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[WorkOrderLine.workSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.workSum = new core_1.ComplexTypeNumberPropertyField('WorkSum', _this, 'Edm.Double');
        return _this;
    }
    return WorkOrderLineField;
}(core_1.ComplexTypeField));
exports.WorkOrderLineField = WorkOrderLineField;
var WorkOrderLine;
(function (WorkOrderLine) {
    /**
     * Metadata information on all properties of the `WorkOrderLine` complex type.
     */
    WorkOrderLine._propertyMetadata = [{
            originalName: 'RowNumber',
            name: 'rowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemDescription',
            name: 'itemDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemQuantity',
            name: 'itemQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ItemPrice',
            name: 'itemPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PriceCurrency',
            name: 'priceCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemWarehouse',
            name: 'itemWarehouse',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ActiveAccountCode',
            name: 'activeAccountCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WorkSum',
            name: 'workSum',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WorkOrderLine);
    }
    WorkOrderLine.build = build;
})(WorkOrderLine = exports.WorkOrderLine || (exports.WorkOrderLine = {}));
//# sourceMappingURL=WorkOrderLine.js.map