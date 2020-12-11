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
exports.CheckLine = exports.CheckLineField = exports.createCheckLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CheckLine.build]] instead.
 */
function createCheckLine(json) {
    return CheckLine.build(json);
}
exports.createCheckLine = createCheckLine;
/**
 * CheckLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CheckLineField = /** @class */ (function (_super) {
    __extends(CheckLineField, _super);
    /**
     * Creates an instance of CheckLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CheckLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CheckLine) || this;
        /**
         * Representation of the [[CheckLine.checkKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkKey = new core_1.ComplexTypeNumberPropertyField('CheckKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[CheckLine.checkNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkNumber = new core_1.ComplexTypeNumberPropertyField('CheckNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CheckLine.bank]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bank = new core_1.ComplexTypeStringPropertyField('Bank', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.branch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.branch = new core_1.ComplexTypeStringPropertyField('Branch', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.cashCheck]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashCheck = new core_1.ComplexTypeStringPropertyField('CashCheck', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.checkDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkDate = new core_1.ComplexTypeDatePropertyField('CheckDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[CheckLine.customer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customer = new core_1.ComplexTypeStringPropertyField('Customer', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.checkAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkAmount = new core_1.ComplexTypeNumberPropertyField('CheckAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[CheckLine.deposited]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deposited = new core_1.ComplexTypeEnumPropertyField('Deposited', _this);
        /**
         * Representation of the [[CheckLine.transferred]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transferred = new core_1.ComplexTypeEnumPropertyField('Transferred', _this);
        /**
         * Representation of the [[CheckLine.accountNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountNumber = new core_1.ComplexTypeStringPropertyField('AccountNumber', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.checkCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkCurrency = new core_1.ComplexTypeStringPropertyField('CheckCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.fiscalId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fiscalId = new core_1.ComplexTypeStringPropertyField('FiscalID', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.originallyIssuedBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originallyIssuedBy = new core_1.ComplexTypeStringPropertyField('OriginallyIssuedBy', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.rejectedByBank]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rejectedByBank = new core_1.ComplexTypeEnumPropertyField('RejectedByBank', _this);
        return _this;
    }
    return CheckLineField;
}(core_1.ComplexTypeField));
exports.CheckLineField = CheckLineField;
var CheckLine;
(function (CheckLine) {
    /**
     * Metadata information on all properties of the `CheckLine` complex type.
     */
    CheckLine._propertyMetadata = [{
            originalName: 'CheckKey',
            name: 'checkKey',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CheckNumber',
            name: 'checkNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Bank',
            name: 'bank',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Branch',
            name: 'branch',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CashCheck',
            name: 'cashCheck',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CheckDate',
            name: 'checkDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Customer',
            name: 'customer',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CheckAmount',
            name: 'checkAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Deposited',
            name: 'deposited',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Transferred',
            name: 'transferred',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AccountNumber',
            name: 'accountNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CheckCurrency',
            name: 'checkCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FiscalID',
            name: 'fiscalId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OriginallyIssuedBy',
            name: 'originallyIssuedBy',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RejectedByBank',
            name: 'rejectedByBank',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CheckLine);
    }
    CheckLine.build = build;
})(CheckLine = exports.CheckLine || (exports.CheckLine = {}));
//# sourceMappingURL=CheckLine.js.map