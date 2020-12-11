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
exports.InventoryPostingSerialNumber = exports.InventoryPostingSerialNumberField = exports.createInventoryPostingSerialNumber = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingSerialNumber.build]] instead.
 */
function createInventoryPostingSerialNumber(json) {
    return InventoryPostingSerialNumber.build(json);
}
exports.createInventoryPostingSerialNumber = createInventoryPostingSerialNumber;
/**
 * InventoryPostingSerialNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryPostingSerialNumberField = /** @class */ (function (_super) {
    __extends(InventoryPostingSerialNumberField, _super);
    /**
     * Creates an instance of InventoryPostingSerialNumberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InventoryPostingSerialNumberField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InventoryPostingSerialNumber) || this;
        /**
         * Representation of the [[InventoryPostingSerialNumber.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new core_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingSerialNumber.manufacturerSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturerSerialNumber = new core_1.ComplexTypeStringPropertyField('ManufacturerSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingSerialNumber.internalSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalSerialNumber = new core_1.ComplexTypeStringPropertyField('InternalSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingSerialNumber.expiryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expiryDate = new core_1.ComplexTypeDatePropertyField('ExpiryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryPostingSerialNumber.manufactureDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufactureDate = new core_1.ComplexTypeDatePropertyField('ManufactureDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryPostingSerialNumber.receptionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.receptionDate = new core_1.ComplexTypeDatePropertyField('ReceptionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryPostingSerialNumber.warrantyStart]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warrantyStart = new core_1.ComplexTypeDatePropertyField('WarrantyStart', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryPostingSerialNumber.warrantyEnd]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warrantyEnd = new core_1.ComplexTypeDatePropertyField('WarrantyEnd', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryPostingSerialNumber.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new core_1.ComplexTypeStringPropertyField('Location', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingSerialNumber.notes]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.notes = new core_1.ComplexTypeStringPropertyField('Notes', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingSerialNumber.batchId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchId = new core_1.ComplexTypeStringPropertyField('BatchID', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingSerialNumber.systemSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemSerialNumber = new core_1.ComplexTypeNumberPropertyField('SystemSerialNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingSerialNumber.baseLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLineNumber = new core_1.ComplexTypeNumberPropertyField('BaseLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingSerialNumber.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingSerialNumber.trackingNote]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNote = new core_1.ComplexTypeNumberPropertyField('TrackingNote', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingSerialNumber.trackingNoteLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteLine = new core_1.ComplexTypeNumberPropertyField('TrackingNoteLine', _this, 'Edm.Int32');
        return _this;
    }
    return InventoryPostingSerialNumberField;
}(core_1.ComplexTypeField));
exports.InventoryPostingSerialNumberField = InventoryPostingSerialNumberField;
var InventoryPostingSerialNumber;
(function (InventoryPostingSerialNumber) {
    /**
     * Metadata information on all properties of the `InventoryPostingSerialNumber` complex type.
     */
    InventoryPostingSerialNumber._propertyMetadata = [{
            originalName: 'DocumentEntry',
            name: 'documentEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
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
        return core_1.deserializeComplexTypeV4(json, InventoryPostingSerialNumber);
    }
    InventoryPostingSerialNumber.build = build;
})(InventoryPostingSerialNumber = exports.InventoryPostingSerialNumber || (exports.InventoryPostingSerialNumber = {}));
//# sourceMappingURL=InventoryPostingSerialNumber.js.map