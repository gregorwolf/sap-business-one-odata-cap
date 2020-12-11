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
exports.CashFlowAssignment = exports.CashFlowAssignmentField = exports.createCashFlowAssignment = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CashFlowAssignment.build]] instead.
 */
function createCashFlowAssignment(json) {
    return CashFlowAssignment.build(json);
}
exports.createCashFlowAssignment = createCashFlowAssignment;
/**
 * CashFlowAssignmentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CashFlowAssignmentField = /** @class */ (function (_super) {
    __extends(CashFlowAssignmentField, _super);
    /**
     * Creates an instance of CashFlowAssignmentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CashFlowAssignmentField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CashFlowAssignment) || this;
        /**
         * Representation of the [[CashFlowAssignment.cashFlowAssignmentsId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashFlowAssignmentsId = new core_1.ComplexTypeNumberPropertyField('CashFlowAssignmentsID', _this, 'Edm.Int32');
        /**
         * Representation of the [[CashFlowAssignment.cashFlowLineItemId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashFlowLineItemId = new core_1.ComplexTypeNumberPropertyField('CashFlowLineItemID', _this, 'Edm.Int32');
        /**
         * Representation of the [[CashFlowAssignment.credit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.credit = new core_1.ComplexTypeNumberPropertyField('Credit', _this, 'Edm.Double');
        /**
         * Representation of the [[CashFlowAssignment.paymentMeans]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMeans = new core_1.ComplexTypeEnumPropertyField('PaymentMeans', _this);
        /**
         * Representation of the [[CashFlowAssignment.checkNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkNumber = new core_1.ComplexTypeStringPropertyField('CheckNumber', _this, 'Edm.String');
        /**
         * Representation of the [[CashFlowAssignment.amountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountLc = new core_1.ComplexTypeNumberPropertyField('AmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[CashFlowAssignment.amountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountFc = new core_1.ComplexTypeNumberPropertyField('AmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[CashFlowAssignment.jdtLineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.jdtLineId = new core_1.ComplexTypeNumberPropertyField('JDTLineId', _this, 'Edm.Int32');
        return _this;
    }
    return CashFlowAssignmentField;
}(core_1.ComplexTypeField));
exports.CashFlowAssignmentField = CashFlowAssignmentField;
var CashFlowAssignment;
(function (CashFlowAssignment) {
    /**
     * Metadata information on all properties of the `CashFlowAssignment` complex type.
     */
    CashFlowAssignment._propertyMetadata = [{
            originalName: 'CashFlowAssignmentsID',
            name: 'cashFlowAssignmentsId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CashFlowLineItemID',
            name: 'cashFlowLineItemId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Credit',
            name: 'credit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PaymentMeans',
            name: 'paymentMeans',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CheckNumber',
            name: 'checkNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AmountLC',
            name: 'amountLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AmountFC',
            name: 'amountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'JDTLineId',
            name: 'jdtLineId',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CashFlowAssignment);
    }
    CashFlowAssignment.build = build;
})(CashFlowAssignment = exports.CashFlowAssignment || (exports.CashFlowAssignment = {}));
//# sourceMappingURL=CashFlowAssignment.js.map