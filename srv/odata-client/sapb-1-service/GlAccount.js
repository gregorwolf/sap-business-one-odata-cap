"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function GlAccountField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[GlAccount.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccount.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new v4_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[GlAccount.debit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debit = new v4_1.ComplexTypeNumberPropertyField('Debit', _this, 'Edm.Double');
        /**
         * Representation of the [[GlAccount.credit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.credit = new v4_1.ComplexTypeNumberPropertyField('Credit', _this, 'Edm.Double');
        /**
         * Representation of the [[GlAccount.systemDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemDebit = new v4_1.ComplexTypeNumberPropertyField('SystemDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[GlAccount.systemCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemCredit = new v4_1.ComplexTypeNumberPropertyField('SystemCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[GlAccount.foreignDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignDebit = new v4_1.ComplexTypeNumberPropertyField('ForeignDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[GlAccount.foreignCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignCredit = new v4_1.ComplexTypeNumberPropertyField('ForeignCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[GlAccount.foreignCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignCurrency = new v4_1.ComplexTypeStringPropertyField('ForeignCurrency', _this, 'Edm.String');
        return _this;
    }
    return GlAccountField;
}(v4_1.ComplexTypeField));
exports.GlAccountField = GlAccountField;
var GlAccount;
(function (GlAccount) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            DueDate: function (dueDate) { return ({ dueDate: v4_1.edmToTs(dueDate, 'Edm.DateTimeOffset') }); },
            Debit: function (debit) { return ({ debit: v4_1.edmToTs(debit, 'Edm.Double') }); },
            Credit: function (credit) { return ({ credit: v4_1.edmToTs(credit, 'Edm.Double') }); },
            SystemDebit: function (systemDebit) { return ({ systemDebit: v4_1.edmToTs(systemDebit, 'Edm.Double') }); },
            SystemCredit: function (systemCredit) { return ({ systemCredit: v4_1.edmToTs(systemCredit, 'Edm.Double') }); },
            ForeignDebit: function (foreignDebit) { return ({ foreignDebit: v4_1.edmToTs(foreignDebit, 'Edm.Double') }); },
            ForeignCredit: function (foreignCredit) { return ({ foreignCredit: v4_1.edmToTs(foreignCredit, 'Edm.Double') }); },
            ForeignCurrency: function (foreignCurrency) { return ({ foreignCurrency: v4_1.edmToTs(foreignCurrency, 'Edm.String') }); }
        });
    }
    GlAccount.build = build;
})(GlAccount = exports.GlAccount || (exports.GlAccount = {}));
//# sourceMappingURL=GlAccount.js.map