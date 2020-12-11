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
exports.Wtdbp = exports.WtdbpField = exports.createWtdbp = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[Wtdbp.build]] instead.
 */
function createWtdbp(json) {
    return Wtdbp.build(json);
}
exports.createWtdbp = createWtdbp;
/**
 * WtdbpField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtdbpField = /** @class */ (function (_super) {
    __extends(WtdbpField, _super);
    /**
     * Creates an instance of WtdbpField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WtdbpField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, Wtdbp) || this;
        /**
         * Representation of the [[Wtdbp.bpKeyPart1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpKeyPart1 = new core_1.ComplexTypeStringPropertyField('BPKeyPart1', _this, 'Edm.String');
        /**
         * Representation of the [[Wtdbp.bpKeyPart2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpKeyPart2 = new core_1.ComplexTypeStringPropertyField('BPKeyPart2', _this, 'Edm.String');
        /**
         * Representation of the [[Wtdbp.wTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxCode = new core_1.ComplexTypeStringPropertyField('WTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[Wtdbp.effectiveDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDateFrom = new core_1.ComplexTypeDatePropertyField('EffectiveDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[Wtdbp.effectiveDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDateTo = new core_1.ComplexTypeDatePropertyField('EffectiveDateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[Wtdbp.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new core_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[Wtdbp.detailType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.detailType = new core_1.ComplexTypeEnumPropertyField('DetailType', _this);
        return _this;
    }
    return WtdbpField;
}(core_1.ComplexTypeField));
exports.WtdbpField = WtdbpField;
var Wtdbp;
(function (Wtdbp) {
    /**
     * Metadata information on all properties of the `Wtdbp` complex type.
     */
    Wtdbp._propertyMetadata = [{
            originalName: 'BPKeyPart1',
            name: 'bpKeyPart1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPKeyPart2',
            name: 'bpKeyPart2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WTaxCode',
            name: 'wTaxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EffectiveDateFrom',
            name: 'effectiveDateFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'EffectiveDateTo',
            name: 'effectiveDateTo',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Rate',
            name: 'rate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DetailType',
            name: 'detailType',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, Wtdbp);
    }
    Wtdbp.build = build;
})(Wtdbp = exports.Wtdbp || (exports.Wtdbp = {}));
//# sourceMappingURL=Wtdbp.js.map