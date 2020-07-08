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
exports.InventoryCountingSerialNumber = exports.InventoryCountingSerialNumberField = exports.createInventoryCountingSerialNumber = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingSerialNumber.build]] instead.
 */
function createInventoryCountingSerialNumber(json) {
    return InventoryCountingSerialNumber.build(json);
}
exports.createInventoryCountingSerialNumber = createInventoryCountingSerialNumber;
/**
 * InventoryCountingSerialNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryCountingSerialNumberField = /** @class */ (function (_super) {
    __extends(InventoryCountingSerialNumberField, _super);
    function InventoryCountingSerialNumberField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InventoryCountingSerialNumber.manufacturerSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturerSerialNumber = new v4_1.ComplexTypeStringPropertyField('ManufacturerSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingSerialNumber.internalSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalSerialNumber = new v4_1.ComplexTypeStringPropertyField('InternalSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingSerialNumber.expiryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expiryDate = new v4_1.ComplexTypeDatePropertyField('ExpiryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingSerialNumber.manufactureDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufactureDate = new v4_1.ComplexTypeDatePropertyField('ManufactureDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingSerialNumber.receptionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.receptionDate = new v4_1.ComplexTypeDatePropertyField('ReceptionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingSerialNumber.warrantyStart]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warrantyStart = new v4_1.ComplexTypeDatePropertyField('WarrantyStart', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingSerialNumber.warrantyEnd]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warrantyEnd = new v4_1.ComplexTypeDatePropertyField('WarrantyEnd', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingSerialNumber.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new v4_1.ComplexTypeStringPropertyField('Location', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingSerialNumber.notes]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.notes = new v4_1.ComplexTypeStringPropertyField('Notes', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingSerialNumber.batchId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchId = new v4_1.ComplexTypeStringPropertyField('BatchID', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingSerialNumber.systemSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemSerialNumber = new v4_1.ComplexTypeNumberPropertyField('SystemSerialNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingSerialNumber.baseLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLineNumber = new v4_1.ComplexTypeNumberPropertyField('BaseLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingSerialNumber.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingSerialNumber.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new v4_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingSerialNumber.counterId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterId = new v4_1.ComplexTypeNumberPropertyField('CounterID', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingSerialNumber.trackingNote]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNote = new v4_1.ComplexTypeNumberPropertyField('TrackingNote', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingSerialNumber.trackingNoteLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteLine = new v4_1.ComplexTypeNumberPropertyField('TrackingNoteLine', _this, 'Edm.Int32');
        return _this;
    }
    return InventoryCountingSerialNumberField;
}(v4_1.ComplexTypeField));
exports.InventoryCountingSerialNumberField = InventoryCountingSerialNumberField;
var InventoryCountingSerialNumber;
(function (InventoryCountingSerialNumber) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ManufacturerSerialNumber: function (manufacturerSerialNumber) { return ({ manufacturerSerialNumber: v4_1.edmToTs(manufacturerSerialNumber, 'Edm.String') }); },
            InternalSerialNumber: function (internalSerialNumber) { return ({ internalSerialNumber: v4_1.edmToTs(internalSerialNumber, 'Edm.String') }); },
            ExpiryDate: function (expiryDate) { return ({ expiryDate: v4_1.edmToTs(expiryDate, 'Edm.DateTimeOffset') }); },
            ManufactureDate: function (manufactureDate) { return ({ manufactureDate: v4_1.edmToTs(manufactureDate, 'Edm.DateTimeOffset') }); },
            ReceptionDate: function (receptionDate) { return ({ receptionDate: v4_1.edmToTs(receptionDate, 'Edm.DateTimeOffset') }); },
            WarrantyStart: function (warrantyStart) { return ({ warrantyStart: v4_1.edmToTs(warrantyStart, 'Edm.DateTimeOffset') }); },
            WarrantyEnd: function (warrantyEnd) { return ({ warrantyEnd: v4_1.edmToTs(warrantyEnd, 'Edm.DateTimeOffset') }); },
            Location: function (location) { return ({ location: v4_1.edmToTs(location, 'Edm.String') }); },
            Notes: function (notes) { return ({ notes: v4_1.edmToTs(notes, 'Edm.String') }); },
            BatchID: function (batchId) { return ({ batchId: v4_1.edmToTs(batchId, 'Edm.String') }); },
            SystemSerialNumber: function (systemSerialNumber) { return ({ systemSerialNumber: v4_1.edmToTs(systemSerialNumber, 'Edm.Int32') }); },
            BaseLineNumber: function (baseLineNumber) { return ({ baseLineNumber: v4_1.edmToTs(baseLineNumber, 'Edm.Int32') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            DocumentEntry: function (documentEntry) { return ({ documentEntry: v4_1.edmToTs(documentEntry, 'Edm.Int32') }); },
            CounterID: function (counterId) { return ({ counterId: v4_1.edmToTs(counterId, 'Edm.Int32') }); },
            TrackingNote: function (trackingNote) { return ({ trackingNote: v4_1.edmToTs(trackingNote, 'Edm.Int32') }); },
            TrackingNoteLine: function (trackingNoteLine) { return ({ trackingNoteLine: v4_1.edmToTs(trackingNoteLine, 'Edm.Int32') }); }
        });
    }
    InventoryCountingSerialNumber.build = build;
})(InventoryCountingSerialNumber = exports.InventoryCountingSerialNumber || (exports.InventoryCountingSerialNumber = {}));
//# sourceMappingURL=InventoryCountingSerialNumber.js.map