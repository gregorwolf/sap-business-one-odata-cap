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
exports.ServiceCallInventoryExpense = exports.ServiceCallInventoryExpenseField = exports.createServiceCallInventoryExpense = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallInventoryExpense.build]] instead.
 */
function createServiceCallInventoryExpense(json) {
    return ServiceCallInventoryExpense.build(json);
}
exports.createServiceCallInventoryExpense = createServiceCallInventoryExpense;
/**
 * ServiceCallInventoryExpenseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceCallInventoryExpenseField = /** @class */ (function (_super) {
    __extends(ServiceCallInventoryExpenseField, _super);
    /**
     * Creates an instance of ServiceCallInventoryExpenseField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ServiceCallInventoryExpenseField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ServiceCallInventoryExpense) || this;
        /**
         * Representation of the [[ServiceCallInventoryExpense.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallInventoryExpense.partType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.partType = new core_1.ComplexTypeEnumPropertyField('PartType', _this);
        /**
         * Representation of the [[ServiceCallInventoryExpense.documentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentType = new core_1.ComplexTypeEnumPropertyField('DocumentType', _this);
        /**
         * Representation of the [[ServiceCallInventoryExpense.documentPostingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentPostingDate = new core_1.ComplexTypeDatePropertyField('DocumentPostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceCallInventoryExpense.documentNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentNumber = new core_1.ComplexTypeNumberPropertyField('DocumentNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallInventoryExpense.stockTransferDirection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockTransferDirection = new core_1.ComplexTypeEnumPropertyField('StockTransferDirection', _this);
        /**
         * Representation of the [[ServiceCallInventoryExpense.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        return _this;
    }
    return ServiceCallInventoryExpenseField;
}(core_1.ComplexTypeField));
exports.ServiceCallInventoryExpenseField = ServiceCallInventoryExpenseField;
var ServiceCallInventoryExpense;
(function (ServiceCallInventoryExpense) {
    /**
     * Metadata information on all properties of the `ServiceCallInventoryExpense` complex type.
     */
    ServiceCallInventoryExpense._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PartType',
            name: 'partType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DocumentType',
            name: 'documentType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DocumentPostingDate',
            name: 'documentPostingDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'DocumentNumber',
            name: 'documentNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StockTransferDirection',
            name: 'stockTransferDirection',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ServiceCallInventoryExpense);
    }
    ServiceCallInventoryExpense.build = build;
})(ServiceCallInventoryExpense = exports.ServiceCallInventoryExpense || (exports.ServiceCallInventoryExpense = {}));
//# sourceMappingURL=ServiceCallInventoryExpense.js.map