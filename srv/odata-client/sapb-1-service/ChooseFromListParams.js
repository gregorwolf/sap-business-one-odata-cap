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
exports.ChooseFromListParams = exports.ChooseFromListParamsField = exports.createChooseFromListParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ChooseFromListParams.build]] instead.
 */
function createChooseFromListParams(json) {
    return ChooseFromListParams.build(json);
}
exports.createChooseFromListParams = createChooseFromListParams;
/**
 * ChooseFromListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ChooseFromListParamsField = /** @class */ (function (_super) {
    __extends(ChooseFromListParamsField, _super);
    /**
     * Creates an instance of ChooseFromListParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ChooseFromListParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ChooseFromListParams) || this;
        /**
         * Representation of the [[ChooseFromListParams.objectName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectName = new core_1.ComplexTypeStringPropertyField('ObjectName', _this, 'Edm.String');
        /**
         * Representation of the [[ChooseFromListParams.fieldIndex]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldIndex = new core_1.ComplexTypeNumberPropertyField('FieldIndex', _this, 'Edm.Int32');
        return _this;
    }
    return ChooseFromListParamsField;
}(core_1.ComplexTypeField));
exports.ChooseFromListParamsField = ChooseFromListParamsField;
var ChooseFromListParams;
(function (ChooseFromListParams) {
    /**
     * Metadata information on all properties of the `ChooseFromListParams` complex type.
     */
    ChooseFromListParams._propertyMetadata = [{
            originalName: 'ObjectName',
            name: 'objectName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FieldIndex',
            name: 'fieldIndex',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ChooseFromListParams);
    }
    ChooseFromListParams.build = build;
})(ChooseFromListParams = exports.ChooseFromListParams || (exports.ChooseFromListParams = {}));
//# sourceMappingURL=ChooseFromListParams.js.map