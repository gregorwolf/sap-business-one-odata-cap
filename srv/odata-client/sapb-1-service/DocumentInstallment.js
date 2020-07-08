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
exports.DocumentInstallment = exports.DocumentInstallmentField = exports.createDocumentInstallment = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DocumentInstallment.build]] instead.
 */
function createDocumentInstallment(json) {
    return DocumentInstallment.build(json);
}
exports.createDocumentInstallment = createDocumentInstallment;
/**
 * DocumentInstallmentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentInstallmentField = /** @class */ (function (_super) {
    __extends(DocumentInstallmentField, _super);
    function DocumentInstallmentField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentInstallment.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new v4_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DocumentInstallment.percentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percentage = new v4_1.ComplexTypeNumberPropertyField('Percentage', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentInstallment.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new v4_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentInstallment.lastDunningDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastDunningDate = new v4_1.ComplexTypeDatePropertyField('LastDunningDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DocumentInstallment.dunningLevel]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dunningLevel = new v4_1.ComplexTypeNumberPropertyField('DunningLevel', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentInstallment.totalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalFc = new v4_1.ComplexTypeNumberPropertyField('TotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentInstallment.installmentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.installmentId = new v4_1.ComplexTypeNumberPropertyField('InstallmentId', _this, 'Edm.Int32');
        return _this;
    }
    return DocumentInstallmentField;
}(v4_1.ComplexTypeField));
exports.DocumentInstallmentField = DocumentInstallmentField;
var DocumentInstallment;
(function (DocumentInstallment) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DueDate: function (dueDate) { return ({ dueDate: v4_1.edmToTs(dueDate, 'Edm.DateTimeOffset') }); },
            Percentage: function (percentage) { return ({ percentage: v4_1.edmToTs(percentage, 'Edm.Double') }); },
            Total: function (total) { return ({ total: v4_1.edmToTs(total, 'Edm.Double') }); },
            LastDunningDate: function (lastDunningDate) { return ({ lastDunningDate: v4_1.edmToTs(lastDunningDate, 'Edm.DateTimeOffset') }); },
            DunningLevel: function (dunningLevel) { return ({ dunningLevel: v4_1.edmToTs(dunningLevel, 'Edm.Int32') }); },
            TotalFC: function (totalFc) { return ({ totalFc: v4_1.edmToTs(totalFc, 'Edm.Double') }); },
            InstallmentId: function (installmentId) { return ({ installmentId: v4_1.edmToTs(installmentId, 'Edm.Int32') }); }
        });
    }
    DocumentInstallment.build = build;
})(DocumentInstallment = exports.DocumentInstallment || (exports.DocumentInstallment = {}));
//# sourceMappingURL=DocumentInstallment.js.map