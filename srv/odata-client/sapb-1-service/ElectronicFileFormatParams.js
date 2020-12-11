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
exports.ElectronicFileFormatParams = exports.ElectronicFileFormatParamsField = exports.createElectronicFileFormatParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ElectronicFileFormatParams.build]] instead.
 */
function createElectronicFileFormatParams(json) {
    return ElectronicFileFormatParams.build(json);
}
exports.createElectronicFileFormatParams = createElectronicFileFormatParams;
/**
 * ElectronicFileFormatParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ElectronicFileFormatParamsField = /** @class */ (function (_super) {
    __extends(ElectronicFileFormatParamsField, _super);
    /**
     * Creates an instance of ElectronicFileFormatParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ElectronicFileFormatParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ElectronicFileFormatParams) || this;
        /**
         * Representation of the [[ElectronicFileFormatParams.formatId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formatId = new core_1.ComplexTypeNumberPropertyField('FormatID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ElectronicFileFormatParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        return _this;
    }
    return ElectronicFileFormatParamsField;
}(core_1.ComplexTypeField));
exports.ElectronicFileFormatParamsField = ElectronicFileFormatParamsField;
var ElectronicFileFormatParams;
(function (ElectronicFileFormatParams) {
    /**
     * Metadata information on all properties of the `ElectronicFileFormatParams` complex type.
     */
    ElectronicFileFormatParams._propertyMetadata = [{
            originalName: 'FormatID',
            name: 'formatId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ElectronicFileFormatParams);
    }
    ElectronicFileFormatParams.build = build;
})(ElectronicFileFormatParams = exports.ElectronicFileFormatParams || (exports.ElectronicFileFormatParams = {}));
//# sourceMappingURL=ElectronicFileFormatParams.js.map