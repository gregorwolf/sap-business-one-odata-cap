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
exports.InventoryOpeningBalanceBatchNumber = exports.InventoryOpeningBalanceBatchNumberField = exports.createInventoryOpeningBalanceBatchNumber = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[InventoryOpeningBalanceBatchNumber.build]] instead.
 */
function createInventoryOpeningBalanceBatchNumber(json) {
    return InventoryOpeningBalanceBatchNumber.build(json);
}
exports.createInventoryOpeningBalanceBatchNumber = createInventoryOpeningBalanceBatchNumber;
/**
 * InventoryOpeningBalanceBatchNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryOpeningBalanceBatchNumberField = /** @class */ (function (_super) {
    __extends(InventoryOpeningBalanceBatchNumberField, _super);
    /**
     * Creates an instance of InventoryOpeningBalanceBatchNumberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InventoryOpeningBalanceBatchNumberField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InventoryOpeningBalanceBatchNumber) || this;
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new core_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.batchNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchNumber = new core_1.ComplexTypeStringPropertyField('BatchNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.manufacturerSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturerSerialNumber = new core_1.ComplexTypeStringPropertyField('ManufacturerSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.internalSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalSerialNumber = new core_1.ComplexTypeStringPropertyField('InternalSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.expiryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expiryDate = new core_1.ComplexTypeDatePropertyField('ExpiryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.manufactureDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufactureDate = new core_1.ComplexTypeDatePropertyField('ManufactureDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.addmisionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addmisionDate = new core_1.ComplexTypeDatePropertyField('AddmisionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new core_1.ComplexTypeStringPropertyField('Location', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.notes]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.notes = new core_1.ComplexTypeStringPropertyField('Notes', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.baseLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLineNumber = new core_1.ComplexTypeNumberPropertyField('BaseLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.trackingNote]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNote = new core_1.ComplexTypeNumberPropertyField('TrackingNote', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceBatchNumber.trackingNoteLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteLine = new core_1.ComplexTypeNumberPropertyField('TrackingNoteLine', _this, 'Edm.Int32');
        return _this;
    }
    return InventoryOpeningBalanceBatchNumberField;
}(core_1.ComplexTypeField));
exports.InventoryOpeningBalanceBatchNumberField = InventoryOpeningBalanceBatchNumberField;
var InventoryOpeningBalanceBatchNumber;
(function (InventoryOpeningBalanceBatchNumber) {
    /**
     * Metadata information on all properties of the `InventoryOpeningBalanceBatchNumber` complex type.
     */
    InventoryOpeningBalanceBatchNumber._propertyMetadata = [{
            originalName: 'DocumentEntry',
            name: 'documentEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BatchNumber',
            name: 'batchNumber',
            type: 'Edm.String',
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
            originalName: 'AddmisionDate',
            name: 'addmisionDate',
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
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseLineNumber',
            name: 'baseLineNumber',
            type: 'Edm.Int32',
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
        return core_1.deserializeComplexTypeV4(json, InventoryOpeningBalanceBatchNumber);
    }
    InventoryOpeningBalanceBatchNumber.build = build;
})(InventoryOpeningBalanceBatchNumber = exports.InventoryOpeningBalanceBatchNumber || (exports.InventoryOpeningBalanceBatchNumber = {}));
//# sourceMappingURL=InventoryOpeningBalanceBatchNumber.js.map