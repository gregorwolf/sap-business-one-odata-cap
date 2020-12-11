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
exports.DiscountGroupLine = exports.DiscountGroupLineField = exports.createDiscountGroupLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DiscountGroupLine.build]] instead.
 */
function createDiscountGroupLine(json) {
    return DiscountGroupLine.build(json);
}
exports.createDiscountGroupLine = createDiscountGroupLine;
/**
 * DiscountGroupLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DiscountGroupLineField = /** @class */ (function (_super) {
    __extends(DiscountGroupLineField, _super);
    /**
     * Creates an instance of DiscountGroupLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DiscountGroupLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DiscountGroupLine) || this;
        /**
         * Representation of the [[DiscountGroupLine.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DiscountGroupLine.objectType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectType = new core_1.ComplexTypeEnumPropertyField('ObjectType', _this);
        /**
         * Representation of the [[DiscountGroupLine.objectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectCode = new core_1.ComplexTypeStringPropertyField('ObjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[DiscountGroupLine.discountType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountType = new core_1.ComplexTypeEnumPropertyField('DiscountType', _this);
        /**
         * Representation of the [[DiscountGroupLine.discount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discount = new core_1.ComplexTypeNumberPropertyField('Discount', _this, 'Edm.Double');
        /**
         * Representation of the [[DiscountGroupLine.paidQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidQuantity = new core_1.ComplexTypeNumberPropertyField('PaidQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DiscountGroupLine.freeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeQuantity = new core_1.ComplexTypeNumberPropertyField('FreeQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DiscountGroupLine.maximumFreeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maximumFreeQuantity = new core_1.ComplexTypeNumberPropertyField('MaximumFreeQuantity', _this, 'Edm.Double');
        return _this;
    }
    return DiscountGroupLineField;
}(core_1.ComplexTypeField));
exports.DiscountGroupLineField = DiscountGroupLineField;
var DiscountGroupLine;
(function (DiscountGroupLine) {
    /**
     * Metadata information on all properties of the `DiscountGroupLine` complex type.
     */
    DiscountGroupLine._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ObjectType',
            name: 'objectType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ObjectCode',
            name: 'objectCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DiscountType',
            name: 'discountType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Discount',
            name: 'discount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PaidQuantity',
            name: 'paidQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FreeQuantity',
            name: 'freeQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'MaximumFreeQuantity',
            name: 'maximumFreeQuantity',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DiscountGroupLine);
    }
    DiscountGroupLine.build = build;
})(DiscountGroupLine = exports.DiscountGroupLine || (exports.DiscountGroupLine = {}));
//# sourceMappingURL=DiscountGroupLine.js.map