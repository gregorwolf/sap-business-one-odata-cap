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
exports.TrackingNoteItem = exports.TrackingNoteItemField = exports.createTrackingNoteItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TrackingNoteItem.build]] instead.
 */
function createTrackingNoteItem(json) {
    return TrackingNoteItem.build(json);
}
exports.createTrackingNoteItem = createTrackingNoteItem;
/**
 * TrackingNoteItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TrackingNoteItemField = /** @class */ (function (_super) {
    __extends(TrackingNoteItemField, _super);
    /**
     * Creates an instance of TrackingNoteItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TrackingNoteItemField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TrackingNoteItem) || this;
        /**
         * Representation of the [[TrackingNoteItem.trackingNoteNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteNumber = new core_1.ComplexTypeNumberPropertyField('TrackingNoteNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TrackingNoteItem.trackingNoteLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteLineNumber = new core_1.ComplexTypeNumberPropertyField('TrackingNoteLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TrackingNoteItem.itemCcdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCcdNumber = new core_1.ComplexTypeStringPropertyField('ItemCCDNumber', _this, 'Edm.String');
        /**
         * Representation of the [[TrackingNoteItem.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[TrackingNoteItem.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[TrackingNoteItem.countryOfOrigin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countryOfOrigin = new core_1.ComplexTypeStringPropertyField('CountryOfOrigin', _this, 'Edm.String');
        /**
         * Representation of the [[TrackingNoteItem.customsGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsGroupCode = new core_1.ComplexTypeNumberPropertyField('CustomsGroupCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[TrackingNoteItem.accumulatedApQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumulatedApQuantity = new core_1.ComplexTypeNumberPropertyField('AccumulatedAPQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[TrackingNoteItem.accumulatedArQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumulatedArQuantity = new core_1.ComplexTypeNumberPropertyField('AccumulatedARQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[TrackingNoteItem.accumulatedRelocatedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumulatedRelocatedQuantity = new core_1.ComplexTypeNumberPropertyField('AccumulatedRelocatedQuantity', _this, 'Edm.Double');
        return _this;
    }
    return TrackingNoteItemField;
}(core_1.ComplexTypeField));
exports.TrackingNoteItemField = TrackingNoteItemField;
var TrackingNoteItem;
(function (TrackingNoteItem) {
    /**
     * Metadata information on all properties of the `TrackingNoteItem` complex type.
     */
    TrackingNoteItem._propertyMetadata = [{
            originalName: 'TrackingNoteNumber',
            name: 'trackingNoteNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TrackingNoteLineNumber',
            name: 'trackingNoteLineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemCCDNumber',
            name: 'itemCcdNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CountryOfOrigin',
            name: 'countryOfOrigin',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustomsGroupCode',
            name: 'customsGroupCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AccumulatedAPQuantity',
            name: 'accumulatedApQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumulatedARQuantity',
            name: 'accumulatedArQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumulatedRelocatedQuantity',
            name: 'accumulatedRelocatedQuantity',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TrackingNoteItem);
    }
    TrackingNoteItem.build = build;
})(TrackingNoteItem = exports.TrackingNoteItem || (exports.TrackingNoteItem = {}));
//# sourceMappingURL=TrackingNoteItem.js.map