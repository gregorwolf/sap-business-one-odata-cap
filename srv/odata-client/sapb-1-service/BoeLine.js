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
exports.BoeLine = exports.BoeLineField = exports.createBoeLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BoeLine.build]] instead.
 */
function createBoeLine(json) {
    return BoeLine.build(json);
}
exports.createBoeLine = createBoeLine;
/**
 * BoeLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BoeLineField = /** @class */ (function (_super) {
    __extends(BoeLineField, _super);
    function BoeLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BoeLine.boeKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boeKey = new v4_1.ComplexTypeNumberPropertyField('BOEKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[BoeLine.boeNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boeNumber = new v4_1.ComplexTypeNumberPropertyField('BOENumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BoeLine.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new v4_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BoeLine.bank]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bank = new v4_1.ComplexTypeStringPropertyField('Bank', _this, 'Edm.String');
        /**
         * Representation of the [[BoeLine.branch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.branch = new v4_1.ComplexTypeStringPropertyField('Branch', _this, 'Edm.String');
        /**
         * Representation of the [[BoeLine.accountNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountNumber = new v4_1.ComplexTypeStringPropertyField('AccountNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BoeLine.amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amount = new v4_1.ComplexTypeNumberPropertyField('Amount', _this, 'Edm.Double');
        return _this;
    }
    return BoeLineField;
}(v4_1.ComplexTypeField));
exports.BoeLineField = BoeLineField;
var BoeLine;
(function (BoeLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BOEKey: function (boeKey) { return ({ boeKey: v4_1.edmToTs(boeKey, 'Edm.Int32') }); },
            BOENumber: function (boeNumber) { return ({ boeNumber: v4_1.edmToTs(boeNumber, 'Edm.Int32') }); },
            DueDate: function (dueDate) { return ({ dueDate: v4_1.edmToTs(dueDate, 'Edm.DateTimeOffset') }); },
            Bank: function (bank) { return ({ bank: v4_1.edmToTs(bank, 'Edm.String') }); },
            Branch: function (branch) { return ({ branch: v4_1.edmToTs(branch, 'Edm.String') }); },
            AccountNumber: function (accountNumber) { return ({ accountNumber: v4_1.edmToTs(accountNumber, 'Edm.String') }); },
            Amount: function (amount) { return ({ amount: v4_1.edmToTs(amount, 'Edm.Double') }); }
        });
    }
    BoeLine.build = build;
})(BoeLine = exports.BoeLine || (exports.BoeLine = {}));
//# sourceMappingURL=BoeLine.js.map