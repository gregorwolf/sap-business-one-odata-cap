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
exports.BpAccountReceivablePayble = exports.BpAccountReceivablePaybleField = exports.createBpAccountReceivablePayble = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BpAccountReceivablePayble.build]] instead.
 */
function createBpAccountReceivablePayble(json) {
    return BpAccountReceivablePayble.build(json);
}
exports.createBpAccountReceivablePayble = createBpAccountReceivablePayble;
/**
 * BpAccountReceivablePaybleField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpAccountReceivablePaybleField = /** @class */ (function (_super) {
    __extends(BpAccountReceivablePaybleField, _super);
    /**
     * Creates an instance of BpAccountReceivablePaybleField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BpAccountReceivablePaybleField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BpAccountReceivablePayble) || this;
        /**
         * Representation of the [[BpAccountReceivablePayble.accountType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountType = new core_1.ComplexTypeEnumPropertyField('AccountType', _this);
        /**
         * Representation of the [[BpAccountReceivablePayble.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new core_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpAccountReceivablePayble.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        return _this;
    }
    return BpAccountReceivablePaybleField;
}(core_1.ComplexTypeField));
exports.BpAccountReceivablePaybleField = BpAccountReceivablePaybleField;
var BpAccountReceivablePayble;
(function (BpAccountReceivablePayble) {
    /**
     * Metadata information on all properties of the `BpAccountReceivablePayble` complex type.
     */
    BpAccountReceivablePayble._propertyMetadata = [{
            originalName: 'AccountType',
            name: 'accountType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AccountCode',
            name: 'accountCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BpAccountReceivablePayble);
    }
    BpAccountReceivablePayble.build = build;
})(BpAccountReceivablePayble = exports.BpAccountReceivablePayble || (exports.BpAccountReceivablePayble = {}));
//# sourceMappingURL=BpAccountReceivablePayble.js.map