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
exports.OpenningBalanceAccount = exports.OpenningBalanceAccountField = exports.createOpenningBalanceAccount = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of OpenningBalanceAccountField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function OpenningBalanceAccountField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, OpenningBalanceAccount) || this;
        /**
         * Representation of the [[OpenningBalanceAccount.openBalanceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openBalanceAccount = new core_1.ComplexTypeStringPropertyField('OpenBalanceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[OpenningBalanceAccount.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new core_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[OpenningBalanceAccount.ref1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ref1 = new core_1.ComplexTypeStringPropertyField('Ref1', _this, 'Edm.String');
        /**
         * Representation of the [[OpenningBalanceAccount.ref2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ref2 = new core_1.ComplexTypeStringPropertyField('Ref2', _this, 'Edm.String');
        /**
         * Representation of the [[OpenningBalanceAccount.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new core_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[OpenningBalanceAccount.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new core_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        return _this;
    }
    return OpenningBalanceAccountField;
}(core_1.ComplexTypeField));
exports.OpenningBalanceAccountField = OpenningBalanceAccountField;
var OpenningBalanceAccount;
(function (OpenningBalanceAccount) {
    /**
     * Metadata information on all properties of the `OpenningBalanceAccount` complex type.
     */
    OpenningBalanceAccount._propertyMetadata = [{
            originalName: 'OpenBalanceAccount',
            name: 'openBalanceAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Date',
            name: 'date',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Ref1',
            name: 'ref1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Ref2',
            name: 'ref2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Details',
            name: 'details',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPLID',
            name: 'bplid',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, OpenningBalanceAccount);
    }
    OpenningBalanceAccount.build = build;
})(OpenningBalanceAccount = exports.OpenningBalanceAccount || (exports.OpenningBalanceAccount = {}));
//# sourceMappingURL=OpenningBalanceAccount.js.map