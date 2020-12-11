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
exports.LegalDataParams = exports.LegalDataParamsField = exports.createLegalDataParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[LegalDataParams.build]] instead.
 */
function createLegalDataParams(json) {
    return LegalDataParams.build(json);
}
exports.createLegalDataParams = createLegalDataParams;
/**
 * LegalDataParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var LegalDataParamsField = /** @class */ (function (_super) {
    __extends(LegalDataParamsField, _super);
    /**
     * Creates an instance of LegalDataParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function LegalDataParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, LegalDataParams) || this;
        /**
         * Representation of the [[LegalDataParams.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[LegalDataParams.sourceObjectType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceObjectType = new core_1.ComplexTypeStringPropertyField('SourceObjectType', _this, 'Edm.String');
        /**
         * Representation of the [[LegalDataParams.sourceObjectEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceObjectEntry = new core_1.ComplexTypeNumberPropertyField('SourceObjectEntry', _this, 'Edm.Int32');
        return _this;
    }
    return LegalDataParamsField;
}(core_1.ComplexTypeField));
exports.LegalDataParamsField = LegalDataParamsField;
var LegalDataParams;
(function (LegalDataParams) {
    /**
     * Metadata information on all properties of the `LegalDataParams` complex type.
     */
    LegalDataParams._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SourceObjectType',
            name: 'sourceObjectType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SourceObjectEntry',
            name: 'sourceObjectEntry',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, LegalDataParams);
    }
    LegalDataParams.build = build;
})(LegalDataParams = exports.LegalDataParams || (exports.LegalDataParams = {}));
//# sourceMappingURL=LegalDataParams.js.map