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
exports.OriginalItem = exports.OriginalItemField = exports.createOriginalItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AlternativeItem_1 = require("./AlternativeItem");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[OriginalItem.build]] instead.
 */
function createOriginalItem(json) {
    return OriginalItem.build(json);
}
exports.createOriginalItem = createOriginalItem;
/**
 * OriginalItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var OriginalItemField = /** @class */ (function (_super) {
    __extends(OriginalItemField, _super);
    /**
     * Creates an instance of OriginalItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function OriginalItemField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, OriginalItem) || this;
        /**
         * Representation of the [[OriginalItem.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[OriginalItem.itemName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemName = new core_1.ComplexTypeStringPropertyField('ItemName', _this, 'Edm.String');
        /**
         * Representation of the [[OriginalItem.alternativeItems]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alternativeItems = new core_1.CollectionField('AlternativeItems', _this, AlternativeItem_1.AlternativeItem);
        return _this;
    }
    return OriginalItemField;
}(core_1.ComplexTypeField));
exports.OriginalItemField = OriginalItemField;
var OriginalItem;
(function (OriginalItem) {
    /**
     * Metadata information on all properties of the `OriginalItem` complex type.
     */
    OriginalItem._propertyMetadata = [{
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemName',
            name: 'itemName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AlternativeItems',
            name: 'alternativeItems',
            type: AlternativeItem_1.AlternativeItem,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, OriginalItem);
    }
    OriginalItem.build = build;
})(OriginalItem = exports.OriginalItem || (exports.OriginalItem = {}));
//# sourceMappingURL=OriginalItem.js.map