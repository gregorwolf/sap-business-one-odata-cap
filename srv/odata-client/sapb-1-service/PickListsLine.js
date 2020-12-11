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
exports.PickListsLine = exports.PickListsLineField = exports.createPickListsLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SerialNumber_1 = require("./SerialNumber");
var BatchNumber_1 = require("./BatchNumber");
var DocumentLinesBinAllocation_1 = require("./DocumentLinesBinAllocation");
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of PickListsLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PickListsLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PickListsLine) || this;
        /**
         * Representation of the [[PickListsLine.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new core_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PickListsLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PickListsLine.orderEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.orderEntry = new core_1.ComplexTypeNumberPropertyField('OrderEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PickListsLine.orderRowId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.orderRowId = new core_1.ComplexTypeNumberPropertyField('OrderRowID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PickListsLine.pickedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pickedQuantity = new core_1.ComplexTypeNumberPropertyField('PickedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[PickListsLine.pickStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pickStatus = new core_1.ComplexTypeEnumPropertyField('PickStatus', _this);
        /**
         * Representation of the [[PickListsLine.releasedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.releasedQuantity = new core_1.ComplexTypeNumberPropertyField('ReleasedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[PickListsLine.previouslyReleasedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.previouslyReleasedQuantity = new core_1.ComplexTypeNumberPropertyField('PreviouslyReleasedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[PickListsLine.baseObjectType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseObjectType = new core_1.ComplexTypeNumberPropertyField('BaseObjectType', _this, 'Edm.Int32');
        /**
         * Representation of the [[PickListsLine.serialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNumbers = new core_1.CollectionField('SerialNumbers', _this, SerialNumber_1.SerialNumber);
        /**
         * Representation of the [[PickListsLine.batchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchNumbers = new core_1.CollectionField('BatchNumbers', _this, BatchNumber_1.BatchNumber);
        /**
         * Representation of the [[PickListsLine.documentLinesBinAllocations]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentLinesBinAllocations = new core_1.CollectionField('DocumentLinesBinAllocations', _this, DocumentLinesBinAllocation_1.DocumentLinesBinAllocation);
        return _this;
    }
    return PickListsLineField;
}(core_1.ComplexTypeField));
exports.PickListsLineField = PickListsLineField;
var PickListsLine;
(function (PickListsLine) {
    /**
     * Metadata information on all properties of the `PickListsLine` complex type.
     */
    PickListsLine._propertyMetadata = [{
            originalName: 'AbsoluteEntry',
            name: 'absoluteEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'OrderEntry',
            name: 'orderEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'OrderRowID',
            name: 'orderRowId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PickedQuantity',
            name: 'pickedQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PickStatus',
            name: 'pickStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ReleasedQuantity',
            name: 'releasedQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PreviouslyReleasedQuantity',
            name: 'previouslyReleasedQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseObjectType',
            name: 'baseObjectType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SerialNumbers',
            name: 'serialNumbers',
            type: SerialNumber_1.SerialNumber,
            isCollection: true
        }, {
            originalName: 'BatchNumbers',
            name: 'batchNumbers',
            type: BatchNumber_1.BatchNumber,
            isCollection: true
        }, {
            originalName: 'DocumentLinesBinAllocations',
            name: 'documentLinesBinAllocations',
            type: DocumentLinesBinAllocation_1.DocumentLinesBinAllocation,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PickListsLine);
    }
    PickListsLine.build = build;
})(PickListsLine = exports.PickListsLine || (exports.PickListsLine = {}));
//# sourceMappingURL=PickListsLine.js.map