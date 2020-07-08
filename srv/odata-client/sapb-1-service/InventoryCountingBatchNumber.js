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
exports.InventoryCountingBatchNumber = exports.InventoryCountingBatchNumberField = exports.createInventoryCountingBatchNumber = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingBatchNumber.build]] instead.
 */
function createInventoryCountingBatchNumber(json) {
    return InventoryCountingBatchNumber.build(json);
}
exports.createInventoryCountingBatchNumber = createInventoryCountingBatchNumber;
/**
 * InventoryCountingBatchNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryCountingBatchNumberField = /** @class */ (function (_super) {
    __extends(InventoryCountingBatchNumberField, _super);
    function InventoryCountingBatchNumberField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InventoryCountingBatchNumber.batchNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchNumber = new v4_1.ComplexTypeStringPropertyField('BatchNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingBatchNumber.manufacturerSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturerSerialNumber = new v4_1.ComplexTypeStringPropertyField('ManufacturerSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingBatchNumber.internalSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalSerialNumber = new v4_1.ComplexTypeStringPropertyField('InternalSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingBatchNumber.expiryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expiryDate = new v4_1.ComplexTypeDatePropertyField('ExpiryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingBatchNumber.manufactureDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufactureDate = new v4_1.ComplexTypeDatePropertyField('ManufactureDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingBatchNumber.addmisionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addmisionDate = new v4_1.ComplexTypeDatePropertyField('AddmisionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingBatchNumber.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new v4_1.ComplexTypeStringPropertyField('Location', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingBatchNumber.notes]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.notes = new v4_1.ComplexTypeStringPropertyField('Notes', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingBatchNumber.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingBatchNumber.baseLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLineNumber = new v4_1.ComplexTypeNumberPropertyField('BaseLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingBatchNumber.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new v4_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingBatchNumber.counterId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterId = new v4_1.ComplexTypeNumberPropertyField('CounterID', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingBatchNumber.trackingNote]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNote = new v4_1.ComplexTypeNumberPropertyField('TrackingNote', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingBatchNumber.trackingNoteLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteLine = new v4_1.ComplexTypeNumberPropertyField('TrackingNoteLine', _this, 'Edm.Int32');
        return _this;
    }
    return InventoryCountingBatchNumberField;
}(v4_1.ComplexTypeField));
exports.InventoryCountingBatchNumberField = InventoryCountingBatchNumberField;
var InventoryCountingBatchNumber;
(function (InventoryCountingBatchNumber) {
    function build(json) {
        return v4_1.createComplexType(json, {
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
            DocumentEntry: function (documentEntry) { return ({ documentEntry: v4_1.edmToTs(documentEntry, 'Edm.Int32') }); },
            CounterID: function (counterId) { return ({ counterId: v4_1.edmToTs(counterId, 'Edm.Int32') }); },
            TrackingNote: function (trackingNote) { return ({ trackingNote: v4_1.edmToTs(trackingNote, 'Edm.Int32') }); },
            TrackingNoteLine: function (trackingNoteLine) { return ({ trackingNoteLine: v4_1.edmToTs(trackingNoteLine, 'Edm.Int32') }); }
        });
    }
    InventoryCountingBatchNumber.build = build;
})(InventoryCountingBatchNumber = exports.InventoryCountingBatchNumber || (exports.InventoryCountingBatchNumber = {}));
//# sourceMappingURL=InventoryCountingBatchNumber.js.map