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
exports.InternalReconciliationRow = exports.InternalReconciliationRowField = exports.createInternalReconciliationRow = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationRow.build]] instead.
 */
function createInternalReconciliationRow(json) {
    return InternalReconciliationRow.build(json);
}
exports.createInternalReconciliationRow = createInternalReconciliationRow;
/**
 * InternalReconciliationRowField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InternalReconciliationRowField = /** @class */ (function (_super) {
    __extends(InternalReconciliationRowField, _super);
    /**
     * Creates an instance of InternalReconciliationRowField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InternalReconciliationRowField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InternalReconciliationRow) || this;
        /**
         * Representation of the [[InternalReconciliationRow.lineSeq]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineSeq = new core_1.ComplexTypeNumberPropertyField('LineSeq', _this, 'Edm.Int32');
        /**
         * Representation of the [[InternalReconciliationRow.shortName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shortName = new core_1.ComplexTypeStringPropertyField('ShortName', _this, 'Edm.String');
        /**
         * Representation of the [[InternalReconciliationRow.transId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transId = new core_1.ComplexTypeNumberPropertyField('TransId', _this, 'Edm.Int32');
        /**
         * Representation of the [[InternalReconciliationRow.transRowId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transRowId = new core_1.ComplexTypeNumberPropertyField('TransRowId', _this, 'Edm.Int32');
        /**
         * Representation of the [[InternalReconciliationRow.srcObjTyp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.srcObjTyp = new core_1.ComplexTypeStringPropertyField('SrcObjTyp', _this, 'Edm.String');
        /**
         * Representation of the [[InternalReconciliationRow.srcObjAbs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.srcObjAbs = new core_1.ComplexTypeNumberPropertyField('SrcObjAbs', _this, 'Edm.Int32');
        /**
         * Representation of the [[InternalReconciliationRow.creditOrDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditOrDebit = new core_1.ComplexTypeEnumPropertyField('CreditOrDebit', _this);
        /**
         * Representation of the [[InternalReconciliationRow.reconcileAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconcileAmount = new core_1.ComplexTypeNumberPropertyField('ReconcileAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[InternalReconciliationRow.cashDiscount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashDiscount = new core_1.ComplexTypeNumberPropertyField('CashDiscount', _this, 'Edm.Double');
        return _this;
    }
    return InternalReconciliationRowField;
}(core_1.ComplexTypeField));
exports.InternalReconciliationRowField = InternalReconciliationRowField;
var InternalReconciliationRow;
(function (InternalReconciliationRow) {
    /**
     * Metadata information on all properties of the `InternalReconciliationRow` complex type.
     */
    InternalReconciliationRow._propertyMetadata = [{
            originalName: 'LineSeq',
            name: 'lineSeq',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ShortName',
            name: 'shortName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TransId',
            name: 'transId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TransRowId',
            name: 'transRowId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SrcObjTyp',
            name: 'srcObjTyp',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SrcObjAbs',
            name: 'srcObjAbs',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CreditOrDebit',
            name: 'creditOrDebit',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ReconcileAmount',
            name: 'reconcileAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CashDiscount',
            name: 'cashDiscount',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, InternalReconciliationRow);
    }
    InternalReconciliationRow.build = build;
})(InternalReconciliationRow = exports.InternalReconciliationRow || (exports.InternalReconciliationRow = {}));
//# sourceMappingURL=InternalReconciliationRow.js.map