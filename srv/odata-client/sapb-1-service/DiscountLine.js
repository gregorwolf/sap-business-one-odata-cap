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
exports.DiscountLine = exports.DiscountLineField = exports.createDiscountLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DiscountLine.build]] instead.
 */
function createDiscountLine(json) {
    return DiscountLine.build(json);
}
exports.createDiscountLine = createDiscountLine;
/**
 * DiscountLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DiscountLineField = /** @class */ (function (_super) {
    __extends(DiscountLineField, _super);
    /**
     * Creates an instance of DiscountLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DiscountLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DiscountLine) || this;
        /**
         * Representation of the [[DiscountLine.discountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountCode = new core_1.ComplexTypeStringPropertyField('DiscountCode', _this, 'Edm.String');
        /**
         * Representation of the [[DiscountLine.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineId', _this, 'Edm.Int32');
        /**
         * Representation of the [[DiscountLine.numOfDays]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numOfDays = new core_1.ComplexTypeNumberPropertyField('NumOfDays', _this, 'Edm.Int32');
        /**
         * Representation of the [[DiscountLine.discount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discount = new core_1.ComplexTypeNumberPropertyField('Discount', _this, 'Edm.Double');
        /**
         * Representation of the [[DiscountLine.day]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.day = new core_1.ComplexTypeNumberPropertyField('Day', _this, 'Edm.Int32');
        /**
         * Representation of the [[DiscountLine.month]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.month = new core_1.ComplexTypeNumberPropertyField('Month', _this, 'Edm.Int32');
        return _this;
    }
    return DiscountLineField;
}(core_1.ComplexTypeField));
exports.DiscountLineField = DiscountLineField;
var DiscountLine;
(function (DiscountLine) {
    /**
     * Metadata information on all properties of the `DiscountLine` complex type.
     */
    DiscountLine._propertyMetadata = [{
            originalName: 'DiscountCode',
            name: 'discountCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LineId',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'NumOfDays',
            name: 'numOfDays',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Discount',
            name: 'discount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Day',
            name: 'day',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Month',
            name: 'month',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DiscountLine);
    }
    DiscountLine.build = build;
})(DiscountLine = exports.DiscountLine || (exports.DiscountLine = {}));
//# sourceMappingURL=DiscountLine.js.map