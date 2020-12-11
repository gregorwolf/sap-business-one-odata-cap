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
exports.DocumentInstallment = exports.DocumentInstallmentField = exports.createDocumentInstallment = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DocumentInstallment.build]] instead.
 */
function createDocumentInstallment(json) {
    return DocumentInstallment.build(json);
}
exports.createDocumentInstallment = createDocumentInstallment;
/**
 * DocumentInstallmentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentInstallmentField = /** @class */ (function (_super) {
    __extends(DocumentInstallmentField, _super);
    /**
     * Creates an instance of DocumentInstallmentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DocumentInstallmentField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DocumentInstallment) || this;
        /**
         * Representation of the [[DocumentInstallment.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DocumentInstallment.percentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percentage = new core_1.ComplexTypeNumberPropertyField('Percentage', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentInstallment.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new core_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentInstallment.lastDunningDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastDunningDate = new core_1.ComplexTypeDatePropertyField('LastDunningDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DocumentInstallment.dunningLevel]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dunningLevel = new core_1.ComplexTypeNumberPropertyField('DunningLevel', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentInstallment.totalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalFc = new core_1.ComplexTypeNumberPropertyField('TotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentInstallment.installmentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.installmentId = new core_1.ComplexTypeNumberPropertyField('InstallmentId', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentInstallment.paymentOrdered]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentOrdered = new core_1.ComplexTypeEnumPropertyField('PaymentOrdered', _this);
        return _this;
    }
    return DocumentInstallmentField;
}(core_1.ComplexTypeField));
exports.DocumentInstallmentField = DocumentInstallmentField;
var DocumentInstallment;
(function (DocumentInstallment) {
    /**
     * Metadata information on all properties of the `DocumentInstallment` complex type.
     */
    DocumentInstallment._propertyMetadata = [{
            originalName: 'DueDate',
            name: 'dueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Percentage',
            name: 'percentage',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Total',
            name: 'total',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LastDunningDate',
            name: 'lastDunningDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'DunningLevel',
            name: 'dunningLevel',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TotalFC',
            name: 'totalFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'InstallmentId',
            name: 'installmentId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PaymentOrdered',
            name: 'paymentOrdered',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DocumentInstallment);
    }
    DocumentInstallment.build = build;
})(DocumentInstallment = exports.DocumentInstallment || (exports.DocumentInstallment = {}));
//# sourceMappingURL=DocumentInstallment.js.map