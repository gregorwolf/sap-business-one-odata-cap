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
exports.BatchNumber = exports.BatchNumberField = exports.createBatchNumber = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BatchNumber.build]] instead.
 */
function createBatchNumber(json) {
    return BatchNumber.build(json);
}
exports.createBatchNumber = createBatchNumber;
/**
 * BatchNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BatchNumberField = /** @class */ (function (_super) {
    __extends(BatchNumberField, _super);
    /**
     * Creates an instance of BatchNumberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BatchNumberField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BatchNumber) || this;
        /**
         * Representation of the [[BatchNumber.batchNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchNumber = new core_1.ComplexTypeStringPropertyField('BatchNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BatchNumber.manufacturerSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturerSerialNumber = new core_1.ComplexTypeStringPropertyField('ManufacturerSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BatchNumber.internalSerialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalSerialNumber = new core_1.ComplexTypeStringPropertyField('InternalSerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BatchNumber.expiryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expiryDate = new core_1.ComplexTypeDatePropertyField('ExpiryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BatchNumber.manufacturingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturingDate = new core_1.ComplexTypeDatePropertyField('ManufacturingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BatchNumber.addmisionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addmisionDate = new core_1.ComplexTypeDatePropertyField('AddmisionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BatchNumber.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new core_1.ComplexTypeStringPropertyField('Location', _this, 'Edm.String');
        /**
         * Representation of the [[BatchNumber.notes]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.notes = new core_1.ComplexTypeStringPropertyField('Notes', _this, 'Edm.String');
        /**
         * Representation of the [[BatchNumber.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[BatchNumber.baseLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLineNumber = new core_1.ComplexTypeNumberPropertyField('BaseLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BatchNumber.trackingNote]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNote = new core_1.ComplexTypeNumberPropertyField('TrackingNote', _this, 'Edm.Int32');
        /**
         * Representation of the [[BatchNumber.trackingNoteLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteLine = new core_1.ComplexTypeNumberPropertyField('TrackingNoteLine', _this, 'Edm.Int32');
        return _this;
    }
    return BatchNumberField;
}(core_1.ComplexTypeField));
exports.BatchNumberField = BatchNumberField;
var BatchNumber;
(function (BatchNumber) {
    /**
     * Metadata information on all properties of the `BatchNumber` complex type.
     */
    BatchNumber._propertyMetadata = [{
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
            originalName: 'ManufacturingDate',
            name: 'manufacturingDate',
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
        return core_1.deserializeComplexTypeV4(json, BatchNumber);
    }
    BatchNumber.build = build;
})(BatchNumber = exports.BatchNumber || (exports.BatchNumber = {}));
//# sourceMappingURL=BatchNumber.js.map