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
exports.NcmCodeSetupParams = exports.NcmCodeSetupParamsField = exports.createNcmCodeSetupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[NcmCodeSetupParams.build]] instead.
 */
function createNcmCodeSetupParams(json) {
    return NcmCodeSetupParams.build(json);
}
exports.createNcmCodeSetupParams = createNcmCodeSetupParams;
/**
 * NcmCodeSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var NcmCodeSetupParamsField = /** @class */ (function (_super) {
    __extends(NcmCodeSetupParamsField, _super);
    /**
     * Creates an instance of NcmCodeSetupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function NcmCodeSetupParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, NcmCodeSetupParams) || this;
        /**
         * Representation of the [[NcmCodeSetupParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[NcmCodeSetupParams.ncmCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ncmCode = new core_1.ComplexTypeStringPropertyField('NCMCode', _this, 'Edm.String');
        /**
         * Representation of the [[NcmCodeSetupParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return NcmCodeSetupParamsField;
}(core_1.ComplexTypeField));
exports.NcmCodeSetupParamsField = NcmCodeSetupParamsField;
var NcmCodeSetupParams;
(function (NcmCodeSetupParams) {
    /**
     * Metadata information on all properties of the `NcmCodeSetupParams` complex type.
     */
    NcmCodeSetupParams._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'NCMCode',
            name: 'ncmCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, NcmCodeSetupParams);
    }
    NcmCodeSetupParams.build = build;
})(NcmCodeSetupParams = exports.NcmCodeSetupParams || (exports.NcmCodeSetupParams = {}));
//# sourceMappingURL=NcmCodeSetupParams.js.map