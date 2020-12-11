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
exports.InternalReconciliationOpenTransRow = exports.InternalReconciliationOpenTransRowField = exports.createInternalReconciliationOpenTransRow = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTransRow.build]] instead.
 */
function createInternalReconciliationOpenTransRow(json) {
    return InternalReconciliationOpenTransRow.build(json);
}
exports.createInternalReconciliationOpenTransRow = createInternalReconciliationOpenTransRow;
/**
 * InternalReconciliationOpenTransRowField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InternalReconciliationOpenTransRowField = /** @class */ (function (_super) {
    __extends(InternalReconciliationOpenTransRowField, _super);
    /**
     * Creates an instance of InternalReconciliationOpenTransRowField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InternalReconciliationOpenTransRowField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InternalReconciliationOpenTransRow) || this;
        /**
         * Representation of the [[InternalReconciliationOpenTransRow.selected]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.selected = new core_1.ComplexTypeEnumPropertyField('Selected', _this);
        /**
         * Representation of the [[InternalReconciliationOpenTransRow.shortName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shortName = new core_1.ComplexTypeStringPropertyField('ShortName', _this, 'Edm.String');
        /**
         * Representation of the [[InternalReconciliationOpenTransRow.transId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transId = new core_1.ComplexTypeNumberPropertyField('TransId', _this, 'Edm.Int32');
        /**
         * Representation of the [[InternalReconciliationOpenTransRow.transRowId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transRowId = new core_1.ComplexTypeNumberPropertyField('TransRowId', _this, 'Edm.Int32');
        /**
         * Representation of the [[InternalReconciliationOpenTransRow.srcObjTyp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.srcObjTyp = new core_1.ComplexTypeStringPropertyField('SrcObjTyp', _this, 'Edm.String');
        /**
         * Representation of the [[InternalReconciliationOpenTransRow.srcObjAbs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.srcObjAbs = new core_1.ComplexTypeNumberPropertyField('SrcObjAbs', _this, 'Edm.Int32');
        /**
         * Representation of the [[InternalReconciliationOpenTransRow.creditOrDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditOrDebit = new core_1.ComplexTypeEnumPropertyField('CreditOrDebit', _this);
        /**
         * Representation of the [[InternalReconciliationOpenTransRow.reconcileAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconcileAmount = new core_1.ComplexTypeNumberPropertyField('ReconcileAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[InternalReconciliationOpenTransRow.cashDiscount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashDiscount = new core_1.ComplexTypeNumberPropertyField('CashDiscount', _this, 'Edm.Double');
        return _this;
    }
    return InternalReconciliationOpenTransRowField;
}(core_1.ComplexTypeField));
exports.InternalReconciliationOpenTransRowField = InternalReconciliationOpenTransRowField;
var InternalReconciliationOpenTransRow;
(function (InternalReconciliationOpenTransRow) {
    /**
     * Metadata information on all properties of the `InternalReconciliationOpenTransRow` complex type.
     */
    InternalReconciliationOpenTransRow._propertyMetadata = [{
            originalName: 'Selected',
            name: 'selected',
            type: 'Edm.Enum',
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
        return core_1.deserializeComplexTypeV4(json, InternalReconciliationOpenTransRow);
    }
    InternalReconciliationOpenTransRow.build = build;
})(InternalReconciliationOpenTransRow = exports.InternalReconciliationOpenTransRow || (exports.InternalReconciliationOpenTransRow = {}));
//# sourceMappingURL=InternalReconciliationOpenTransRow.js.map