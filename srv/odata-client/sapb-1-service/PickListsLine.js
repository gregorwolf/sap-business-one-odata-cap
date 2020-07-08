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
exports.PickListsLine = exports.PickListsLineField = exports.createPickListsLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SerialNumber_1 = require("./SerialNumber");
var BatchNumber_1 = require("./BatchNumber");
var DocumentLinesBinAllocation_1 = require("./DocumentLinesBinAllocation");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PickListsLine.build]] instead.
 */
function createPickListsLine(json) {
    return PickListsLine.build(json);
}
exports.createPickListsLine = createPickListsLine;
/**
 * PickListsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PickListsLineField = /** @class */ (function (_super) {
    __extends(PickListsLineField, _super);
    function PickListsLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PickListsLine.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new v4_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PickListsLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PickListsLine.orderEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.orderEntry = new v4_1.ComplexTypeNumberPropertyField('OrderEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PickListsLine.orderRowId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.orderRowId = new v4_1.ComplexTypeNumberPropertyField('OrderRowID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PickListsLine.pickedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pickedQuantity = new v4_1.ComplexTypeNumberPropertyField('PickedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[PickListsLine.releasedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.releasedQuantity = new v4_1.ComplexTypeNumberPropertyField('ReleasedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[PickListsLine.previouslyReleasedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.previouslyReleasedQuantity = new v4_1.ComplexTypeNumberPropertyField('PreviouslyReleasedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[PickListsLine.baseObjectType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseObjectType = new v4_1.ComplexTypeNumberPropertyField('BaseObjectType', _this, 'Edm.Int32');
        /**
         * Representation of the [[PickListsLine.serialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNumbers = new SerialNumber_1.SerialNumberField('SerialNumbers', _this);
        /**
         * Representation of the [[PickListsLine.batchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchNumbers = new BatchNumber_1.BatchNumberField('BatchNumbers', _this);
        /**
         * Representation of the [[PickListsLine.documentLinesBinAllocations]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentLinesBinAllocations = new DocumentLinesBinAllocation_1.DocumentLinesBinAllocationField('DocumentLinesBinAllocations', _this);
        return _this;
    }
    return PickListsLineField;
}(v4_1.ComplexTypeField));
exports.PickListsLineField = PickListsLineField;
var PickListsLine;
(function (PickListsLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsoluteEntry: function (absoluteEntry) { return ({ absoluteEntry: v4_1.edmToTs(absoluteEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            OrderEntry: function (orderEntry) { return ({ orderEntry: v4_1.edmToTs(orderEntry, 'Edm.Int32') }); },
            OrderRowID: function (orderRowId) { return ({ orderRowId: v4_1.edmToTs(orderRowId, 'Edm.Int32') }); },
            PickedQuantity: function (pickedQuantity) { return ({ pickedQuantity: v4_1.edmToTs(pickedQuantity, 'Edm.Double') }); },
            ReleasedQuantity: function (releasedQuantity) { return ({ releasedQuantity: v4_1.edmToTs(releasedQuantity, 'Edm.Double') }); },
            PreviouslyReleasedQuantity: function (previouslyReleasedQuantity) { return ({ previouslyReleasedQuantity: v4_1.edmToTs(previouslyReleasedQuantity, 'Edm.Double') }); },
            BaseObjectType: function (baseObjectType) { return ({ baseObjectType: v4_1.edmToTs(baseObjectType, 'Edm.Int32') }); },
            SerialNumbers: function (serialNumbers) { return ({ serialNumbers: SerialNumber_1.SerialNumber.build(serialNumbers) }); },
            BatchNumbers: function (batchNumbers) { return ({ batchNumbers: BatchNumber_1.BatchNumber.build(batchNumbers) }); },
            DocumentLinesBinAllocations: function (documentLinesBinAllocations) { return ({ documentLinesBinAllocations: DocumentLinesBinAllocation_1.DocumentLinesBinAllocation.build(documentLinesBinAllocations) }); }
        });
    }
    PickListsLine.build = build;
})(PickListsLine = exports.PickListsLine || (exports.PickListsLine = {}));
//# sourceMappingURL=PickListsLine.js.map