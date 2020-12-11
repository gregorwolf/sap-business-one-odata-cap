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
exports.DynamicSystemStringParams = exports.DynamicSystemStringParamsField = exports.createDynamicSystemStringParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DynamicSystemStringParams.build]] instead.
 */
function createDynamicSystemStringParams(json) {
    return DynamicSystemStringParams.build(json);
}
exports.createDynamicSystemStringParams = createDynamicSystemStringParams;
/**
 * DynamicSystemStringParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DynamicSystemStringParamsField = /** @class */ (function (_super) {
    __extends(DynamicSystemStringParamsField, _super);
    /**
     * Creates an instance of DynamicSystemStringParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DynamicSystemStringParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DynamicSystemStringParams) || this;
        /**
         * Representation of the [[DynamicSystemStringParams.formId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formId = new core_1.ComplexTypeStringPropertyField('FormID', _this, 'Edm.String');
        /**
         * Representation of the [[DynamicSystemStringParams.itemId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemId = new core_1.ComplexTypeStringPropertyField('ItemID', _this, 'Edm.String');
        /**
         * Representation of the [[DynamicSystemStringParams.columnId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnId = new core_1.ComplexTypeStringPropertyField('ColumnID', _this, 'Edm.String');
        return _this;
    }
    return DynamicSystemStringParamsField;
}(core_1.ComplexTypeField));
exports.DynamicSystemStringParamsField = DynamicSystemStringParamsField;
var DynamicSystemStringParams;
(function (DynamicSystemStringParams) {
    /**
     * Metadata information on all properties of the `DynamicSystemStringParams` complex type.
     */
    DynamicSystemStringParams._propertyMetadata = [{
            originalName: 'FormID',
            name: 'formId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemID',
            name: 'itemId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ColumnID',
            name: 'columnId',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DynamicSystemStringParams);
    }
    DynamicSystemStringParams.build = build;
})(DynamicSystemStringParams = exports.DynamicSystemStringParams || (exports.DynamicSystemStringParams = {}));
//# sourceMappingURL=DynamicSystemStringParams.js.map