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
exports.InventoryPostingBatchNumber = exports.InventoryPostingBatchNumberField = exports.createInventoryPostingBatchNumber = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingBatchNumber.build]] instead.
 */
function createInventoryPostingBatchNumber(json) {
    return InventoryPostingBatchNumber.build(json);
}
exports.createInventoryPostingBatchNumber = createInventoryPostingBatchNumber;
/**
 * InventoryPostingBatchNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryPostingBatchNumberField = /** @class */ (function (_super) {
    __extends(InventoryPostingBatchNumberField, _super);
    function InventoryPostingBatchNumberField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InventoryPostingBatchNumber.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new v4_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingBatchNumber.batchNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchNumber = new v4_1.ComplexTypeStringPropertyField('BatchNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingBatchNumber.manufacturerSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturerSerialNumber = new v4_1.ComplexTypeStringPropertyField('ManufacturerSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingBatchNumber.internalSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalSerialNumber = new v4_1.ComplexTypeStringPropertyField('InternalSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingBatchNumber.expiryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expiryDate = new v4_1.ComplexTypeDatePropertyField('ExpiryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryPostingBatchNumber.manufactureDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufactureDate = new v4_1.ComplexTypeDatePropertyField('ManufactureDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryPostingBatchNumber.addmisionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addmisionDate = new v4_1.ComplexTypeDatePropertyField('AddmisionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryPostingBatchNumber.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new v4_1.ComplexTypeStringPropertyField('Location', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingBatchNumber.notes]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.notes = new v4_1.ComplexTypeStringPropertyField('Notes', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingBatchNumber.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingBatchNumber.baseLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLineNumber = new v4_1.ComplexTypeNumberPropertyField('BaseLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingBatchNumber.trackingNote]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNote = new v4_1.ComplexTypeNumberPropertyField('TrackingNote', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingBatchNumber.trackingNoteLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteLine = new v4_1.ComplexTypeNumberPropertyField('TrackingNoteLine', _this, 'Edm.Int32');
        return _this;
    }
    return InventoryPostingBatchNumberField;
}(v4_1.ComplexTypeField));
exports.InventoryPostingBatchNumberField = InventoryPostingBatchNumberField;
var InventoryPostingBatchNumber;
(function (InventoryPostingBatchNumber) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocumentEntry: function (documentEntry) { return ({ documentEntry: v4_1.edmToTs(documentEntry, 'Edm.Int32') }); },
            BatchNumber: function (batchNumber) { return ({ batchNumber: v4_1.edmToTs(batchNumber, 'Edm.String') }); },
            ManufacturerSerialNumber: function (manufacturerSerialNumber) { return ({ manufacturerSerialNumber: v4_1.edmToTs(manufacturerSerialNumber, 'Edm.String') }); },
            InternalSerialNumber: function (internalSerialNumber) { return ({ internalSerialNumber: v4_1.edmToTs(internalSerialNumber, 'Edm.String') }); },
            ExpiryDate: function (expiryDate) { return ({ expiryDate: v4_1.edmToTs(expiryDate, 'Edm.DateTimeOffset') }); },
            ManufactureDate: function (manufactureDate) { return ({ manufactureDate: v4_1.edmToTs(manufactureDate, 'Edm.DateTimeOffset') }); },
            AddmisionDate: function (addmisionDate) { return ({ addmisionDate: v4_1.edmToTs(addmisionDate, 'Edm.DateTimeOffset') }); },
            Location: function (location) { return ({ location: v4_1.edmToTs(location, 'Edm.String') }); },
            Notes: function (notes) { return ({ notes: v4_1.edmToTs(notes, 'Edm.String') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            BaseLineNumber: function (baseLineNumber) { return ({ baseLineNumber: v4_1.edmToTs(baseLineNumber, 'Edm.Int32') }); },
            TrackingNote: function (trackingNote) { return ({ trackingNote: v4_1.edmToTs(trackingNote, 'Edm.Int32') }); },
            TrackingNoteLine: function (trackingNoteLine) { return ({ trackingNoteLine: v4_1.edmToTs(trackingNoteLine, 'Edm.Int32') }); }
        });
    }
    InventoryPostingBatchNumber.build = build;
})(InventoryPostingBatchNumber = exports.InventoryPostingBatchNumber || (exports.InventoryPostingBatchNumber = {}));
//# sourceMappingURL=InventoryPostingBatchNumber.js.map