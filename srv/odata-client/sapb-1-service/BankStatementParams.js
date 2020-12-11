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
exports.BankStatementParams = exports.BankStatementParamsField = exports.createBankStatementParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BankStatementParams.build]] instead.
 */
function createBankStatementParams(json) {
    return BankStatementParams.build(json);
}
exports.createBankStatementParams = createBankStatementParams;
/**
 * BankStatementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BankStatementParamsField = /** @class */ (function (_super) {
    __extends(BankStatementParamsField, _super);
    /**
     * Creates an instance of BankStatementParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BankStatementParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BankStatementParams) || this;
        /**
         * Representation of the [[BankStatementParams.internalNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalNumber = new core_1.ComplexTypeNumberPropertyField('InternalNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementParams.bankAccountKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankAccountKey = new core_1.ComplexTypeNumberPropertyField('BankAccountKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementParams.statementNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statementNumber = new core_1.ComplexTypeStringPropertyField('StatementNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementParams.statementDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statementDate = new core_1.ComplexTypeDatePropertyField('StatementDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BankStatementParams.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[BankStatementParams.imported]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.imported = new core_1.ComplexTypeEnumPropertyField('Imported', _this);
        /**
         * Representation of the [[BankStatementParams.startingBalanceF]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startingBalanceF = new core_1.ComplexTypeNumberPropertyField('StartingBalanceF', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementParams.endingBalanceF]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endingBalanceF = new core_1.ComplexTypeNumberPropertyField('EndingBalanceF', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementParams.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementParams.startingBalanceL]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startingBalanceL = new core_1.ComplexTypeNumberPropertyField('StartingBalanceL', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementParams.endingBalanceL]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endingBalanceL = new core_1.ComplexTypeNumberPropertyField('EndingBalanceL', _this, 'Edm.Double');
        return _this;
    }
    return BankStatementParamsField;
}(core_1.ComplexTypeField));
exports.BankStatementParamsField = BankStatementParamsField;
var BankStatementParams;
(function (BankStatementParams) {
    /**
     * Metadata information on all properties of the `BankStatementParams` complex type.
     */
    BankStatementParams._propertyMetadata = [{
            originalName: 'InternalNumber',
            name: 'internalNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BankAccountKey',
            name: 'bankAccountKey',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StatementNumber',
            name: 'statementNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StatementDate',
            name: 'statementDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Imported',
            name: 'imported',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'StartingBalanceF',
            name: 'startingBalanceF',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'EndingBalanceF',
            name: 'endingBalanceF',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Currency',
            name: 'currency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StartingBalanceL',
            name: 'startingBalanceL',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'EndingBalanceL',
            name: 'endingBalanceL',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BankStatementParams);
    }
    BankStatementParams.build = build;
})(BankStatementParams = exports.BankStatementParams || (exports.BankStatementParams = {}));
//# sourceMappingURL=BankStatementParams.js.map