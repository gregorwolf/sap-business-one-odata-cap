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
exports.BoeLine = exports.BoeLineField = exports.createBoeLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of BoeLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BoeLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BoeLine) || this;
        /**
         * Representation of the [[BoeLine.boeKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boeKey = new core_1.ComplexTypeNumberPropertyField('BOEKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[BoeLine.boeNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boeNumber = new core_1.ComplexTypeNumberPropertyField('BOENumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BoeLine.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BoeLine.bank]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bank = new core_1.ComplexTypeStringPropertyField('Bank', _this, 'Edm.String');
        /**
         * Representation of the [[BoeLine.branch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.branch = new core_1.ComplexTypeStringPropertyField('Branch', _this, 'Edm.String');
        /**
         * Representation of the [[BoeLine.accountNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountNumber = new core_1.ComplexTypeStringPropertyField('AccountNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BoeLine.amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amount = new core_1.ComplexTypeNumberPropertyField('Amount', _this, 'Edm.Double');
        /**
         * Representation of the [[BoeLine.boeStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boeStatus = new core_1.ComplexTypeEnumPropertyField('BOEStatus', _this);
        /**
         * Representation of the [[BoeLine.transferred]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transferred = new core_1.ComplexTypeEnumPropertyField('Transferred', _this);
        return _this;
    }
    return BoeLineField;
}(core_1.ComplexTypeField));
exports.BoeLineField = BoeLineField;
var BoeLine;
(function (BoeLine) {
    /**
     * Metadata information on all properties of the `BoeLine` complex type.
     */
    BoeLine._propertyMetadata = [{
            originalName: 'BOEKey',
            name: 'boeKey',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BOENumber',
            name: 'boeNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DueDate',
            name: 'dueDate',
            type: 'Edm.DateTimeOffset',
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
            originalName: 'AccountNumber',
            name: 'accountNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Amount',
            name: 'amount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BOEStatus',
            name: 'boeStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Transferred',
            name: 'transferred',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BoeLine);
    }
    BoeLine.build = build;
})(BoeLine = exports.BoeLine || (exports.BoeLine = {}));
//# sourceMappingURL=BoeLine.js.map