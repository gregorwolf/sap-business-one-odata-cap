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
exports.BillOfExchangeTransDeposit = exports.BillOfExchangeTransDepositField = exports.createBillOfExchangeTransDeposit = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransDeposit.build]] instead.
 */
function createBillOfExchangeTransDeposit(json) {
    return BillOfExchangeTransDeposit.build(json);
}
exports.createBillOfExchangeTransDeposit = createBillOfExchangeTransDeposit;
/**
 * BillOfExchangeTransDepositField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BillOfExchangeTransDepositField = /** @class */ (function (_super) {
    __extends(BillOfExchangeTransDepositField, _super);
    /**
     * Creates an instance of BillOfExchangeTransDepositField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BillOfExchangeTransDepositField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BillOfExchangeTransDeposit) || this;
        /**
         * Representation of the [[BillOfExchangeTransDeposit.depositNorm]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depositNorm = new core_1.ComplexTypeStringPropertyField('DepositNorm', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchangeTransDeposit.postingType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postingType = new core_1.ComplexTypeEnumPropertyField('PostingType', _this);
        /**
         * Representation of the [[BillOfExchangeTransDeposit.bankCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankCountry = new core_1.ComplexTypeStringPropertyField('BankCountry', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchangeTransDeposit.bankAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankAccount = new core_1.ComplexTypeStringPropertyField('BankAccount', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchangeTransDeposit.bankDepositAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankDepositAccount = new core_1.ComplexTypeStringPropertyField('BankDepositAccount', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchangeTransDeposit.bankBranch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankBranch = new core_1.ComplexTypeStringPropertyField('BankBranch', _this, 'Edm.String');
        return _this;
    }
    return BillOfExchangeTransDepositField;
}(core_1.ComplexTypeField));
exports.BillOfExchangeTransDepositField = BillOfExchangeTransDepositField;
var BillOfExchangeTransDeposit;
(function (BillOfExchangeTransDeposit) {
    /**
     * Metadata information on all properties of the `BillOfExchangeTransDeposit` complex type.
     */
    BillOfExchangeTransDeposit._propertyMetadata = [{
            originalName: 'DepositNorm',
            name: 'depositNorm',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PostingType',
            name: 'postingType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BankCountry',
            name: 'bankCountry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BankAccount',
            name: 'bankAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BankDepositAccount',
            name: 'bankDepositAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BankBranch',
            name: 'bankBranch',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BillOfExchangeTransDeposit);
    }
    BillOfExchangeTransDeposit.build = build;
})(BillOfExchangeTransDeposit = exports.BillOfExchangeTransDeposit || (exports.BillOfExchangeTransDeposit = {}));
//# sourceMappingURL=BillOfExchangeTransDeposit.js.map