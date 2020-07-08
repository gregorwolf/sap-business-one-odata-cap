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
exports.OpenningBalanceAccount = exports.OpenningBalanceAccountField = exports.createOpenningBalanceAccount = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[OpenningBalanceAccount.build]] instead.
 */
function createOpenningBalanceAccount(json) {
    return OpenningBalanceAccount.build(json);
}
exports.createOpenningBalanceAccount = createOpenningBalanceAccount;
/**
 * OpenningBalanceAccountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var OpenningBalanceAccountField = /** @class */ (function (_super) {
    __extends(OpenningBalanceAccountField, _super);
    function OpenningBalanceAccountField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[OpenningBalanceAccount.openBalanceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openBalanceAccount = new v4_1.ComplexTypeStringPropertyField('OpenBalanceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[OpenningBalanceAccount.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new v4_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[OpenningBalanceAccount.ref1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ref1 = new v4_1.ComplexTypeStringPropertyField('Ref1', _this, 'Edm.String');
        /**
         * Representation of the [[OpenningBalanceAccount.ref2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ref2 = new v4_1.ComplexTypeStringPropertyField('Ref2', _this, 'Edm.String');
        /**
         * Representation of the [[OpenningBalanceAccount.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new v4_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[OpenningBalanceAccount.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new v4_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        return _this;
    }
    return OpenningBalanceAccountField;
}(v4_1.ComplexTypeField));
exports.OpenningBalanceAccountField = OpenningBalanceAccountField;
var OpenningBalanceAccount;
(function (OpenningBalanceAccount) {
    function build(json) {
        return v4_1.createComplexType(json, {
            OpenBalanceAccount: function (openBalanceAccount) { return ({ openBalanceAccount: v4_1.edmToTs(openBalanceAccount, 'Edm.String') }); },
            Date: function (date) { return ({ date: v4_1.edmToTs(date, 'Edm.DateTimeOffset') }); },
            Ref1: function (ref1) { return ({ ref1: v4_1.edmToTs(ref1, 'Edm.String') }); },
            Ref2: function (ref2) { return ({ ref2: v4_1.edmToTs(ref2, 'Edm.String') }); },
            Details: function (details) { return ({ details: v4_1.edmToTs(details, 'Edm.String') }); },
            BPLID: function (bplid) { return ({ bplid: v4_1.edmToTs(bplid, 'Edm.Int32') }); }
        });
    }
    OpenningBalanceAccount.build = build;
})(OpenningBalanceAccount = exports.OpenningBalanceAccount || (exports.OpenningBalanceAccount = {}));
//# sourceMappingURL=OpenningBalanceAccount.js.map