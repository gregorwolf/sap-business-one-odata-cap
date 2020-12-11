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
exports.DiscountGroup = exports.DiscountGroupField = exports.createDiscountGroup = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DiscountGroup.build]] instead.
 */
function createDiscountGroup(json) {
    return DiscountGroup.build(json);
}
exports.createDiscountGroup = createDiscountGroup;
/**
 * DiscountGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DiscountGroupField = /** @class */ (function (_super) {
    __extends(DiscountGroupField, _super);
    /**
     * Creates an instance of DiscountGroupField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DiscountGroupField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DiscountGroup) || this;
        /**
         * Representation of the [[DiscountGroup.objectEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectEntry = new core_1.ComplexTypeStringPropertyField('ObjectEntry', _this, 'Edm.String');
        /**
         * Representation of the [[DiscountGroup.discountPercentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountPercentage = new core_1.ComplexTypeNumberPropertyField('DiscountPercentage', _this, 'Edm.Double');
        /**
         * Representation of the [[DiscountGroup.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[DiscountGroup.baseObjectType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseObjectType = new core_1.ComplexTypeEnumPropertyField('BaseObjectType', _this);
        return _this;
    }
    return DiscountGroupField;
}(core_1.ComplexTypeField));
exports.DiscountGroupField = DiscountGroupField;
var DiscountGroup;
(function (DiscountGroup) {
    /**
     * Metadata information on all properties of the `DiscountGroup` complex type.
     */
    DiscountGroup._propertyMetadata = [{
            originalName: 'ObjectEntry',
            name: 'objectEntry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DiscountPercentage',
            name: 'discountPercentage',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BaseObjectType',
            name: 'baseObjectType',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DiscountGroup);
    }
    DiscountGroup.build = build;
})(DiscountGroup = exports.DiscountGroup || (exports.DiscountGroup = {}));
//# sourceMappingURL=DiscountGroup.js.map