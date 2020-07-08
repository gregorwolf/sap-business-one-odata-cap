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
exports.TrackingNoteItem = exports.TrackingNoteItemField = exports.createTrackingNoteItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function TrackingNoteItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TrackingNoteItem.trackingNoteNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteNumber = new v4_1.ComplexTypeNumberPropertyField('TrackingNoteNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TrackingNoteItem.trackingNoteLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteLineNumber = new v4_1.ComplexTypeNumberPropertyField('TrackingNoteLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TrackingNoteItem.itemCcdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCcdNumber = new v4_1.ComplexTypeStringPropertyField('ItemCCDNumber', _this, 'Edm.String');
        /**
         * Representation of the [[TrackingNoteItem.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[TrackingNoteItem.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[TrackingNoteItem.countryOfOrigin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countryOfOrigin = new v4_1.ComplexTypeStringPropertyField('CountryOfOrigin', _this, 'Edm.String');
        /**
         * Representation of the [[TrackingNoteItem.customsGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsGroupCode = new v4_1.ComplexTypeNumberPropertyField('CustomsGroupCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[TrackingNoteItem.accumulatedApQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumulatedApQuantity = new v4_1.ComplexTypeNumberPropertyField('AccumulatedAPQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[TrackingNoteItem.accumulatedArQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumulatedArQuantity = new v4_1.ComplexTypeNumberPropertyField('AccumulatedARQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[TrackingNoteItem.accumulatedRelocatedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumulatedRelocatedQuantity = new v4_1.ComplexTypeNumberPropertyField('AccumulatedRelocatedQuantity', _this, 'Edm.Double');
        return _this;
    }
    return TrackingNoteItemField;
}(v4_1.ComplexTypeField));
exports.TrackingNoteItemField = TrackingNoteItemField;
var TrackingNoteItem;
(function (TrackingNoteItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TrackingNoteNumber: function (trackingNoteNumber) { return ({ trackingNoteNumber: v4_1.edmToTs(trackingNoteNumber, 'Edm.Int32') }); },
            TrackingNoteLineNumber: function (trackingNoteLineNumber) { return ({ trackingNoteLineNumber: v4_1.edmToTs(trackingNoteLineNumber, 'Edm.Int32') }); },
            ItemCCDNumber: function (itemCcdNumber) { return ({ itemCcdNumber: v4_1.edmToTs(itemCcdNumber, 'Edm.String') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            CountryOfOrigin: function (countryOfOrigin) { return ({ countryOfOrigin: v4_1.edmToTs(countryOfOrigin, 'Edm.String') }); },
            CustomsGroupCode: function (customsGroupCode) { return ({ customsGroupCode: v4_1.edmToTs(customsGroupCode, 'Edm.Int32') }); },
            AccumulatedAPQuantity: function (accumulatedApQuantity) { return ({ accumulatedApQuantity: v4_1.edmToTs(accumulatedApQuantity, 'Edm.Double') }); },
            AccumulatedARQuantity: function (accumulatedArQuantity) { return ({ accumulatedArQuantity: v4_1.edmToTs(accumulatedArQuantity, 'Edm.Double') }); },
            AccumulatedRelocatedQuantity: function (accumulatedRelocatedQuantity) { return ({ accumulatedRelocatedQuantity: v4_1.edmToTs(accumulatedRelocatedQuantity, 'Edm.Double') }); }
        });
    }
    TrackingNoteItem.build = build;
})(TrackingNoteItem = exports.TrackingNoteItem || (exports.TrackingNoteItem = {}));
//# sourceMappingURL=TrackingNoteItem.js.map