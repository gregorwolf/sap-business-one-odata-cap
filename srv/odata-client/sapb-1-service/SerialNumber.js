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
exports.SerialNumber = exports.SerialNumberField = exports.createSerialNumber = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SerialNumber.build]] instead.
 */
function createSerialNumber(json) {
    return SerialNumber.build(json);
}
exports.createSerialNumber = createSerialNumber;
/**
 * SerialNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SerialNumberField = /** @class */ (function (_super) {
    __extends(SerialNumberField, _super);
    /**
     * Creates an instance of SerialNumberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SerialNumberField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SerialNumber) || this;
        /**
         * Representation of the [[SerialNumber.manufacturerSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturerSerialNumber = new core_1.ComplexTypeStringPropertyField('ManufacturerSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[SerialNumber.internalSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalSerialNumber = new core_1.ComplexTypeStringPropertyField('InternalSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[SerialNumber.expiryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expiryDate = new core_1.ComplexTypeDatePropertyField('ExpiryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SerialNumber.manufactureDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufactureDate = new core_1.ComplexTypeDatePropertyField('ManufactureDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SerialNumber.receptionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.receptionDate = new core_1.ComplexTypeDatePropertyField('ReceptionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SerialNumber.warrantyStart]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warrantyStart = new core_1.ComplexTypeDatePropertyField('WarrantyStart', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SerialNumber.warrantyEnd]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warrantyEnd = new core_1.ComplexTypeDatePropertyField('WarrantyEnd', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SerialNumber.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new core_1.ComplexTypeStringPropertyField('Location', _this, 'Edm.String');
        /**
         * Representation of the [[SerialNumber.notes]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.notes = new core_1.ComplexTypeStringPropertyField('Notes', _this, 'Edm.String');
        /**
         * Representation of the [[SerialNumber.batchId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchId = new core_1.ComplexTypeStringPropertyField('BatchID', _this, 'Edm.String');
        /**
         * Representation of the [[SerialNumber.systemSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemSerialNumber = new core_1.ComplexTypeNumberPropertyField('SystemSerialNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SerialNumber.baseLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLineNumber = new core_1.ComplexTypeNumberPropertyField('BaseLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SerialNumber.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[SerialNumber.trackingNote]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNote = new core_1.ComplexTypeNumberPropertyField('TrackingNote', _this, 'Edm.Int32');
        /**
         * Representation of the [[SerialNumber.trackingNoteLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteLine = new core_1.ComplexTypeNumberPropertyField('TrackingNoteLine', _this, 'Edm.Int32');
        return _this;
    }
    return SerialNumberField;
}(core_1.ComplexTypeField));
exports.SerialNumberField = SerialNumberField;
var SerialNumber;
(function (SerialNumber) {
    /**
     * Metadata information on all properties of the `SerialNumber` complex type.
     */
    SerialNumber._propertyMetadata = [{
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
        return core_1.deserializeComplexTypeV4(json, SerialNumber);
    }
    SerialNumber.build = build;
})(SerialNumber = exports.SerialNumber || (exports.SerialNumber = {}));
//# sourceMappingURL=SerialNumber.js.map