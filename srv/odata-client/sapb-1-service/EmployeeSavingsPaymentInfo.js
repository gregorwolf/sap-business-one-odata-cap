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
exports.EmployeeSavingsPaymentInfo = exports.EmployeeSavingsPaymentInfoField = exports.createEmployeeSavingsPaymentInfo = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeSavingsPaymentInfo.build]] instead.
 */
function createEmployeeSavingsPaymentInfo(json) {
    return EmployeeSavingsPaymentInfo.build(json);
}
exports.createEmployeeSavingsPaymentInfo = createEmployeeSavingsPaymentInfo;
/**
 * EmployeeSavingsPaymentInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeSavingsPaymentInfoField = /** @class */ (function (_super) {
    __extends(EmployeeSavingsPaymentInfoField, _super);
    /**
     * Creates an instance of EmployeeSavingsPaymentInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EmployeeSavingsPaymentInfoField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EmployeeSavingsPaymentInfo) || this;
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new core_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.contractName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contractName = new core_1.ComplexTypeStringPropertyField('ContractName', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.paymentNotes]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentNotes = new core_1.ComplexTypeStringPropertyField('PaymentNotes', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.an]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.an = new core_1.ComplexTypeNumberPropertyField('AN', _this, 'Edm.Double');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.aNcurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aNcurrency = new core_1.ComplexTypeStringPropertyField('ANcurrency', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.ag]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ag = new core_1.ComplexTypeNumberPropertyField('AG', _this, 'Edm.Double');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.aGcurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aGcurrency = new core_1.ComplexTypeStringPropertyField('AGcurrency', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.bankName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankName = new core_1.ComplexTypeStringPropertyField('BankName', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.bankCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankCode = new core_1.ComplexTypeStringPropertyField('BankCode', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.bankAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankAccount = new core_1.ComplexTypeStringPropertyField('BankAccount', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.sequence]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequence = new core_1.ComplexTypeEnumPropertyField('Sequence', _this);
        return _this;
    }
    return EmployeeSavingsPaymentInfoField;
}(core_1.ComplexTypeField));
exports.EmployeeSavingsPaymentInfoField = EmployeeSavingsPaymentInfoField;
var EmployeeSavingsPaymentInfo;
(function (EmployeeSavingsPaymentInfo) {
    /**
     * Metadata information on all properties of the `EmployeeSavingsPaymentInfo` complex type.
     */
    EmployeeSavingsPaymentInfo._propertyMetadata = [{
            originalName: 'EmployeeID',
            name: 'employeeId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ContractName',
            name: 'contractName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PaymentNotes',
            name: 'paymentNotes',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AN',
            name: 'an',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ANcurrency',
            name: 'aNcurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AG',
            name: 'ag',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AGcurrency',
            name: 'aGcurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BankName',
            name: 'bankName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BankCode',
            name: 'bankCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BankAccount',
            name: 'bankAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Sequence',
            name: 'sequence',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EmployeeSavingsPaymentInfo);
    }
    EmployeeSavingsPaymentInfo.build = build;
})(EmployeeSavingsPaymentInfo = exports.EmployeeSavingsPaymentInfo || (exports.EmployeeSavingsPaymentInfo = {}));
//# sourceMappingURL=EmployeeSavingsPaymentInfo.js.map