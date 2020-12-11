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
exports.InventoryCountingSerialNumber = exports.InventoryCountingSerialNumberField = exports.createInventoryCountingSerialNumber = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of InventoryCountingSerialNumberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InventoryCountingSerialNumberField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InventoryCountingSerialNumber) || this;
        /**
         * Representation of the [[InventoryCountingSerialNumber.manufacturerSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturerSerialNumber = new core_1.ComplexTypeStringPropertyField('ManufacturerSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingSerialNumber.internalSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalSerialNumber = new core_1.ComplexTypeStringPropertyField('InternalSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingSerialNumber.expiryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expiryDate = new core_1.ComplexTypeDatePropertyField('ExpiryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingSerialNumber.manufactureDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufactureDate = new core_1.ComplexTypeDatePropertyField('ManufactureDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingSerialNumber.receptionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.receptionDate = new core_1.ComplexTypeDatePropertyField('ReceptionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingSerialNumber.warrantyStart]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warrantyStart = new core_1.ComplexTypeDatePropertyField('WarrantyStart', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingSerialNumber.warrantyEnd]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warrantyEnd = new core_1.ComplexTypeDatePropertyField('WarrantyEnd', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryCountingSerialNumber.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new core_1.ComplexTypeStringPropertyField('Location', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingSerialNumber.notes]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.notes = new core_1.ComplexTypeStringPropertyField('Notes', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingSerialNumber.batchId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchId = new core_1.ComplexTypeStringPropertyField('BatchID', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingSerialNumber.systemSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemSerialNumber = new core_1.ComplexTypeNumberPropertyField('SystemSerialNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingSerialNumber.baseLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLineNumber = new core_1.ComplexTypeNumberPropertyField('BaseLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingSerialNumber.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingSerialNumber.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new core_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingSerialNumber.counterType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterType = new core_1.ComplexTypeEnumPropertyField('CounterType', _this);
        /**
         * Representation of the [[InventoryCountingSerialNumber.counterId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterId = new core_1.ComplexTypeNumberPropertyField('CounterID', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingSerialNumber.multipleCounterRole]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.multipleCounterRole = new core_1.ComplexTypeEnumPropertyField('MultipleCounterRole', _this);
        /**
         * Representation of the [[InventoryCountingSerialNumber.trackingNote]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNote = new core_1.ComplexTypeNumberPropertyField('TrackingNote', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingSerialNumber.trackingNoteLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteLine = new core_1.ComplexTypeNumberPropertyField('TrackingNoteLine', _this, 'Edm.Int32');
        return _this;
    }
    return InventoryCountingSerialNumberField;
}(core_1.ComplexTypeField));
exports.InventoryCountingSerialNumberField = InventoryCountingSerialNumberField;
var InventoryCountingSerialNumber;
(function (InventoryCountingSerialNumber) {
    /**
     * Metadata information on all properties of the `InventoryCountingSerialNumber` complex type.
     */
    InventoryCountingSerialNumber._propertyMetadata = [{
            originalName: 'ManufacturerSerialNumber',
            name: 'manufacturerSerialNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InternalSerialNumber',
            name: 'internalSerialNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpiryDate',
            name: 'expiryDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ManufactureDate',
            name: 'manufactureDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ReceptionDate',
            name: 'receptionDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'WarrantyStart',
            name: 'warrantyStart',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'WarrantyEnd',
            name: 'warrantyEnd',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Location',
            name: 'location',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Notes',
            name: 'notes',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BatchID',
            name: 'batchId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SystemSerialNumber',
            name: 'systemSerialNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseLineNumber',
            name: 'baseLineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocumentEntry',
            name: 'documentEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CounterType',
            name: 'counterType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CounterID',
            name: 'counterId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'MultipleCounterRole',
            name: 'multipleCounterRole',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TrackingNote',
            name: 'trackingNote',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TrackingNoteLine',
            name: 'trackingNoteLine',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, InventoryCountingSerialNumber);
    }
    InventoryCountingSerialNumber.build = build;
})(InventoryCountingSerialNumber = exports.InventoryCountingSerialNumber || (exports.InventoryCountingSerialNumber = {}));
//# sourceMappingURL=InventoryCountingSerialNumber.js.map