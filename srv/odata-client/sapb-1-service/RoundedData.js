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
exports.RoundedData = exports.RoundedDataField = exports.createRoundedData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[RoundedData.build]] instead.
 */
function createRoundedData(json) {
    return RoundedData.build(json);
}
exports.createRoundedData = createRoundedData;
/**
 * RoundedDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RoundedDataField = /** @class */ (function (_super) {
    __extends(RoundedDataField, _super);
    /**
     * Creates an instance of RoundedDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function RoundedDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, RoundedData) || this;
        /**
         * Representation of the [[RoundedData.value]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.value = new core_1.ComplexTypeNumberPropertyField('Value', _this, 'Edm.Double');
        return _this;
    }
    return RoundedDataField;
}(core_1.ComplexTypeField));
exports.RoundedDataField = RoundedDataField;
var RoundedData;
(function (RoundedData) {
    /**
     * Metadata information on all properties of the `RoundedData` complex type.
     */
    RoundedData._propertyMetadata = [{
            originalName: 'Value',
            name: 'value',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, RoundedData);
    }
    RoundedData.build = build;
})(RoundedData = exports.RoundedData || (exports.RoundedData = {}));
//# sourceMappingURL=RoundedData.js.map