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
exports.BpCode = exports.BpCodeField = exports.createBpCode = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BpCode.build]] instead.
 */
function createBpCode(json) {
    return BpCode.build(json);
}
exports.createBpCode = createBpCode;
/**
 * BpCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpCodeField = /** @class */ (function (_super) {
    __extends(BpCodeField, _super);
    /**
     * Creates an instance of BpCodeField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BpCodeField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BpCode) || this;
        /**
         * Representation of the [[BpCode.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[BpCode.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BpCode.debit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debit = new core_1.ComplexTypeNumberPropertyField('Debit', _this, 'Edm.Double');
        /**
         * Representation of the [[BpCode.credit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.credit = new core_1.ComplexTypeNumberPropertyField('Credit', _this, 'Edm.Double');
        /**
         * Representation of the [[BpCode.systemDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemDebit = new core_1.ComplexTypeNumberPropertyField('SystemDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BpCode.systemCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemCredit = new core_1.ComplexTypeNumberPropertyField('SystemCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BpCode.foreignDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignDebit = new core_1.ComplexTypeNumberPropertyField('ForeignDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BpCode.foreignCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignCredit = new core_1.ComplexTypeNumberPropertyField('ForeignCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BpCode.foreignCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignCurrency = new core_1.ComplexTypeStringPropertyField('ForeignCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[BpCode.bpCtrlAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCtrlAcct = new core_1.ComplexTypeStringPropertyField('BpCtrlAcct', _this, 'Edm.String');
        return _this;
    }
    return BpCodeField;
}(core_1.ComplexTypeField));
exports.BpCodeField = BpCodeField;
var BpCode;
(function (BpCode) {
    /**
     * Metadata information on all properties of the `BpCode` complex type.
     */
    BpCode._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DueDate',
            name: 'dueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Debit',
            name: 'debit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Credit',
            name: 'credit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SystemDebit',
            name: 'systemDebit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SystemCredit',
            name: 'systemCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ForeignDebit',
            name: 'foreignDebit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ForeignCredit',
            name: 'foreignCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ForeignCurrency',
            name: 'foreignCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BpCtrlAcct',
            name: 'bpCtrlAcct',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BpCode);
    }
    BpCode.build = build;
})(BpCode = exports.BpCode || (exports.BpCode = {}));
//# sourceMappingURL=BpCode.js.map