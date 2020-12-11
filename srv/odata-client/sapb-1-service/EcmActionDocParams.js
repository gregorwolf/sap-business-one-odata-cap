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
exports.EcmActionDocParams = exports.EcmActionDocParamsField = exports.createEcmActionDocParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EcmActionDocParams.build]] instead.
 */
function createEcmActionDocParams(json) {
    return EcmActionDocParams.build(json);
}
exports.createEcmActionDocParams = createEcmActionDocParams;
/**
 * EcmActionDocParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EcmActionDocParamsField = /** @class */ (function (_super) {
    __extends(EcmActionDocParamsField, _super);
    /**
     * Creates an instance of EcmActionDocParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EcmActionDocParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EcmActionDocParams) || this;
        /**
         * Representation of the [[EcmActionDocParams.protocol]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.protocol = new core_1.ComplexTypeStringPropertyField('Protocol', _this, 'Edm.String');
        /**
         * Representation of the [[EcmActionDocParams.sourceType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceType = new core_1.ComplexTypeStringPropertyField('SourceType', _this, 'Edm.String');
        /**
         * Representation of the [[EcmActionDocParams.sourceObject]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceObject = new core_1.ComplexTypeNumberPropertyField('SourceObject', _this, 'Edm.Int32');
        return _this;
    }
    return EcmActionDocParamsField;
}(core_1.ComplexTypeField));
exports.EcmActionDocParamsField = EcmActionDocParamsField;
var EcmActionDocParams;
(function (EcmActionDocParams) {
    /**
     * Metadata information on all properties of the `EcmActionDocParams` complex type.
     */
    EcmActionDocParams._propertyMetadata = [{
            originalName: 'Protocol',
            name: 'protocol',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SourceType',
            name: 'sourceType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SourceObject',
            name: 'sourceObject',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EcmActionDocParams);
    }
    EcmActionDocParams.build = build;
})(EcmActionDocParams = exports.EcmActionDocParams || (exports.EcmActionDocParams = {}));
//# sourceMappingURL=EcmActionDocParams.js.map