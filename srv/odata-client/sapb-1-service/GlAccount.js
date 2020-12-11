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
exports.GlAccount = exports.GlAccountField = exports.createGlAccount = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[GlAccount.build]] instead.
 */
function createGlAccount(json) {
    return GlAccount.build(json);
}
exports.createGlAccount = createGlAccount;
/**
 * GlAccountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var GlAccountField = /** @class */ (function (_super) {
    __extends(GlAccountField, _super);
    /**
     * Creates an instance of GlAccountField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function GlAccountField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, GlAccount) || this;
        /**
         * Representation of the [[GlAccount.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccount.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[GlAccount.debit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debit = new core_1.ComplexTypeNumberPropertyField('Debit', _this, 'Edm.Double');
        /**
         * Representation of the [[GlAccount.credit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.credit = new core_1.ComplexTypeNumberPropertyField('Credit', _this, 'Edm.Double');
        /**
         * Representation of the [[GlAccount.systemDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemDebit = new core_1.ComplexTypeNumberPropertyField('SystemDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[GlAccount.systemCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemCredit = new core_1.ComplexTypeNumberPropertyField('SystemCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[GlAccount.foreignDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignDebit = new core_1.ComplexTypeNumberPropertyField('ForeignDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[GlAccount.foreignCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignCredit = new core_1.ComplexTypeNumberPropertyField('ForeignCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[GlAccount.foreignCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignCurrency = new core_1.ComplexTypeStringPropertyField('ForeignCurrency', _this, 'Edm.String');
        return _this;
    }
    return GlAccountField;
}(core_1.ComplexTypeField));
exports.GlAccountField = GlAccountField;
var GlAccount;
(function (GlAccount) {
    /**
     * Metadata information on all properties of the `GlAccount` complex type.
     */
    GlAccount._propertyMetadata = [{
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
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, GlAccount);
    }
    GlAccount.build = build;
})(GlAccount = exports.GlAccount || (exports.GlAccount = {}));
//# sourceMappingURL=GlAccount.js.map